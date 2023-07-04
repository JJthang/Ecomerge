import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./Routes/Product";
import CateRoute from "./Routes/Category";
import RouteUser from "./Routes/User";

const app = express();
app.use(express.json());
app.use(cors());

const { API } = process.env;

app.use("/api", route);
app.use("/api", CateRoute);
app.use("/api", RouteUser);

mongoose.connect(API);
export const viteNodeApp = app;
