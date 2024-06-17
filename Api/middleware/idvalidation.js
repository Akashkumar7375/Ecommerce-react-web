const mongoose= require('mongoose')
 const productTable=require('../models/product')

 async function idvalidation(req,res,next){
   try{
    let id =req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
    throw new Error('Invalid Id')
    }
       let idcheak= await productTable.find({_id:id})
        if(idcheak.length===0){
            throw new Error('Invalid Id')
        }
       next()
    

}catch(error){
    res.status(400).json({
        message:error.message,
        status:400
    })
}
}

module.exports=idvalidation