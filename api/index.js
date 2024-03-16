import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import likesRouter from "./routes/likes.js";
import answersRouter from "./routes/answers.js";
import questionsRouter from "./routes/questions.js";
// express ашиглана.
const app = express();

// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
//амжигдаж буй өгөгдөл json оор дамжина.
app.use(express.json());
// Cors ашиглана
app.use(
  cors({
    origin: "http://localhost:8000",
  })
);
// Cookie
app.use(cookieParser());

// App router-ийг зааж өгч байна.
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/likes", likesRouter);
app.use("/api/answers", answersRouter);
app.use("/api/questions", questionsRouter);

// backend 8000 port дээр ажиллана
app.listen(8000, () => {
  console.log("API ажиллаж байна.");
});
