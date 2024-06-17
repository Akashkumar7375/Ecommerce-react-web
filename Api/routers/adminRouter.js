const router=require('express').Router()
const adminC=require('../controller/adminController')
const uploads=require('../middleware/multer')
const idvalidation = require('../middleware/idvalidation')


router.post('/addcategory',uploads.single('img'),adminC.addcategory)
router.get('/allcategory',adminC.allcategory)
router.delete('/categorydelete/:id',adminC.categorydelete)
router.post('/addproduct',uploads.fields([
    {name:'img1',maxCount:1},
    {name:'img2',maxCount:1},
    {name:'img3',maxCount:1}])
    ,adminC.addproduct)
router.get('/allproduct',adminC.allproduct)
router.delete('/productdelete/:id',idvalidation,adminC.delete)
router.get('/singledata/:id',idvalidation,adminC.singledata)
router.put('/productupdate/:id',uploads.fields([
    {name:'img1',maxCount:1},
    {name:'img2',maxCount:1},
    {name:'img3',maxCount:1},
]),idvalidation,adminC.update)
router.get('/allquery',adminC.allquery)
router.get('/singlequerydata/:id',adminC.singledataquery)
router.post('/sendreply/:id',adminC.sendreply)
router.get('/banner',adminC.banner)
router.put('/bannerupdate/:id',uploads.single('img'),adminC.bannerupdate)





module.exports=router