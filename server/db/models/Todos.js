const mongoose = require("mongoose")
const TodosSchema = new mongoose.Schema({

  Title: { type: String, required: true },
  Description: { type: String, required: true},
  Date: {type:String, required:true }
  })
const Todos = mongoose.model("Todos", TodosSchema);
module.exports = Todos;