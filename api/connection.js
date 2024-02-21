import mysql from "mysql";
// sql өгөгдлийн сантай холбож байна.
export const db = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "",
  database: "social",
});
// Өгөгдлийн сан холбогдсон эсэхийг шалгаж байгаа хэсэг.
try {
  db.connect();
  console.log("Амжилттай өгөгдлийн сантай холбогдлоо.");
} catch (err) {
  console.error("Өгөгдлийн сантай холбогдоход алдаа гарлаа :", err);
}
