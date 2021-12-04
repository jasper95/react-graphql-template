const serverlessExpress = require("@vendia/serverless-express");
import app from "@monorepo/graphql";

exports.handler = serverlessExpress({ app });
