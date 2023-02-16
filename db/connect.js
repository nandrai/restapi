const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const uri =
  "mongodb+srv://nandjeerai:Lastone4@cluster0.zled7ky.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );
};

module.exports = connectDB;
