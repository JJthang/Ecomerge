import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./Routes/Product";

const app = express();
app.use(express.json());
app.use(cors());

const { API } = process.env;

app.use("/api", route);

mongoose.connect(API);
export const viteNodeApp = app;
