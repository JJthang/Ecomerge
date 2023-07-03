import express from "express";
import {
  Create_Category,
  Delete_Category,
  Get_Category,
  Get_One_Category,
  Put_Category,
} from "../controller/Category";

const CateRoute = express.Router();
CateRoute.post("/category", Create_Category);
CateRoute.get("/category", Get_Category);
CateRoute.get("/category/:id", Get_One_Category);
CateRoute.delete("/category/:id", Delete_Category);
CateRoute.put("/category/:id", Put_Category);
export default CateRoute;
