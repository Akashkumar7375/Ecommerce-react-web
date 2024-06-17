const { json } = require('express');
const regTable=require('../models/reg')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const nodemailer=require('nodemailer')




exports.signup=async(req,res)=>{
    
    try{
        const{email,password,cpassword}=req.body;
        const id=req.params.id
     const user=await regTable.findOne({email:email})
     var bpassword =await bcrypt.hash(password,10)
    
     if(!email){
       throw new Error("email should not be blank")
     }else if(!password ){
        throw new Error('password should not be blank')
     }else if(user!==null){
        throw new Error('email is already exist')
     }
     else if(password!==cpassword){
       throw new Error('password not match')
     }else if(email!==null){
   const newdata=regTable({email:email,password:bpassword})
  newdata.save()
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "rohitkumawatt304@gmail.com",
      pass: "gtdlqqwmvnguzwus",
    },
  });
  console.log('connected to smtp server')
  await transporter.sendMail({
    from: "rohitkumawatt304@gmail.com", // sender address
    to:email, // list of receiversed to smtp server
    subject:'Email Validation link!', // Subject line
    html:`<a href=http://localhost:3000/emailverify/${newdata.id}>Click is verfiy link</a>`, // plain text body
   
  });
  
 
    res.status(201).json({
        status:201,
        message:'Account has been cerated.Email verifaction link has been sent to your Email Id'

    })
     }
     else{
        console.log('dhbgs');
     }
    }catch(error){
      res.status(400).json({
        status:400,
        message:error.message
      })
    }

}

exports.login=async(req,res)=>{
    try{
    const {email,password}=req.body;
    const logincheck=await regTable.findOne({email:email})
    const payload={username:email}
    let key=process.env.KEY
    if(logincheck!==null){
        var comperpass=await bcrypt.compare(password,logincheck.password)
      if(comperpass){
        if(logincheck.status==='Active'){
        const token=jwt.sign(payload,key)
        res.status(200).json({
            username:email,
            status:200,
            token:token,
            role:logincheck.role
        })
      }else{
          throw new Error('email not verifyed')
        }
      }else{
         throw new Error('passwod not found')
      }
    }else{
      throw new Error('email not found')
    }
    
}catch(error){
    res.status(400).json({
        message:error.message,
        status:400
    })
}
}

exports.emailverify=async(req,res)=>{
    try{
    const id=req.params.id
 await regTable.findByIdAndUpdate(id,{status:'Active'})  
 res.status(200).json({
    message:"status Active",
    status:200
 })
}catch(error){
    res.status(400).json({
        message:error.message,
        status:400
    })
}
}

exports.forgoutemail=async(req,res)=>{
  try{
   const{email}=req.body
   const emailchack= await regTable.findOne({email:email})
   let payload={email:email}
  //  console.log(emailchack);
  let token=jwt.sign(payload,process.env.KEY,{expiresIn:'50s'})
   if(emailchack!==null){
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "rohitkumawatt304@gmail.com",
        pass: "gtdlqqwmvnguzwus",
      },
    });
    console.log('connected to smtp server')
    await transporter.sendMail({
      from: "rohitkumawatt304@gmail.com", // sender address
      to:email, // list of receiversed to smtp server
      subject:'Email Validation link!', // Subject line
      html:`<a href=http://localhost:3000/changepass/${emailchack.id}/${token}>Click is change password link</a>`, 
     text:'<p>asnjajsnkj</p>'
     
    });
    res.status(200).json({
      message:'send the email change pass link',
      status:200
    })
   }else{
    throw new Error('email not registered with us')
   }
  }catch(error){
    res.status(400).json({
      message:error.message,
      status:400
    })
   }
}


exports.resetpass=async(req,res)=>{
  try{
  const{newpass,cpass}=req.body
  let id=req.params.id
  if(!newpass){
    throw new Error(" new password should not be blank")
  }
  else if(!cpass){
    throw new Error(" confirm password should not be blank")
  }
  else if(newpass!==cpass){
    throw new Error("password not match'")
  }else{
    
    let bnewpass=await bcrypt.hash(newpass,10)
    console.log(bnewpass);
    await regTable.findByIdAndUpdate(id,{password:bnewpass})

   res.status(200).json({
    status:200,
    message:"successfully password reset"
})
   
  }
  
}catch(error){
  res.status(400).json({
    status:400,
    message:error.message
})
}
}