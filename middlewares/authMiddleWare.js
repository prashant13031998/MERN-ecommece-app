import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//JWT authorization token middleware
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = await JWT.decode(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    if (decode) {
      req.user = decode;
      next();
    }
    console.log(decode);
  } catch (error) {
    console.log(error);
  }
};

//admin access middleware

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res
        .status(401)
        .send({ success: false, message: "Unauthorized Access" });
    } else {
      next();
    }
  } catch (error) {
    return res
      .status(401)
      .send({ success: false, message: "Error in adminMiddleware", error });
  }
};
