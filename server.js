const mongoose=require('mongoose');
const express=require('express');
const app=express();
app.use(express.json());
const router=require('./route/postroute');
const str="mongodb+srv://bhanuking631:Bhanuking10@cluster0.stzszpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(str).then(()=>{
    console.log("connected to mongo db")
})
.catch((err)=>{
    console.log("this is error ")
})
app.get('/',(req,res)=>{
    res.send('i am server');
})
app.use('/api',router);
app.listen(8000,()=>{
    console.log("server is running at 8000");
})