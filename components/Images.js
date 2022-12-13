import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {useRouter} from 'next/router'
import  baseUrl from "../helpers/baseUrl";




const image = () => {

  const router =useRouter();

  const [show,setShow]=useState(false);
 
  const[image,setImage]=useState(null);
  
const [imageInput,setImageInput]=useState(null);




    
const handleImage=(e)=>{

  try{
 const file =e.target.files[0];

  setImageInput(file);
  const filReader=new FileReader();
  filReader.onload =function(e){
    setImage(e.target.result);
    setShow(true);
    
  }
  filReader.readAsDataURL(file);

  }catch(err){
    console.log(err)
  }
 


  
}
const handleFormData=async(e)=>{
  e.preventDefault();


 

  const form =new FormData();
  form.append('image',imageInput);

 const  result =await creatImage(form);
 console.log({result})
 if(result){
     setImageInput(null) ;
 toast.success('Image Uploaded Succesfuly');
 e.target.reset();

   setImage(null);
   setShow(false);

 }else(
  console.log(error)
 )

}


 const cancel = async(e)=>{

  

 
setImage('')


setShow(false);
  }



    

  return (
    <div
 
  
  
  className='relative'
    
    
    
    >
<form  onSubmit={handleFormData} >

  
  <label className='font-semibold text-xl  text-gray-400 lg:text-3xl  underline underline-offset-4 '> Add image to galeries:  </label>
    <input 
        type='file'
        accept='image/*'
        onChange={handleImage}

        
        className="  text-sm  mt-3 lg:mt-20 w-80  border rounded-lg cursor-pointer bg-gray-700 text-gray-400  border-gray-600 focus:outline-none placeholder-gray-400" aria-describedby="file_input_help"
        required
        />

          
        <p class="mt-1 mb-1 text-sm text-gray-500 dark:text-gray-300" >SVG, PNG, JPG or GIF </p>

   
    <img   style={{height:'150px'}}  src={image ? image :''}
    
    className=" "
    
    
    /> 
            <button type='submit'     className={`bg-cyan-800 mt-4 py-2   px-5  lg:px-5 text-lg font-thin  ${show ? 'visible' : 'hidden'}  text-white font-semibold ml-2    px-3 rounded-full  hover:animate-bounce `} >Send</button>
 
        


    
    
   
   
    </form>
        <button type='submit' onClick={cancel}      className={`bg-red-800 mt-4 py-2   absolute bottom-0 left-28     text-lg font-thin  ${show ? 'visible' : 'hidden'}  text-white font-semibold ml-2    px-3 rounded-full  hover:animate-bounce `} >Cancel</button>


    </div>
    
  )   
}

export default image;


export const creatImage=async(form)=>{

  try{
    const res =await axios.post(`${baseUrl}/api/photo`,form);
    return res.data;
    
  }catch(err){
    console.log(err)
  }
}  


