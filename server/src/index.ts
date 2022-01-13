import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { CharResolver } from "./resolvers/character";
import { Char_SpellResolver } from "./resolvers/char_spells";
import { NoteResolver } from "./resolvers/notes";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";
import express = require("express");

const main = async () => {
  const typeClient = await createConnection();
  await typeClient.runMigrations();
  const app = express();
  app.use(
    cors({
      origin: [`http://localhost:3000`, "https://studio.apollographql.com"],
      credentials: true,
    })
  );
  const apolloServer = new ApolloServer({
    introspection: true,
    schema: await buildSchema({
      resolvers: [UserResolver, CharResolver, NoteResolver, Char_SpellResolver],
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
    path: "/graphql",
  });
  app.listen(4000, () => console.log("server up on 4000"));
};
main();
