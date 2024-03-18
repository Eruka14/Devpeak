import express from "express";
import {
  getAnswers,
  addAnswer,
  deleteAnswer,
  editAnswer,
} from "../controller/answers.js";
const router = express.Router();

// Асуултын хариултыг авч чадахгүй байгаа.
router.get("/", getAnswers);
// Болсон
router.post("/", addAnswer);

// Болоогүй засна
router.delete("/:id", deleteAnswer);
router.put("/:id", editAnswer);

export default router;
