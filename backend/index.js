const express = require("express");
const app = express();
const port = 4000;
const connectDB = require("./db/connect");
require("dotenv/config");

//Routes
const User = require("./routes/User");

app.use(express.json());
app.use("/api/v1/user", User);

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
