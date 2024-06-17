const mongoose=require('mongoose')



let contactShcema=mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
        
    },
    message:{
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
        default:'Reply'
     }
 
})


module.exports=mongoose.model('contact',contactShcema)