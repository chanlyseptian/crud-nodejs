const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_bisnis",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("DB connection succeded.");
  else
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

app.listen(3000, () =>
  console.log("Express server is runnig at port no : 3000")
);

// CRUD User

// get all users
app.get("/user", (req, res) => {
  mysqlConnection.query("SELECT * FROM data_user", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

// get an user by id
app.get("/user/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT user_id FROM data_user WHERE user_id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//Delete an user
app.delete("/user/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM data_user WHERE user_id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Deleted successfully.");
      else console.log(err);
    }
  );
});

//Insert an user
app.post("/user", (req, res) => {
  let user = req.body;
  console.log(user);
  mysqlConnection.query(
    "INSERT INTO data_user SET ?",
    user,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// CRUD product

// get all products
app.get("/product", (req, res) => {
  mysqlConnection.query("SELECT * FROM data_product", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

// get an product by id
app.get("/product/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT product_id FROM data_product WHERE product_id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//Delete an product
app.delete("/product/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM data_product WHERE product_id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Deleted successfully.");
      else console.log(err);
    }
  );
});

//Insert an product
app.post("/product", (req, res) => {
  let product = req.body;
  console.log(product);
  mysqlConnection.query(
    "INSERT INTO data_product SET ?",
    product,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// CRUD transaction

// get all transactions
app.get("/transaction", (req, res) => {
  mysqlConnection.query("SELECT * FROM data_transaction", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

// get an transaction by id
app.get("/transaction/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT trans_id FROM data_transaction WHERE trans_id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//Delete an transaction
app.delete("/transaction/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM data_transaction WHERE trans_id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Deleted successfully.");
      else console.log(err);
    }
  );
});

//Insert an transaction
app.post("/transaction", (req, res) => {
  let transaction = req.body;
  console.log(transaction);
  mysqlConnection.query(
    "INSERT INTO data_transaction SET ?",
    transaction,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// Order transaction
app.post("/transaction/order", (req, res) => {
  let transaction = req.body;

  console.log(transaction);
  mysqlConnection.query(
    "INSERT INTO data_transaction SET ?",
    transaction,
    (err, rows, fields) => {
      if (!err) res.json(rows.qty_order);
      else console.log(err);
    }
  );
});