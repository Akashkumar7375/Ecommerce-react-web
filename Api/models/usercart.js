const mongoose=require('mongoose')



let usercartSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true
    },
    price:{
        type:String,
        
    },
    qty:{
        type:String,
        
    },
    pdate:{
        type:Date,
        default:new Date(),
        required:true
    }

})

module.exports=mongoose.model('usercart',usercartSchema)