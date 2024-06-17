require('dotenv').config()
const jwt=require('jsonwebtoken')
function tokenvalidation(req,res,next){
    try{
  let authorization=req.headers['authorization']
  if(authorization){
 
    if(authorization.split('Bearer ')){
    token= authorization.split('Bearer ')[1]
     jwt.verify(token,process.env.KEY,(error,response)=>{
        if(!error){
            next()
        }else{
            throw new Error('token not verified')
        }
     })
    }else{
        throw new Error('Invalid token')
    }
  }else{
    throw new Error(" you are not authorized this data ")
  }
 

}catch(error){
 res.status(400).json({
    message:error.message,
   status:400
})
}

}

module.exports=tokenvalidation