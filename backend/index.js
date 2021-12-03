const express = require("express");
const app = express();
const port = 4000;
const connectDB = require("./db/connect");
const cors = require("cors");
require("dotenv/config");

//Routes
const User = require("./routes/User");
const Product = require("./routes/Product");
const Cart = require("./routes/Cart");
const Order = require("./routes/Order");

//Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", User);
app.use("/api/v1/product", Product);
app.use("/api/v1/cart", Cart);
app.use("/api/v1/order", Order);

app.get("/", (req, res) => {
  res.send("Hello World !");
});

const start = async () => {
  try {
    await connectDB(process.env.CONNECT_DB);
    app.listen(port, () => {
      console.log(`Server up and running at http://localhost:${port}/`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
