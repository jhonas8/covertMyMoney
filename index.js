const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const conversionLib = require("./lib/conversion");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", { name: "jhonas8" });
});

app.get("/convert", (req, res) => {
  const { cotation, amount } = req.query;

  const conversion = conversionLib.convert(cotation, amount);

  res.render("cotacao", {
    amount: conversionLib.formatToMoney(amount, true),
    cotation: cotation,
    conversion: conversionLib.formatToMoney(conversion),
  });
});

app.listen(port, (err) => {
  const msg = err
    ? `The error ${err.message} occurred`
    : `Server is running on port ${port}`;

  console.log(msg);
});
