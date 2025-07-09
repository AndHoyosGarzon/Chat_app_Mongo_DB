import { verifyToken } from "../libs/JWT.js";
import User from "../models/users.model.js";

export const protectedRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token)
      return res
        .status(401)
        .json({ error: "Unauthorized - Token not Provided" });

    const decoded = verifyToken(token);

    if (!decoded)
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });

    const user = await User.findById(decoded.id).select("-password");

    if (!user)
      return res.status(401).json({ error: "Unauthorized - User not found" });

    req.userId = user._id;
    next();
  } catch (error) {
    console.log("Error in protectedRoutes", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
