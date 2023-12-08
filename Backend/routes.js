const express=require("express")
const route=express.Router();
const mongoose=require("mongoose")
const User=require("./models/user")

route.get("/two",(req,res)=>{
    console.log("reciiii");
    res.send("hello");
})


route.post("/two",async(req,res)=>{
    try{
    console.log(req.body);
//res.send("ok")
    const{UserName,email,password,address,phone}=req.body;
    const newuser=new User({
        UserName,
        password,
        email,
        address,
        phone

    });
    await newuser.save()
    res.status(201).send("new user created")
}
catch(err){
    console.log(err)
}
})


module.exports=route