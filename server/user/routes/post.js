const express = require("express");
const postModal=require("../models/post-modal")
const router = express.Router();



router.post('/newpost',(req,res)=>{
    const date = new Date
    let finalDate = date + ""
    finalDate = finalDate.split(" ");
    finalDate = finalDate.splice(1, 3).join(" ");
  postModal.create({
    image:req.body.image,
    author:req.body.author,
    location:req.body.location,
    description:req.body.description,
    likes:Math.floor((Math.random() * 10000) + 1),
    date:finalDate
  }).then(()=>{ res.send("file and data uploaded successfully")}).catch((err)=>{
    console.log(err.message)
  })
 
})
router.get("/getpost",async(req,res)=>{
  try{
    const allData=await postModal.find();
  res.status(200).send(allData)
}catch(err){
  res.status(400).send(err)
}
})
module.exports=router;