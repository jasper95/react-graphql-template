import * as cdk from '@aws-cdk/core'
import * as apigateway from '@aws-cdk/aws-apigateway'
import * as lambda from '@aws-cdk/aws-lambda-nodejs'
import * as s3 from '@aws-cdk/aws-s3'
import * as iam from '@aws-cdk/aws-iam'
import * as cloudfront from '@aws-cdk/aws-cloudfront'
import * as s3deploy from '@aws-cdk/aws-s3-deployment'
import path from 'path'

export class CdkAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    const demoFunction = new lambda.NodejsFunction(this, 'graphqlFunction', {
      entry: './dist/lambda/graphql.js',
      handler: 'handler',
      memorySize: 1024,
      environment: {
        DB_URL: cdk.SecretValue.secretsManager('GraphqlSpike', {
          jsonField: 'GRAPHQL_MONGO_URL',
        }).toString(),
      },
    })

    const api = new apigateway.LambdaRestApi(this, 'graphqlApi', {
      handler: demoFunction,
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
      },
      defaultMethodOptions: {
        // authorizationType: apigateway.AuthorizationType.COGNITO,
      },
    })

    // const zone = route53.HostedZone.fromLookup(this, 'Zone', {
    //   domainName: props.domainName,
    // })
    // const siteDomain = props.siteSubDomain + '.' + props.domainName
    const cloudfrontOAI = new cloudfront.OriginAccessIdentity(
      this,
      'cloudfront-OAI',
      {
        comment: `OAI for ${id}`,
      }
    )

    // new cdk.CfnOutput(this, 'Site', { value: 'https://' + siteDomain })

    // Content bucket
    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      // bucketName: siteDomain,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,

      /**
       * The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
       * the new bucket, and it will remain in your account until manually deleted. By setting the policy to
       * DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
       */
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code

      /**
       * For sample purposes only, if you create an S3 bucket then populate it, stack destruction fails.  This
       * setting will enable full cleanup of the demo.
       */
      autoDeleteObjects: true, // NOT recommended for production code
    })
    // Grant access to cloudfront
    siteBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [siteBucket.arnForObjects('*')],
        principals: [
          new iam.CanonicalUserPrincipal(
            cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
          ),
        ],
      })
    )
    // new CfnOutput(this, 'Bucket', { value: siteBucket.bucketName })

    // TLS certificate
    // const certificateArn = new acm.DnsValidatedCertificate(
    //   this,
    //   'SiteCertificate',
    //   {
    //     domainName: siteDomain,
    //     hostedZone: zone,
    //     region: 'us-east-1', // Cloudfront only checks this region for certificates.
    //   }
    // ).certificateArn
    // new CfnOutput(this, 'Certificate', { value: certificateArn })

    // Specifies you want viewers to use HTTPS & TLS v1.1 to request your objects
    // const viewerCertificate = cloudfront.ViewerCertificate.fromAcmCertificate(
    //   {
    //     certificateArn: certificateArn,
    //     env: {
    //       region: Aws.REGION,
    //       account: Aws.ACCOUNT_ID,
    //     },
    //     node: this.node,
    //     stack: parent,
    //     metricDaysToExpiry: () =>
    //       new cloudwatch.Metric({
    //         namespace: 'TLS Viewer Certificate Validity',
    //         metricName: 'TLS Viewer Certificate Expired',
    //       }),
    //   },
    //   {
    //     sslMethod: cloudfront.SSLMethod.SNI,
    //     securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_1_2016,
    //     aliases: [siteDomain],
    //   }
    // )

    // CloudFront distribution
    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      'SiteDistribution',
      {
        // viewerCertificate,
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: siteBucket,
              originAccessIdentity: cloudfrontOAI,
            },
            behaviors: [
              {
                isDefaultBehavior: true,
                compress: true,
                allowedMethods:
                  cloudfront.CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
              },
            ],
          },
        ],
      }
    )

    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
    })

    new cdk.CfnOutput(this, 'DistributionName', {
      value: distribution.distributionDomainName,
    })

    // Route53 alias record for the CloudFront distribution
    // new route53.ARecord(this, 'SiteAliasRecord', {
    //   recordName: siteDomain,
    //   target: route53.RecordTarget.fromAlias(
    //     new targets.CloudFrontTarget(distribution)
    //   ),
    //   zone,
    // })

    // Deploy site contents to S3 bucket
    new s3deploy.BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [
        s3deploy.Source.asset(path.resolve(__dirname, '../../web/out')),
      ],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*'],
    })
  }
}
