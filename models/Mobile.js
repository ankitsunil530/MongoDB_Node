const mongoose=require('mongoose');

const MobileSchema=new mongoose.Schema({
    
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        color:{
            type:String,
            required:true
        },
        brand:{
            type:String,
            required:true
        },
        ram:{
            type:String,
            required:true
        },
        storage:{
            type:String,
            required:true
        },
        display:{
            type:String,
            required:true
        },
        camera:{
            type:String,
            required:true
        },
        battery:{
            type:String,
            required:true
        },
        processor:{
            type:String,
            required:true
        }
    

});

const Mobile=mongoose.model('Mobile',MobileSchema);
module.exports=Mobile;
