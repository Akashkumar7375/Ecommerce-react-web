const mongoose=require('mongoose')



let categorySchema=mongoose.Schema({
 
    category:{
       type:String,
       required:true
    },
    image:{
        type:String
    },
    createPost:{
     type:Date,
     required:true,
     default:new Date()
    },
    
})


module.exports=mongoose.model('category',categorySchema)