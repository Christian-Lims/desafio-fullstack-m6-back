import { Router } from "express";
import { getProfileController } from "../controllers/session.controllers";
import authMiddleware from "../middlewares/authMiddlewares";

const profileRoutes = Router()

profileRoutes.get("", authMiddleware, getProfileController)

export default profileRoutes