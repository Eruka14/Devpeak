import { db } from "../connection.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // Хэрэглэгчийг байгаа эсэхийг шалгана.
  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length)
      return res.status(409).json("Хэрэглэгч бүртгэлтэй байна!!!");

    // Байхгүй бол доорх код ажиллуулна.
    // Санамаргүй байдлаар үүссэн давс
    const salt = bcrypt.genSaltSync(10);
    // Хэрэглэгчийн нууц үгийг давс ашиглан encrypt хийх.
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    // users хүснэгтийн username, email, password баганд хэрэглэгч нэмэх хэсэг.
    const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";

    const values = [req.body.username, req.body.email, hashedPassword];
    // Өгөгдлийн сантай харицах функц.
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      else return res.status(200).json("Хэрэглэгчийг амжилттай бүртгэлээ.");
    });
  });
};
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
  });
};
export const logout = (req, res) => {};
