import jwt from "jsonwebtoken";
import User from "../models/users.js";

async function checkAuth(req, res, next) {
  let token;
  const headers = req.headers.authorization;
  if (headers && headers.startsWith("Bearer")) {
    try {
      token = headers.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select(
        "-password -confirm -token -createdAt -updateAt -__v "
      );
      return next();
    } catch (error) {
      return res.status(404).json({ message: "expired section" });
    }
  }
  if (!token) {
    const error = new Error(" Invalid token ");
    return res.status(498).json({ message: error.message });
  }
  next();
}

export default checkAuth;
