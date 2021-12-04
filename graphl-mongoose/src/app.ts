import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './lib/schema';
import './lib/connect-db';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP(() => {
    return {
      context: { startTime: Date.now() },
      graphiql: true,
      schema,
    };
  }),
);

export default app;
