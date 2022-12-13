import React from 'react'
import {motion} from 'framer-motion';

const Video = () => {
  return (
    <motion.div className='text-center'
    
    
    initial={{
     
      opacity:0,
    
    }}
    transition={{
      duration:2,
      
    }}
    whileInView={{
    
    opacity:1,
    x:0,
    }}
    viewport={{
    once:false,
    }}
    
    
    
    
    
    
    >
        <h3 className='mt-8 mb-8 text-3xl  underline underline-offset-4 first-letter:text-red-800 first-letter:uppercase first-letter:text-5xl'>watch our video</h3>

<iframe className='  mx-auto  w-auto h-[300px] sm:w-[550px] md:w-[600px] lg:[300px] lg: xl:w-[550px]' src="https://www.youtube.com/embed/GsPvopOOyBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



    </motion.div>
  )
}

export default Video