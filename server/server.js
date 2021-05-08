const express = require("express"),
  api = require("./routes/api"),
  mongoose = require("mongoose"),
  app = express(),
  bodyParser = require("body-parser"),
  port = 8080;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/CatFactsDB",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", api);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
