import express from "express";
import { nextApp, nextHandler } from "./next-utils";
require("dotenv").config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  app.use((req, res) => nextHandler(req, res));
};

start();
