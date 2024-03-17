import express from "express";
import {
  getAnswers,
  addAnswer,
  deleteAnswer,
  editAnswer,
} from "../controller/answers.js";
const router = express.Router();

// Болсон
router.get("/", getAnswers);
router.post("/", addAnswer);

// Болоогүй засна
router.post("/:id", deleteAnswer);
router.post("/:id", editAnswer);

export default router;
