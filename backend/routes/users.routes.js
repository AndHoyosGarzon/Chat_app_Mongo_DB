import { Router } from "express";
import { protectedRoutes } from "../middlewares/protectedRoutes.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/", protectedRoutes, getUsersForSidebar);

export default userRoutes;
