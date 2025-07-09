//import libraries
import express from "express";
import cookieParser from "cookie-parser";
import connectMongoDB from "./libs/connectMongoDB.js";
//import routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/users.routes.js";
//import dev tools
import morgan from "morgan";
import { config } from "dotenv";

config();

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //read cookies from the browser

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  await connectMongoDB();
});
