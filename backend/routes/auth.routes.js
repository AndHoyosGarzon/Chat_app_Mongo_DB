import { Router } from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/signup", signupUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", logoutUser);

export default authRoutes;
