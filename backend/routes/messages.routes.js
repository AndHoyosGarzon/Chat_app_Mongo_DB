import { Router } from "express";
import {
  getMessages,
  sendMessage,
} from "../controllers/messages.controller.js";
import { protectedRoutes } from "../middlewares/protectedRoutes.js";

const messageRoutes = Router();

messageRoutes.post("/send/:id", protectedRoutes, sendMessage);

messageRoutes.get("/:id", protectedRoutes, getMessages);

export default messageRoutes;
