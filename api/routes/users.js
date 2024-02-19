import express from "express";
import { getUser } from "../controller/users.js";
const router = express.Router();

router.get("/find/:user_id", getUser);

export default router;
