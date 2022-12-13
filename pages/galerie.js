import React from 'react'
import {motion} from 'framer-motion'

import baseUrl from '../helpers/baseUrl'

const galerie = ({photo}) => {



    console.log({photo})

  return (

  <motion.div  id='galerie'  className='grid  gap-8 sm:grid-cols-1    md:grid-cols-3  lg:grid-cols-4 lg:gap-4 sm:gap-8 md:gap-3 pb-7 overflow-x-hidden '
  
  initial={{
    opacity:0
}}
whileInView={{opacity:1}}
transition={{duration:1.5}}
  
  
  
  >

{photo.map((photo)=>(
<div key={photo._id} >


 <motion.img 
 
 
 
 initial={{
  x:0,
  opacity:0,

}}
transition={{
  duration:1.6,
  
}}
whileInView={{

opacity:1,
x:0,
}}
viewport={{
once:true,
}}
 
 
 
 
 
 
 src={photo.image}  className="   mt-7     mx-auto w-full h-full sm:w-full sm:h-96  sm:mt-8 md:mt-8  md:h-60 md:w-80  rounded-lg shadow-md shadow-gray-800  " />
<div className='font-mono text-gray-400  pb-8 lg:text-xs font-bold pt-2 lg:pl-2 md:text-xs md:pl-0 sm:pl-32  pl-1 text-xs    '>
<span className=''>  Created At:{photo.createdAt.substring(0,10)}  </span>
<span> {photo.createdAt.substring(11,19)}  </span>
</div>
</div>

))}   
     </motion.div>
  )
}



export default galerie;


/*  in build time*/
/*export async function getServerSideProps(){
  const res =  await fetch(`${baseUrl}/api/photo`)
    const data = await res.json()
    return {
      props:{
       photo:data
      }
    }
   }*/

   export async function getStaticProps(){
    const res =  await fetch(`${baseUrl}/api/photo`)
      const data = await res.json()
      return {
        props:{
         photo:data
        }
      }
     }
  
