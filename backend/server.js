const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

//routes
const productsRoutes = require("./routes/products");


//express app
const app = express();

//rmiddleware
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ mssg: "welcome to the app" });
  next();
});

//route
app.use('/api/products',productsRoutes);

//connect to db

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connect to db and lisning port :", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Error");
  });
