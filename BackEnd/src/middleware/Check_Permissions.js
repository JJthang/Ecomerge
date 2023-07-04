import jwt from "jsonwebtoken";
import SchameUser from "../Models/User";

export const CheckPermission = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("You must be logged in to perform this action");
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "1234", async (error, payload) => {
      if (error) {
        if (error.name == "TokenExpiredError") {
          return res.json({
            message: "Token không hợp lệ",
          });
        }
        if (error.name == "JsonWebTokenError") {
          return res.json({
            message: "Xin vui lòng đăng nhập lại",
          });
        }
      }
      const user = await SchameUser.findById(payload._id);
      console.log(user);
      if (user && user.User_role !== "admin") {
        return res.json({
          message: "You are not qualified",
        });
      }
      next();
    });
  } catch (error) {}
};
