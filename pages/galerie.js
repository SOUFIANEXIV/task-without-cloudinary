
import React from 'react'
import baseUrl from '../helpers/baseUrl'
import {motion} from 'framer-motion'


const galerie = ({photo}) => {
  const [currentPage, setCurrentPage] = React.useState(0)
  const itemsPerPage = 8


  const items = photo.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className='flex flex-col justify-between'> 
      
       <div>
    <motion.div 
    
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
    
    
    
    
    
    
    
    
    id='galerie' className='grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 sm:gap-8 md:gap-3 pb-7 overflow-x-hidden'>
      {items.map((photo) => (
        <div key={photo._id}>
          <img 
          
          
           
           
          
          
          
          
          
          src={photo.image} className="mt-7 mx-auto w-full h-full sm:w-full sm:h-96 md:mt-8 md:h-60 md:w-80 rounded-lg shadow-md shadow-gray-800" />
          <div className='font-mono text-gray-400 pb-8 lg:text-xs font-bold pt-2 lg:pl-2 md:text-xs md:pl-0 sm:pl-32 pl-1 text-xs'>
            <span className=''>Created At: {photo.createdAt.substring(0,10)}</span>
            <span>{photo.createdAt.substring(11,19)}</span>
          </div>
        </div>
      ))}
</motion.div>
      <div className=' text-center' >
        {currentPage > 0 && (
          <button className='hover:text-white text-gray-500' onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        )}
        {currentPage < Math.ceil(photo.length / itemsPerPage) - 1 && (
          <button   className='hover:text-white text-gray-500'          onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
    </div>
  )
}

export default galerie;





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
     
  