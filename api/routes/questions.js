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
router.delete("/:id", deleteQuestion);
router.put("/:id", editQuestion);

export default router;
