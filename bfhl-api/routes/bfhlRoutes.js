import express from "express";
import { handleBfhlPost } from "../controllers/bfhlController.js";

const router = express.Router();

router.post("/", handleBfhlPost);

export default router;
