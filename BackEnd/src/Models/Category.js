import mongoose from "mongoose";

const CategorySchame = mongoose.Schema(
  {
    Cate_Name: String,
    Product: [
      {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  { timestamps: false, versionKey: false }
);
export default mongoose.model("Category", CategorySchame);
