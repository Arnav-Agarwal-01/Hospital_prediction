import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import User from './mongodb.js';
import { request } from 'express';


const PORT=5555;
const app=express();

app.use(cors());
app.use(express.json());

app.post('/',async (req,res)=>{
    const {name,password}=req.body;
    const valid= await User.find({name:name,password:password});
    if(valid.length>0){
        res.status(200).json({"message":true});
    }
    else{
        res.status(400).json({message:"No such user"});
    }
})


mongoose.connect('mongodb://localhost:27017/hospital_login')
.then(()=>{
    console.log("Connected to mongodb");
    app.listen(PORT,()=>{
        console.log("Server running");
    })
})
.catch((error)=>{
    console.log("Couldnt connect");
})