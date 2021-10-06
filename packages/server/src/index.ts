import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import {typeDefs} from '../graphql'

console.log(typeDefs);


const executableSchema = makeExecutableSchema({
  typeDefs,
//   resolvers,
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');