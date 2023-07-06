import express from "express";
import {
  Create_Product,
  Delete_Product,
  Get_One_Product,
  Get_Product,
  Put_Product,
} from "../controller/Product";
import { CheckPermission } from "../middleware/Check_Permissions";

const route = express.Router();
// CheckPermission,
route.post("/product", Create_Product);
route.get("/product", Get_Product);
route.get("/product/:id", Get_One_Product);
route.delete("/product/:id", Delete_Product);
route.put("/product/:id", Put_Product);

export default route;
