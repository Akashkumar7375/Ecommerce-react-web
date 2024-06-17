const categoryTable = require('../models/categoryT')
const productTable = require('../models/product')
const usercartTable = require('../models/usercart')
const contactTable=require('../models/contactT')
const bannerTable=require('../models/banner')
const nodemailer=require('nodemailer')
exports.banner=async(req,res)=>{
    try{
       const bannerdata= await bannerTable.find()

        res.status(200).json({
         apiData:bannerdata,
            status:200
        })
    }catch(error){
        res.status(400).json({
            message:error.message,
            status:400
        })
    }
}


exports.bannerupdate=async(req,res)=>{
  
    
    try{
   
        let id = req.params.id
        let {text}=req.body
 
        let fileName= req.file.filename
    await bannerTable.findByIdAndUpdate(id,{text:text,image:fileName})
    res.status(200).json({
        message:"Successfully Updated",
        status:200
    })
    
}catch(error){
    res.status(400).json({
        message:error.message,
        status:400
    })
}

}
exports.addcategory=(req,res)=>{
    const{category}=req.body
    console.log(req.body);
  
    try{
        if(!category){
            throw new Error('category should not be blank')
        }else if(!req.file){
            throw new Error('image should not be blank')
        }
        let filename= req.file.filename
    const newcat=new categoryTable({category:category,image:filename})
    newcat.save()
    res.status(201).json({
        message:'Successfully insert Category',
        status:201
    })
    }catch(error){
res.status(400).json({
    message:error.message,
    status:400
})
    }
}

exports.allcategory=async(req,res)=>{
    try{
        const allcategory= await categoryTable.find()
        
        if(!allcategory){
            throw new Error('Internal server error')
        }

   res.status(200).json({
    apiData:allcategory,
    status:200
   })
}catch(error){
    res.status(500).json({
        message:error.message,
        status:500
    })
}
}
exports.categorydelete=async(req,res)=>{
    try{
 const id=req.params.id
 await categoryTable.findByIdAndDelete(id)
 res.status(200).json({
    status:200,
    message:"Category Delete successfully"
   })
    }catch(error){
        res.status(400).json({
            status:400,
            message:error.message
        })
    }
}

exports.addproduct=(req,res)=>{
   
    try{
    const{name,desc,price,category,qty}=req.body
    // console.log(req.files);
    const fileName1=req.files.img1[0].filename
    const fileName2=req.files.img2[0].filename
    const fileName3=req.files.img3[0].filename
   
if(!name){
    throw new Error('name should not be blank')
}else if(!desc){
    throw new Error('description should not be blank')
}else if(!price){
    throw new Error('price should not be blank')
}
else if(!qty){
    throw new Error('Quantity should not be blank')
}
else if(fileName1===undefined||fileName2===undefined||fileName3===undefined){
    throw new Error('image should not be blank')
}
else if(!category){
    throw new Error('category should not be blank')
}
   const newproduct= new productTable(
    {name:name,desc:desc,price:price,category:category,qty:qty,image1:fileName1 ,image2:fileName2,image3:fileName3
    })
   newproduct.save()
   res.status(201).json({
    status:201,
    message:"add new product successfully"
   })
    }catch(error){
        res.status(400).json({
            status:400,
            message:error.message
        })
       
    }
}

exports.allproduct=async(req,res)=>{
    try{
   const allProducts= await productTable.find()
   res.status(200).json({
    apiData:allProducts,
    status:200
   })
    }catch(error){
        res.status(400).json({
            message:error.message,
            status:400
        })
    }

}

exports.delete=async(req,res)=>{
    try{

    let id=req.params.id
    // console.log(id);
   
    
        await productTable.findByIdAndDelete(id)
        res.status(200).json({
            message:"Successfully deleted ",
            status:200
        })
    
   
    }catch(error){
        res.status(400).json({
            message:error.message,
            status:400
        })
    }
 }
 

 exports.singledata=async(req,res)=>{
    try{
        const id=req.params.id
        // console.log(id);
    const singledata= await productTable.findById(id)
    res.status(200).json({
         apiData:singledata,
         status:200,
         message:"show"
    })
    }catch(error){
       res.json({
        message:error.message,
        status:400
       })
    }
 }

 exports.update=async(req,res)=>{
    try{    
    var {name,desc,price,status,category ,qty}=req.body
    var id =req.params.id
    
     let images= {data:Object.keys(req.files)}

    // console.log(id);console.log(req.file);
    if(!name){
        throw new Error('*name should not be blank*')
    }else if(!desc){
        throw new Error('description should not be blank')
    }else if(!price){
        throw new Error('price should not be blank')
    }
    else if(!qty){
        throw new Error('Quantity should not be blank')
    }
    else{
        if(images.data.length!==0){
            if(req.files){
            if(req.files.img1!=undefined){
                var file1=req.files.img1[0].filename
               
                await productTable.findByIdAndUpdate(id,{name:name,desc:desc,price:price,status:status,qty:qty,category:category,image1:file1})
            }
            if(req.files.img2!=undefined){
                var file2=req.files.img2[0].filename
                
                await productTable.findByIdAndUpdate(id,{name:name,desc:desc,price:price,status:status,qty:qty,category:category,image2:file2})
            }if(req.files.img3!=undefined){
                var file3=req.files.img3[0].filename
            
                await productTable.findByIdAndUpdate(id,{name:name,desc:desc,price:price,status:status,qty:qty,category:category,image3:file3})
            }
            }else{
                console.log("Not files ");
            }
        }else{
       
        
        
        await productTable.findByIdAndUpdate(id,{name:name,desc:desc,price:price,status:status,qty:qty,category:category})
        }
    }
    res.status(200).json({
        status:200,
        message:"product successfully updated"
    })
    
}catch(error){
    res.status(400).json({
        status:400,
        message:error.message
    })
}
   
 }

 exports.allquery=async(req,res)=>{
    try{
 const querydata= await contactTable.find()
 res.status(200).json({
    apiData:querydata,
    status:200
})
    }catch(error){
        res.status(400).json({
            message:error.message,
            status:400
        })
    }
}

exports.singledataquery=async(req,res)=>{
    try{
   let id=req.params.id;

   const singlequery=await contactTable.findById(id)
   res.status(200).json({
   apiData:singlequery,
    status:200
})
    }catch(error){
        res.status(400).json({
            message:error.message,
            status:400
        })
    }
}
exports.sendreply=async(req,res)=>{

    try{
    const{to,from,subject,body}=req.body
    

     let id=req.params.id
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "rohitkumawatt304@gmail.com",
          pass: "gtdlqqwmvnguzwus",
        },
      });
      console.log('connected to smtp server')
      const info = await transporter.sendMail({
        from:from, // sender address
        to:to , // list of receivers
        subject: subject, // Subject line
        text:body, // plain text body
        // html body
      });

      await contactTable.findByIdAndUpdate(id,{status:'Replied'})
      res.status(200).json({
        message:"Successfully email has been send",
        status:200
    })
}catch(error){
    res.status(400).json({
        message:error.message,
        status:400
    })
}
}

exports.search=async(req,res)=>{
    let search=req.params.search
    // console.log(search);
   let searchdata= await productTable.find({name:search})
   console.log(searchdata);
}