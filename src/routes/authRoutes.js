import express from "express";
import { register, login, profile } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import upload from "../utils/multer.js";


const router = express.Router();

router.post("/register", upload.single("profilePic"), register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);

export default router;
