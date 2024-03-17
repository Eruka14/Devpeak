import express from "express";
import {
  getQuestions,
  addQuestion,
  deleteQuestion,
  editQuestion,
} from "../controller/questions.js";
const router = express.Router();

// Болсон
router.get("/", getQuestions);
router.post("/", addQuestion);
router.post("/:id", deleteQuestion);

// Дутуу засна
router.post("/:id", editQuestion);

export default router;
