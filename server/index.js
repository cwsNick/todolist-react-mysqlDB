const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config()

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const API_KEY_TASK = "/api/task/"

app.get(API_KEY_TASK, (req, res) => {
  const sqlGet = "SELECT * FROM todolist";
  
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post(API_KEY_TASK, (req, res) => {
  const { task, detail, note } = req.body;

  const sqlInsert =
    "INSERT INTO todolist (task, detail, note) VALUES ( ?, ?, ?)";
  db.query(sqlInsert, [task, detail, note], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.delete(API_KEY_TASK + ":id", (req, res) => {
  const { id } = req.params;

  const sqlRemove = "DELETE FROM todolist WHERE id = ? ";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.get(API_KEY_TASK + ":id", (req, res) => {
  const { id } = req.params;

  const sqlGet = "SELECT * FROM todolist WHERE id = ? ";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put(API_KEY_TASK+ ":id", (req, res) => {
  const { id } = req.params;
  const { task, detail, note } = req.body;

  const sqlUpdate = "UPDATE todolist SET task = ?, detail = ?, note = ? WHERE id = ? ";
  db.query(sqlUpdate, [task, detail, note, id], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});


app.get("/", (req, res) => {
  res.send("REST Server");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
