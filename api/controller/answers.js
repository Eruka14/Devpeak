import { db } from "../connection.js";
import moment from "moment";
import jwt from "jsonwebtoken";

export const getAnswers = (req, res) => {
  const q =
    "SELECT a.*, u.id AS user_id, username, image FROM answers AS a JOIN users AS u ON (u.id = a.user_id) WHERE a.question_id = ? ORDER BY a.created_date DESC";

  db.query(q, [req.query.question_id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addAnswer = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Нэвтрэх эрхгүй!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token хүчингүй байна.");
    const q =
      "INSERT INTO answers (`desc`, `created_date`, `question_id`, `user_id`) VALUES (?)";

    const values = [
      req.body.desc,
      moment(Date()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.question_id,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(400).json(err);
      return res.status(200).json("Хариулт амжилттай нийтлэгдлээ.");
    });
  });
};

// Засна
export const deleteAnswer = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Нэвтрэх эрхгүй!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token хүчингүй байна.");
    const q =
      "INSERT INTO answers (`desc`, `created_date`, `question_id`, `user_id`) VALUES (?)";

    const values = [
      req.body.desc,
      moment(Date()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.question_id,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(400).json(err);
      return res.status(200).json("Хариулт амжилттай нийтлэгдлээ.");
    });
  });
};

// Засна
export const editAnswer = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Нэвтрэх эрхгүй!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token хүчингүй байна.");
    const q =
      "INSERT INTO answers (`desc`, `created_date`, `question_id`, `user_id`) VALUES (?)";

    const values = [
      req.body.desc,
      moment(Date()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.question_id,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(400).json(err);
      return res.status(200).json("Хариулт амжилттай нийтлэгдлээ.");
    });
  });
};
