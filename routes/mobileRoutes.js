const express = require('express');
const router = express.Router();
const Mobile = require('../models/Mobile');
router.post('/',async(req,res)=>{
    try{
       const data=req.body;
       const newMobile=new Mobile(data);
       const response=await newMobile.save();
       console.log("Response data saved");
       res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({Error:"Internal Server Error"});
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await Mobile.find();
        res.status(200).json(data);
    }catch(err){
         console.log(err);
         res.status(500).json({Error:"Internal Server Error"});
    }
})

module.exports=router;