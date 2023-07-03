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
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Category", CategorySchame);
