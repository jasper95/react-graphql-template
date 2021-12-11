const serverlessExpress = require('@vendia/serverless-express')
import app from 'graphql-api'

exports.handler = serverlessExpress({ app })
