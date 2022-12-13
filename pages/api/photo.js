import Photo from '../../models/Photo'
import nc from "next-connect";


import initDB from '../../utils/initDB'
import multer from "multer"


initDB()

export const config={

  api:{
    bodyParser:false,
  },
};

const upload =multer({
  storage:multer.diskStorage({
    destination: function(req,file,cb){
      cb(null ,'./public');
    },
    filename:function(req,file,cb){
cb(null ,new Date().getTime() +"-"+file.originalname)
    }
  })
})
const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(upload.single('image'))
  
  .post(async(req, res) => {

    try{

      const url =   req.file.filename;
    const photo =new Photo({
      ...req.body,
      image:url,
    });

const savePhoto= await photo.save();
if(savePhoto){

  res.status(201).json({body:req.body,file:req.file})
}else{
  errorHandler(savePhoto,res);
}
    }catch(error){
      console.log(error)
    }
  })  


.get( async(req, res) => {

   try{
    const photos =  await Photo.find({})
    
    res.status(201).json(photos)
  }catch(err){
    console.log(err)
  }
  
})



  export default handler;  

  







