const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3002;

// create product schema
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

// create product model
const Product = mongoose.Model("products", productSchema);

// mongoose connection setting
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testProductDB");
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
    console.log(error.message);
    process.exit(1);
  }
};

//   .then(() => console.log("db is connected"));
//   .catch((error) => {
//     console.log("db is not connected");
//     console.log(error);
//     process.exit(1);
//   });

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectDB();
});

// get request
app.get("/", (req, res) => {
  res.send("welcome to the home page");
});

// post request
app.post("/products", (req, res) => {
  try {
    res.send("welcome to the home page");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// DATABASE -> collection -> document
