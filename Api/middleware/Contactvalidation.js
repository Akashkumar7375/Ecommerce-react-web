


function contactvalidatin(req,res,next){
  try{

    const{fullname,email,subject,qury}=req.body

    if(!fullname){
          throw new Error('fullname should not be blank')
    }else if(!email){
        throw new Error('email should not be blank')
    }
    else if(!subject){
        throw new Error('subject should not be blank')
    }else if(!qury){
        throw new Error('subject should not be blank')
    }
        next()
    
}catch(error){
    res.status(400).json({
        message:error.message,
        status:400
    })
}
}


module.exports=contactvalidatin