import mongoose from "mongoose";

const ProductSchame = new mongoose.Schema(
  {
    Product_Name: String,
    Product_Price: Number,
    Product_KG: Number,
    Product_Image: String,
    Product_Desc: String,
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("product", ProductSchame);
