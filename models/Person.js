const mongoose=require('mongoose');

const personSchema=new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
          type:String
    },
    role:{
         type:String,
         enum:["admin","user"],
         default:"user"
    }
}   
);

const Person=mongoose.model('Person',personSchema);
module.exports=Person;