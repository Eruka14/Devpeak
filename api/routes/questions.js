import express from "express";
import { getQuestions, addQuestion } from "../controller/questions.js";
const router = express.Router();

router.get("/", getQuestions);
router.post("/", addQuestion);

export default router;
