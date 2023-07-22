import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./Routes/Product";
import CateRoute from "./Routes/Category";
import RouteUser from "./Routes/User";
import RouteCate from "./Routes/Cate";
import RouteCheckOut from "./Routes/CheckOut";
import routeEmail from "./Routes/Email";

const app = express();
app.use(express.json());
app.use(cors());

const { API } = process.env;

app.use("/api", route);
app.use("/api", CateRoute);
app.use("/api", RouteUser);
app.use("/api", RouteCate);
app.use("/api", RouteCheckOut);
app.use("/api", routeEmail);

mongoose.connect(API);
export const viteNodeApp = app;
