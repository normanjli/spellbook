import "reflect-metadata";
import { createConnection } from "typeorm";
import express = require("express");
// import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { MyContext } from "./types";
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
  await createConnection();
  const app = express();
  // app.use(
  //   cors({
  //     origin: `http://localhost:3000`,
  //     credentials: true,
  //   })
  // );
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
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
    // cors: false,
  });
  app.listen(4000, () => console.log("server up on 4000"));
};
main();
