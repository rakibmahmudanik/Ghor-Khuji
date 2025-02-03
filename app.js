const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const Flat = require("./models/flats.js");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/flatsDB");
}

app.get("/", async (req, res) => {
  const flats = await Flat.find();
  res.render("home.ejs", { flats });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
