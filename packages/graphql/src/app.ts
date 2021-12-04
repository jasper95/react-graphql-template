import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './lib/schema';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import './lib/connect-db';

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
