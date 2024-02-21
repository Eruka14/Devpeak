import { db } from "../connection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// export const register = (req, res) => {
//   // Хэрэглэгчийг байгаа эсэхийг шалгана.
//   const q = "SELECT * FROM users WHERE email = ?";
//   db.query(q, [req.body.username], (err, data) => {
//     if (err) return res.status(500).json(err);
//     if (data.length)
//       return res.status(409).json("Хэрэглэгч бүртгэлтэй байна!!!");

//     // Байхгүй бол доорх код ажиллуулна.
//     // Санамаргүй байдлаар үүссэн давс
//     const salt = bcrypt.genSaltSync(10);
//     // Хэрэглэгчийн нууц үгийг давс ашиглан encrypt хийх.
//     const hashedPassword = bcrypt.hashSync(req.body.password, salt);
//     // users хүснэгтийн username, email, password баганд хэрэглэгч нэмэх хэсэг.
//     const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";

//     const values = [req.body.username, req.body.email, hashedPassword];
//     // Өгөгдлийн сантай харицах функц.
//     db.query(q, [values], (err, data) => {
//       if (err) return res.status(500).json(err);
//       else return res.status(200).json("Хэрэглэгчийг амжилттай бүртгэлээ.");
//     });
//   });
// };

export const register = (req, res) => {
  // Check if username exists
  const usernameQuery = "SELECT * FROM users WHERE username = ?";
  db.query(usernameQuery, [req.body.username], (err, usernameData) => {
    if (err) return res.status(500).json(err);
    if (usernameData.length)
      return res.status(409).json("Username already exists");

    // Check if email exists
    const emailQuery = "SELECT * FROM users WHERE email = ?";
    db.query(emailQuery, [req.body.email], (err, emailData) => {
      if (err) return res.status(500).json(err);
      if (emailData.length)
        return res
          .status(409)
          .json({ error: "Хэрэглэгчийн нэр бүртгэлтэй байна" });

      // If neither username nor email exists, proceed with registration
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      const insertQuery =
        "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
      const values = [req.body.username, req.body.email, hashedPassword];
      db.query(insertQuery, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json("Хэрэглэгч амжилттай бүртгэгдлээ");
      });
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Хэрэглэгч олдсонгүй!");
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res
        .status(400)
        .json("Хэрэглэгчийн нууц үг эсвэл и-мэйл буруу байна!!!");
    const token = jwt.sign({ id: data[0].id }, "secretkey");
    const { password, ...others } = data[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("Хэрэглэгч амжилттай гарлаа");
};
