import * as cdk from "@aws-cdk/core";
import { CdkAppStack } from "./stack";

const app = new cdk.App();
new CdkAppStack(app, "GraphqlTemplate", {});
