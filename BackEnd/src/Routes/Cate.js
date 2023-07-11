import express from "express";
import {
  CreateCart,
  Put_Cate,
  Get_All_Cart,
  Get_Product_user,
} from "../controller/Cart";

const RouteCate = express.Router();

RouteCate.post("/cart", CreateCart);
RouteCate.get("/cart", Get_All_Cart);
RouteCate.get("/cart/:id", Get_Product_user);
RouteCate.put("/cart/:id", Put_Cate);

export default RouteCate;
