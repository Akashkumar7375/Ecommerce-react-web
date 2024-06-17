const mongoose=require('mongoose')



let bannerSchema=mongoose.Schema({

    text:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    createPost:{
     type:Date,
     required:true,
     default:new Date()
    },
    
})


module.exports=mongoose.model('banner',bannerSchema)