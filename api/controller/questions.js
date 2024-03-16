import moment from "moment/moment.js";
import { db } from "../connection.js";
import jwt from "jsonwebtoken";

export const getQuestions = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Нэвтрэх эрхгүй!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token хүчингүй байна.");

    const q = `SELECT q.*, u.id AS user_id, username, image FROM questions AS q JOIN users AS u ON (u.id = q.user_id) ORDER BY q.created_date DESC`;

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addQuestion = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Нэвтрэх эрхгүй!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token хүчингүй байна.");
    const q =
      "INSERT INTO questions (`title`, `desc`, `created_date`, `user_id`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      moment(Date()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(400).json(err);
      return res.status(200).json("Асуулт амжилттай нийтлэгдлээ.");
    });
  });
};
