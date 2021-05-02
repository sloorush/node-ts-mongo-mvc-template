import * as express from "express";
import * as bodyParser from "body-parser";

import { connect } from "./database/database";
import userRouter from "./routes/user.router";

process.on("uncaughtException", (e) => {
  console.log(e);
});

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());

connect();

app.get("/", (req, res) => {
  res.send("Issa Template");
});

app.use("/user", userRouter);

export default app;
