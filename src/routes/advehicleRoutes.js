import express from "express";
import { Postadvehicle } from "../controllers/advehicleController.js";

export const advehicleRouter = express.Router();

advehicleRouter.post("/", Postadvehicle);
