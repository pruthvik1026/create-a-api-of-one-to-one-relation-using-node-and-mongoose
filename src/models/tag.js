const express = require("express");
const mongoose = require("mongoose");


const tagSchema = new mongoose.Schema({
  id:{
    type:Number,
    require:true,
    unique:true
  },
  tag:{
    type:String,
    required:true,
    trim:true
  }
})

const tag = new mongoose.model("tag",tagSchema);
module.exports = tag;