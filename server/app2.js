const mysql = require("mysql");

const express = require("express");
const bodyparser = require("body-parser");
var app = express();

app.listen(3001, () => console.log(" listen to:3001"));
app.use(bodyparser.urlencoded({ extended: true }));
var mysqlConnection = mysql.createConnection({
  //   socketPath: "/Application/MAMP/tmp/mysql/mysql.sock",
  user: "myDBuser",
  password: "myDBuser",
  host: "127.0.0.1",
  database: "mydb",
});
mysqlConnection.connect((err) => {
  if (err) console.log(err);
  else console.log("connected");
});
//Install: Create the tables necessary
app.get("/install", (req, res) => {
  let message = "Tables Created";
  let createProducts = `CREATE TABLE if not exists Products(
      product_id int auto_increment,
      product_url varchar(255) not null,
      product_name varchar(255) not null,
      PRIMARY KEY (product_id)
  )`;
  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_id int(11) not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int(11) not null,    
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  mysqlConnection.query(createProducts, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductDescription, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductPrice, (err, results, fields) => {
    if (err) console.log(err);
  });

  res.end(message);
});
app.post("/addiphones", (req, res) => {
  console.table(req.body);
  let Id = req.body.iphoneId;
  let img = req.body.imgPath;
  let Url = req.body.iphoneLink;
  let Title = req.body.iphoneTitle;
  let Brief = req.body.briefDescription;
  let StartPrice = req.body.StartPrice;
  let StartRange = req.body.priceRange;
  let Description = req.body.fullDescription;
  let sqlAddToProducts =
    "INSERT INTO products(product_url,product_name) VALUES('" +
    Id +
    "','" +
    Title +
    "')";
  mysqlConnection.query(sqlAddToProducts, function (err, result) {
    if (err) throw err;
    console.log("i record insert");
  });
  res.end("eyesera new");
});
//Get all iphones
app.get("/iphones", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphones = { products: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});
