import { ApolloGateway } from "@apollo/gateway";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-micro";
import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";
// const typeDefs = gql`
//   type User {
//     id: ID
//   }

//   type Query {
//     getUser: User
//   }
// `;

// const resolvers = {
//   Query: {
//     getUser: () => {
//       return {
//         id: "Foo",
//       };
//     },
//   },
// };
const supergraphSdl = readFileSync("./supergraph.graphql").toString();

const apolloServer = new ApolloServer({
  gateway: new ApolloGateway({
    supergraphSdl,
  }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
