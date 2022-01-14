import "dotenv-safe/config";
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
  const port = process.env.PORT;
  const typeClient = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: ["dist/**/*.js"],
    migrations: ["dist/migration/**/*.js"],
  });
  await typeClient.runMigrations();
  const app = express();
  app.use(
    cors({
      origin: [
        process.env.CORS_ORIGIN,
        process.env.SAFETY_CORS,
        "https://studio.apollographql.com",
      ],
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
  app.listen(parseInt(port), () => console.log(`server up on ${port}`));
};
main();
