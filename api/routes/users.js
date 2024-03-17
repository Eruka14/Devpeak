import express from "express";
import { getUser, updateUser } from "../controller/users.js";
const router = express.Router();

router.get("/find/:user_id", getUser);
router.get("/", updateUser);

export default router;
