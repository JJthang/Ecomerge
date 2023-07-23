import express from "express";
import {
  Create_Category,
  Delete_Category,
  Get_Category,
  Get_One_Category,
  Put_Category,
} from "../controller/Category";
import { CheckPermission } from "../middleware/Check_Permissions";

const CateRoute = express.Router();
// CheckPermission,
CateRoute.post("/category", CheckPermission, Create_Category);
CateRoute.get("/category", Get_Category);
CateRoute.get("/category/:id", Get_One_Category);
CateRoute.delete("/category/:id", Delete_Category);
CateRoute.put("/category/:id", CheckPermission, Put_Category);
export default CateRoute;
