import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react';

/*import Data from '../components/Data';*/


import Image from 'next/image'
import Images from '../components/Images'
import Video from '../components/Video';


import {motion} from 'framer-motion';

export default function Home({data}) {




  return (
<div className='font-mono  lg:grid grid-cols-2 gap-4  align-middle  overflow-x-hidden '>
     
     <motion.div className='lg:mt-20 mt-6'
     
     
     initial={{
 
      x:-1000,
         opacity:0,
       
    }}
    animate={{
      x:0,
      opacity:1,
      scale:1,
    }}
    transition={{
      duration:1.5,
    }}

    
    >
      <div className='max-w-[600px]'>
      <h1 className='text-xl pb-5   first-letter:text-5xl first-letter:text-cyan-700   underline underline-offset-4'>Let's Train</h1>
     
      <p className='inline '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

      <button   className='   bg-pink-500 text rounded-xl py-2  mt-2  space-x-5 pl-3 ml-4 px-2 text-white  hover:animate-bounce  ' >Let's started</button>

</div>
<div className='mt-8'>
  <h2   className='text-xl pb-5   first-letter:text-5xl first-letter:text-cyan-700   underline underline-offset-4'>Data fetching</h2>
     <p className=' mb-2 '> {data.text}   </p> 

       
<span className='mb-4'> {data.type}:</span>
<p className='inline-block'> {data.year} Year,

</p>
<p> Number:{data.number},</p>
<p>  {!data.found ? (
<span  className='text-red-600'>Not found</span>
):(
<span>found</span>
)}</p>
</div>
        
   



  

     </motion.div>


  
   
 
 
   
 
      <div className=' mt-8  md:0 lg:0 relative' >
        <motion.div  className='ml-30'
        initial={{

          x:1000,
             opacity:0,
             
            
        }}
        animate={{
          x:0,
           opacity:1,
         
         
        
        }}
        transition={{
          duration:1.5,
          
          delay:1,    }}
        
        
        
        
        
        

        
        
        >
        <Image
        src='/spencer-davis-0ShTs8iPY28-unsplash.jpg'
        width={400}
        height={400}
        alt='gym'
        className=' sm:mx-auto lg:ml-52 lg:pl-10  mx-auto rounded-lg     object-cover  '
      
        
        />
        </motion.div>
        <motion.div 
        
        initial={{

          
             opacity:0,
             
            
        }}
        animate={{
          y:0,
           opacity:1,
         
         
        
        }}
        transition={{
          duration:1.5,
          
          scale:1,

         
          delay:1.5,    }}
        
        
        
        
        
        >
          <Image
        src='/gym1.jpg'
        width={400}
        height={400}
        alt='gym'
        className='    w-60  -left-1 -top-6      sm:mx-auto sm:w-[300px] sm:pr-3  mx-auto rounded-lg  absolute top-2  lg:w-[400px]   lg:-left-10 lg:pt-3 object-cover  '
      
        
        />
        </motion.div>
        <motion.div
        initial={{

          
             opacity:0,
             
            
        }}
        animate={{
         
           opacity:1,
         
         
        
        }}
        transition={{
          duration:2,
          delay:1.5 }}
        
        
        
        
        
        >
          <Image
        src='/gym.jpg'
        width={400}
        height={400}
        alt='gym'
        className=' w-60   -bottom-2 -right-2   sm:mx-auto sm:w-[300px] sm:pl-3  mx-auto rounded-lg   absolute bottom -right-6 lg:w-[400px] lg:bottom-8 lg:-right-30  lg:pb-3 object-cover  '
      
        
        />
        </motion.div>


    
     
      </div>



   
 <motion.div
 
 initial={{
  x:0,
  opacity:0,

}}
transition={{
  duration:1.5,
  
}}
whileInView={{

opacity:1,
x:0,
}}
viewport={{
once:false,
}}
 
 >
 

  <Video/>

 </motion.div>

<motion.div

  
initial={{
  x:200,
  opacity:0,

}}
transition={{
  duration:1.2,
  
}}
whileInView={{

opacity:1,
x:0,
}}
viewport={{
once:false,
}}
  
  
  
  


className='mt-8 lg:mt-5  lg:first-letter:text-cyan-900 lg:first-letter:uppercase lg:first-letter:text-5xl border-t border-gray-700 pt-3 sm:border-none md:border-none lg:border-none  lg:ml-32  '>

  <Images/> 
   </motion.div>
 


     </div>
    
     
      


  )


   } ;











export const getStaticProps=async()=>{
const res = await fetch('http://numbersapi.com/1/30/date?json');

  const data = await res.json();
  return {
    props :{
      data
    }
  }
}