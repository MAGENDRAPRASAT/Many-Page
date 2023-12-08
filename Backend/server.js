const express=require('express')
const app=express();
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const cors=require('cors')
app.use(cors())
const bodyParser=require("body-parser")
app.use(bodyParser.json())

app.use(express.urlencoded({extended:true}));

app.get("/home",(req,res)=>{
    res.send("Hai")
})
dotenv.config()
app.use("/one",require("./routes"))

app.listen(3000,()=>{
    console.log("server connected")
})

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Db connected")
}).catch((err)=>{
    console.log(err)
})