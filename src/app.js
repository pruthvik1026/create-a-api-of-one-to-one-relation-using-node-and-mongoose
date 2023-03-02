const express = require("express");
require("../src/db/conn.js")

const post = require("./models/post")
const tag = require("./models/tag")

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/createtag", async (req,res) => {
  try{
    const addingtag = new tag({
      id:"4",
      tag:"photo"
    })
    addingtag.save()
    res.send('user create success')
  }catch(e){
    console.log(e)
  }
})

app.get("/gettag", async (req,res) => {
  try {
    const getTag = await tag.find();
    res.send(getTag)
  } catch (e) {
    res.send(e)
  }
})

app.get("/getpostbytag/:tag", async (req,res) => {
  console.log("asd");
  try{
    const tag = req.params.tag;
    
    const getposts = await post.find({tag});
    res.send(getposts);
  }catch(e){
    console.log(e)
  }
})

app.patch("/updatetag/:id", async (req,res) => {
  console.log("asd");
  try{
    const _id = req.params.id;
    const updateTag = await tag.findByIdAndUpdate(_id,req.body,{
      new:true
    });
    res.send(updateTag);
    res.status(400).send(updatePost);
  }catch(e){
    console.log(e)
  }
})

app.post("/createpost", async (req,res) => {
  try{
    const addingpost = new post({
      title:"world",
      details:"so many place is there in world to visit",
      tag:3,
      date:"2000-10-23",
      author:"ram"
    })
    addingpost.save()
    res.send('user create success')
  }catch(e){
    console.log(e)
  }
})

app.get("/getallpost", async (req,res) => {
  console.log("asd");
  try{
    const getposts = await post.find();
    res.send(getposts);
  }catch(e){
    console.log(e)
  }
})

app.patch("/updatePost/:id", async (req,res) => {
  console.log("asd");
  try{
    const _id = req.params.id;
    const updatePost = await post.findByIdAndUpdate(_id,req.body,{
      new:true
    });
    res.send(updatePost);
    res.status(400).send(updatePost);
  }catch(e){
    console.log(e)
  }
})

app.delete("/deletePost/:id", async (req,res) => {
  console.log("asd");
  try{
    const _id = req.params.id;
    const deletePost = await post.findByIdAndDelete({_id});
    res.send(deletePost);
  }catch(e){
    console.log(e)
  }
})

app.listen(port, () => {
  console.log(`connection is live on port ${port}`);
})