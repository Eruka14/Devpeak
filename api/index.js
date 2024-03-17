import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import likesRouter from "./routes/likes.js";
import answersRouter from "./routes/answers.js";
import questionsRouter from "./routes/questions.js";
import multer from "multer";
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

//file upload multer library
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload"); //save to a folder/
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); //rename the file with date
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

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
