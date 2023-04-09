const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const productsRoutes = require("./routes/productsRoutes");

app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("Hey backend connected");
});

const start = async () => {
  try {
    connectDB();
    app.listen(0.0.0.0:$PORT, () => {
      console.log("listening");
    });
  } catch (error) {
    console.error(error);
  }
};

start();
