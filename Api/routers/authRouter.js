const router=require('express').Router()
const authController=require('../controller/AuthController')



router.post('/createAccount/',authController.signup)
router.post('/login',authController.login)
router.put ('/emailverify/:id',authController.emailverify)
router.post('/forgoutemail',authController.forgoutemail)
router.post('/resetpassword/:id',authController.resetpass)
// router.get ('/tokenverify',authController.tokenverfiy)







module.exports=router