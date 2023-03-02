const express = require("express");
const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    trim:true
  },
  details:{
    type:String,
    required:true,
    trim:true
  },
  tag:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"tag"
  },
  date:{
    type:String,
    required:true,
  },
  author:{
    type:String,
    required:true,
    trim:true
  },
})

const post = new mongoose.model("post",postSchema);
module.exports = post;