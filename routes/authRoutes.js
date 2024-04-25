import express from "express";
import * as authControllers from "../controllers/authControllers.js";

const router = express.Router();

router.post("/auth/register", authControllers.register);
router.post("/auth/login", authControllers.login);

export default router;
