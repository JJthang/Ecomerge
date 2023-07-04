import mongoose from "mongoose";

const SchameUser = new mongoose.Schema({
  Name_user: String,
  User_password: String,
  User_email: String,
  User_role: {
    type: String,
    default: "member",
  },
});

export default mongoose.model("User", SchameUser);
