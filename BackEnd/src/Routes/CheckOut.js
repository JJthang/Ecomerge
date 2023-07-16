import express from "express";
import {
  Get_All_CheckOut,
  Get_CheckOut,
  createCheckOut,
} from "../controller/CheckOut";

const RouteCheckOut = express.Router();

RouteCheckOut.post("/CheckOut", createCheckOut);
RouteCheckOut.get("/CheckOut", Get_All_CheckOut);
RouteCheckOut.get("/CheckOut/:id", Get_CheckOut);

export default RouteCheckOut;
