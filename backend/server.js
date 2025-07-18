//import libraries
import express from "express";
import cookieParser from "cookie-parser";
import connectMongoDB from "./libs/connectMongoDB.js";
import cors from "cors";
//import routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/users.routes.js";
//import dev tools
import morgan from "morgan";
import { config } from "dotenv";
import { app, server } from "./libs/socket.js";

config();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //read cookies from the browser

//cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3002;
server.listen(PORT, async () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  await connectMongoDB();
});
