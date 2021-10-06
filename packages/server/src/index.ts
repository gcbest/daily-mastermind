import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import {typeDefs} from './graphql'

const executableSchema = makeExecutableSchema({
  typeDefs,
//   resolvers,
});

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/graphql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
}));
app.listen(PORT, () => console.log('Running a GraphQL API server at http://localhost:4000/graphql'));
