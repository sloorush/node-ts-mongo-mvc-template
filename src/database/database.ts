import * as Mongoose from "mongoose";
import { UserModel } from "./users/users.model";

import * as dotenv from "dotenv";

dotenv.config();

let database: Mongoose.Connection;

console.log("Attempting db connection");

export const connect = () => {
  const uri: string = process.env.DB_URL ?? "gg";

  if (database) {
    return;
  }

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
