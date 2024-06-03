import express, { json } from "express";
import dotenv from "dotenv";
import getEnv from "./utils/getEnv";
import cors from "cors";
import ROUTES from "./constants/ROUTES";
import connectDb from "./utils/connectDb";
import handleError from "./middlewares/error.middlewere";
import { processRouter } from "./routers/process.router";
import cron from "node-cron";
import updateLogs from "./utils/updateLogs";

dotenv.config();
const app = express();
app.use(json());
app.use(cors());
connectDb();

const port = getEnv("PORT", 3000);

app.use(`${ROUTES.BASES.API_V1}${ROUTES.BASES.PROCESS}`, processRouter);

app.use("/", (_req, res) => {
  res.send("Welcome to api");
});

app.use(handleError);

app.listen(port, () => {
  console.log(`App is running at PORT:${port}`);
});

cron.schedule("*/10 * * * *", updateLogs);
