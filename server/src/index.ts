import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { CharResolver } from "./resolvers/character";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";
import express = require("express");

const main = async () => {
  await createConnection();
  const app = express();
  app.use(
    cors({
      origin: [`http://localhost:3000`, "https://studio.apollographql.com"],
      credentials: true,
    })
  );
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, CharResolver],
      validate: false,
    }),
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
