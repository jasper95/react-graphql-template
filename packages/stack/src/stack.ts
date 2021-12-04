import * as cdk from '@aws-cdk/core'
import * as apigateway from '@aws-cdk/aws-apigateway'
import * as lambda from '@aws-cdk/aws-lambda-nodejs'

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
  }
}
