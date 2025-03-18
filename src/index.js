import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import cookieParser from "cookie-parser";
import cors from "cors";
import { advehicleRouter } from "./routes/advehicleRoutes.js";

export const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
dotenv.config({ path: "./src/.env" });
app.use(cookieParser());
export const upload = multer({
  dest: "uploads/",
});

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

connectDB();

app.use("/api/v1/vehicle", advehicleRouter);

app.listen(4000, () => console.log("port is running on 4k"));
