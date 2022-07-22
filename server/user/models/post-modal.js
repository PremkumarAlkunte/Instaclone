const mongoose = require("mongoose");

const postSchema=new mongoose.Schema({
    author:String,
    location:String,
    likes:Number,
    description:String,
    image:String,
    date:String,
    
});
//create collection named posts
const PostModal =mongoose.model("post",postSchema);
module.exports=PostModal;