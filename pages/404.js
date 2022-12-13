import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from "next/router";





const NotFound = () => {
    const router = useRouter();

  

    useEffect(()=>{
    setTimeout(()=>{
    
    router.push('/');
        
    
    },3000)
    
    },[])
  return (

    <div className='mt-20 lg:mt-0' >
        <Image
        
        src='/404 error with people holding the numbers-bro.svg'
        width={800}
        height={800}
        alt="page not found"
        className='mx-auto'
        />
        <p className='text-center text-gray-600 text-xl '>
        you will be redirected automatically in Home page 
        </p>
    </div>
  )
}

export default NotFound