import mongoose from "mongoose";

const EmailSchame = new mongoose.Schame({
  name: String,
  email: String,
  text: String,
});

export default mongoose.model("Email", EmailSchame);
