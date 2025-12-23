import dotenv from "dotenv";
dotenv.config();

import Express from "express";
import helmet from "helmet";
import cors from "cors";
import { EnhancerRouter } from "./router/enhancer.routes";
import { Database } from "./utils/db";

const app = Express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*", // Adjust as needed for your frontend
  })
);
app.use(Express.json());
app.use(helmet());

const PREFIX = "/api/v1";
app.get(`${PREFIX}/`, (req, res) => {
  res.status(200).send("API is running");
});

app.use(`${PREFIX}/enhancer`, EnhancerRouter);

app.listen(port, async () => {
  await Database.getInstance().connect();
  console.log(`Server is running on port ${port}`);
});
