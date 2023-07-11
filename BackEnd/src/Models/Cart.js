import mongoose from "mongoose";

const SchameCart = new mongoose.Schema(
  {
    id_user: { type: mongoose.Types.ObjectId },
    code: String,
    Quantity: Number,
    List_Product: [
      {
        _id: String,
        Product_Name: String,
        Product_Price: Number,
        Product_KG: Number,
        Product_Image: String,
        Product_Desc: String,
        Category: String,
        code: String,
        Quantity: String,
      },
    ],
  },
  { timestamps: false, versionKey: false }
);

export default mongoose.model("Cart", SchameCart);
