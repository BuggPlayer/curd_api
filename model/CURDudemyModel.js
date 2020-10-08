const mongoose = require("mongoose");
const { photoupload } = require("../controler/Curdudemy");

const CurdudemySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "enter the title"],
    trim: true,
  },

  student: {
    type: String,
    required: [true, "enter your name "],
    trim: true,
  },
  duration: {
    type: String,
    required: [true, "enter the duration"],
    trim: true,
  },

  rating: {
    type: String,
    required: [true, "give your rating"],
    trim: true,
  },

  platform: {
    type: String,
    required: [true, "enter the title"],
    trim: true,
  },
  price: {
    type: String,
    required: [true, "enter the title"],
    trim: true,
  },
  add: {
    type: String,
    required: [true, "enter the title"],
    trim: true,
  },
  category:{
    type:String,
    required:[true , "enter category"],
    trim:true
  },

 });

module.exports = mongoose.model("Curd_data", CurdudemySchema);
