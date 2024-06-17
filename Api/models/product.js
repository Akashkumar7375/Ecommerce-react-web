const mongoose=require('mongoose')



let productShcema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
        
    },
    category:{
        type:String
    },
    createPost:{
     type:Date,
     required:true,
     default:new Date()
    },
    status:{
       type:String,
       required:true,
       default:'In-Stock'
    },
    image1:{
        type:String
    },
    image2:{
        type:String
    },
    image3:{
        type:String
    },
    qty:{
        type:Number
    }
})


module.exports=mongoose.model('product',productShcema)