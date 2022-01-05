// import { HelloResolver } from "./resolvers/hello";
// import { UserResolver } from "./resolvers/user";
import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import { readFileSync } from "fs";
import "reflect-metadata";
import { createConnection } from "typeorm";
// import { buildSchema } from "type-graphql";
import { MyContext } from "./types";
import express = require("express");
import path = require("path/posix");

const main = async () => {
  const supergraphSdl = readFileSync(
    path.join(__dirname, "supergraph.graphql")
  ).toString();

  await createConnection();
  const app = express();
  app.use(
    cors({
      origin: [`http://localhost:3000`, "https://studio.apollographql.com"],
      credentials: true,
    })
  );
  const apolloServer = new ApolloServer({
    gateway: new ApolloGateway({
      supergraphSdl,
    }),
    // schema: await buildSchema({
    //   resolvers: [HelloResolver, UserResolver],
    //   validate: false,
    // }),
    context: ({ req, res }): MyContext => ({
      req,
      res,
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
    // path: "/graphql",
  });
  app.listen(4000, () => console.log("server up on 4000"));
};
main();
