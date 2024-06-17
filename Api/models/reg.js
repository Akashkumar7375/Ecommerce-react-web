const mongoose=require('mongoose')



let authShcema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        flat:String,
        street:String,
        pincode:Number,
        state:String,
        country:String

    },
    createPost:{
     type:Date,
     required:true,
     default:new Date()
    },
    status:{
       type:String,
       required:true,
       default:'Suspended'
    },
    role:{
        type:String,
        default:'user',
        required:true
    }
})


module.exports=mongoose.model('reg',authShcema)