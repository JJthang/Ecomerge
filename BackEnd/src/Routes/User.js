import express from "express";
import { SIgnIn, SignUp } from "../controller/User";

const RouteUser = express.Router();

RouteUser.post("/SignUp", SignUp);
RouteUser.post("/SignIn", SIgnIn);

export default RouteUser;
