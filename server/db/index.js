const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected to MongoDB");
});
console.log(db,"db")
module.exports = mongoose