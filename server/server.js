require('dotenv').config()
const express= require ('express');
const app=express();

const cors=require("cors")
const port=process.env.PORT
require("../server/db/connection")
const postController=require("./user/routes/post")

//server
app.listen(port,(err)=>{
    if(!err){console.log(`Server is running at ${port}`)}
    else{
        console.log(err)
    }
});
//body parser middleware
app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({extended:false}));

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Instaclone Backend");
});

app.use("/post",postController);
