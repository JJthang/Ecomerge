import mongoose from "mongoose";

const CheckOut_Schame = new mongoose.Schema(
  {
    name: String,
    email: String,
    number: Number,
    id_user: String,
    address: String,
    status: {
      type: String,
      default: "Processing",
    },
    payment: String,
    List_Product: [
      {
        _id: String,
        Product_Name: String,
        Product_Price: Number,
        Product_KG: Number,
        Product_Image: String,
        Product_Desc: String,
        size: String,
        Category: String,
        code: String,
        Quantity: String,
      },
    ],
  },
  { timestamps: false, versionKey: false }
);

export default mongoose.model("CheckOut", CheckOut_Schame);
