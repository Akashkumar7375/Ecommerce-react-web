const express=require('express')
const app=express()
app.use(express.json())
require('dotenv').config()
const authRouter=require('./routers/authRouter')
const adminRouter=require('./routers/adminRouter')
const userRouter=require('./routers/userRouter')
const mongoose=require('./helpers/DB')
const morgan = require('morgan')





app.use(morgan('dev'))
app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/auth',authRouter)
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})