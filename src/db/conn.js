const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blog"
).then(() => {
  console.log("successfull");
}).catch((e) => {
  console.log("failed",e);
})