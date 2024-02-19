import express from "express";
const app = express();
import userRouter from "./routes/users.js";

app.use("/api/users", userRouter);

app.listen(8000, () => {
  console.log("API working");
});
