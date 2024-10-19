const express=require('express');
const router=express.Router();
const Person=require('../models/Person');


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const NewPerson = new Person(data);
        const response = await NewPerson.save();
        console.log("Response data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Internal Server Error" });
    }
})
router.get('/',async(req,res)=>{
    try{
      const data=await Person.find();
      res.status(200).json(data);
    }catch(err){
          console.log(err);
          res.status(500).json({Error:"Internal Server Error"});
    }
})
router.get('/:roleType',async(req,res)=>{
    try{
        const roleT=req.params.roleType;
        if(roleT=='user'||roleT=='admin'){
            
            const response=await Person.find({role:roleT});
            console.log("Person data found");
            res.status(200).json(response);
        }
    }catch(err){
        console.log(err);
        res.status(500).json({Error:"Internal Server Error"});
    }
})

module.exports=router;