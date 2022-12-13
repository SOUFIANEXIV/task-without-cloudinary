import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link';
import {AiFillHome } from "react-icons/ai";

import { MdFitnessCenter } from "react-icons/md";
import { BsFillBookFill } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from 'framer-motion'
import { BsGithub} from "react-icons/bs";
import { BsImages } from "react-icons/bs";

import { IoIosFitness } from "react-icons/io";










const Layout = ({children}) => {
  const [open,setOpen]=useState(false);



  return (
    <>

<Head>
        <title>Click FIt</title>
        <meta name="description" content="Click Fit" />
        

     

      </Head>

      
  <div className="flex  min-h-screen flex-col justify-between">



<motion.header className='mb-16'

initial={{

  y:-100,
     opacity:0,
     
    
}}
animate={{
  y:0,
   opacity:1,
 
 

}}
transition={{
  duration:1,
  type:'spring',
  delay:0.5,    }}



>
 
 
<nav className="bg-[#0D1117]  px-2 sm:px-4 py-2.5  dark:bg-gray-900 fixed w-full z-20 top-0 left-0  ">
  <div className="container flex flex-wrap items-center justify-between mx-auto bg-[#0D1117] ">
  <Link href="/" className="flex items-center text-blue-500 ">
      <span className="self-center text-3xl font-semibold whitespace-nowrap    ">
      < IoIosFitness className='inline-block mb-2 hover:animate-spin mr-1   text-orange-400 ' size={30} />

        Click Fit</span>
  </Link>
  <div class="flex md:order-2">
      <button type="button" class="text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button   onClick={()=>setOpen(!open)}name={open ? 'visible':'hidden'} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only"  > Open main menu</span>
        <svg className="w-6 h-6"  

        
 

 fill="currentColor"

           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className={`items-center justify-between    ${open ? 'visible' : 'hidden'}    w-full md:flex md:w-auto md:order-1   scroll-smooth `} id="navbar-sticky">
    <ul     className="flex flex-col p-4 mt-4   font-semibold   bg-[#0D1117] text-[#FFF7CC]   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
      <li>
        <Link href="/"  onClick={()=>setOpen(!open)}name={open ? 'visible':'hidden'} className='block py-2 font-semibold text-lg pl-3 pr-4    rounded md:bg-transparent  md:p-0   active:text-blue-700  text-gray-400  hover:text-blue-700   visited:text-gray-700 '      >
        < AiFillHome className='inline-block mb-2 hover:animate-bounce mr-1  ' size={20}/>
          
          Home</Link>
      </li>
      <li>
        <Link href="/about"  onClick={()=>setOpen(!open)}name={open ? 'visible':'hidden'} className="block  font-semibold py-2  text-lg pl-3 pr-4  text-gray-400 rounded  md:hover:bg-transparent  md:p-0 hover:text-blue-700  visited:text-gray-700 ">
        < BsFillBookFill className='inline-block mb-2 hover:animate-bounce mr-1 ' size={15}/>

          About</Link>
      </li>
      <li>
        <Link href="/services"  onClick={()=>setOpen(!open)}name={open ? 'visible':'hidden'} className="block  font-semibold py-2  text-lg pl-3 pr-4  text-gray-700 rounded  md:hover:bg-transparent  md:p-0 hover:text-blue-700  visited:text-gray-700 ">
        < MdFitnessCenter className='inline-block mb-2 hover:animate-bounce mr-1 ' size={20}/>

        Exercises</Link>
      </li>
      <li>
        <Link href="/galerie"  onClick={()=>setOpen(!open)}name={open ? 'visible':'hidden'} className="block  font-semibold   text-lg py-2 pl-3 pr-4 text-gray-400 rounded md:hover:bg-transparent  md:p-0   hover:text-blue-700  visited:text-gray-700 ">
        < BsImages className='inline-block mb-2 hover:animate-bounce mr-1 ' size={20}/>

          Galeries</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>




</motion.header>

<ToastContainer
position="bottom-center"
autoClose={5000}
limit={1}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

   <main className='container m-auto  text-[#FFF7CC]  px-4'>{children}   </main> 

    <footer className="flex h-10 justify-center items-center shadow-inner text-[#FFF7CC]  mt-7">
    <Link href='https://github.com/SOUFIANEXIV/task-without-cloudinary' target='_blank'>Copyright © 2022 source code <BsGithub className='inline-block mb-1'/></Link>
    </footer>

    
    </div>
    
  </>
  )
}

export default Layout

