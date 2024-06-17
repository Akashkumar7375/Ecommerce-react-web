const categoryTable = require('../models/categoryT')
const productTable = require('../models/product')
const usercartTable = require('../models/usercart')
const contactTable=require('../models/contactT')
const bannerTable=require('../models/banner')


exports.showproduct = async (req, res) => {
    try {

        const product = await productTable.find({ status: 'In-Stock' })
        res.status(200).json({
            apiData: product,
            status: 200
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 400
        })
    }
}
exports.cartproduct = async (req, res) => {
    try {
        const { ids } = req.body
        // console.log(req.body);
        const productcart = await productTable.find({ _id: { $in: ids } })

        res.status(200).json({
            apiData: productcart,
            status: 200
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: 500
        })
    }

}

exports.cheakout = async (req, res) => {
    try {
        const { cart, username, currentqty } = req.body;
        // console.log(cart);
        let cartid = (Object.keys(cart.items))
        
        const cheakdata = await productTable.find({ _id: { $in: cartid } })
        // console.log(cheakdata);
        cheakdata.forEach((value) => {
           let qty=cart.items[value._id]
            var nusercart = new usercartTable({ name: value.name, img: value.image1, price: value.price*qty,qty:qty, username: username })
            nusercart.save()
        })
        res.status(201).json({
            message: "Successfully Checkout",
            status: 201
        })


    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 400
        })
    }
}

exports.myorder = async (req, res) => {
    try {
        let username = req.params.username
        // console.log(username);

        const orderdata = await usercartTable.find({ username: username })
        res.status(200).json({
            apiData: orderdata,
            status: 200
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: 500
        })
    }
}

exports.more = async (req, res) => {
    try {
        let id = req.params.id
        const moredata = await productTable.findById({ _id: id })

        res.status(200).json({
            status: 200,
            apiData: moredata

        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message

        })
    }
}

exports.orderdelete=async(req,res)=>{
       try{
    const id= req.params.id
    await usercartTable.findByIdAndDelete(id)
    res.status(200).json({
       message:"Successfully Cancel My Order",
        status:200
    })
 }catch(error){
    res.status(400).json({
        message:error.message,
        status:400
    })
 }
}

exports.contactinsert=(req,res)=>{
    try{
    const{fullname,email,subject,qury}=req.body;

 const newdata=  new contactTable({fullname:fullname,email:email,subject:subject,message:qury})
 newdata.save()

   res.status(201).json({
    message:"Successfull Send",
    status:201
  })
    }catch(error){
        res.status(400).json({
          message:error.message,
          status:400
        })
    }
}

