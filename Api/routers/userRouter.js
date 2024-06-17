const router=require('express').Router()
const adminC=require('../controller/adminController')
const uploads=require('../middleware/multer')
const idvalidation = require('../middleware/idvalidation')
const userController=require('../controller/userController')
const tokenvalidation=require('../middleware/tokenvalidation')
const contactformvalidation= require('../middleware/Contactvalidation')







router.get('/showproduct',tokenvalidation,userController.showproduct)
router.post('/cartproduct',tokenvalidation,userController.cartproduct)
router.post('/cheakout',tokenvalidation,userController.cheakout)
router.get('/myorder/:username',tokenvalidation,userController.myorder)
router.get('/more/:id',tokenvalidation,userController.more)
router.delete('/orderdelete/:id',tokenvalidation,userController.orderdelete)
router.post('/contact',tokenvalidation,contactformvalidation,userController.contactinsert)




module.exports=router