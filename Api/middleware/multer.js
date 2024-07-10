const multer=require('multer')


let storage=multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,'../shopclone/public/uploads')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})


let uploads=multer({
    storage:storage,
    limits:{fieldSize:1024*1024*4}
})

module.exports=uploads
