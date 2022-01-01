import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then((res) => console.log(res, "started project"))
  .catch((error) => console.log(error));
