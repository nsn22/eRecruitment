import React from 'react'
import { motion } from "motion/react"
import Navbar from '../Navbar/Navbar'

const Joblisthead = () => {
  return (
    <div className='relative min-h-[70vh] w-full bg-[url(/header_img.png)] bg-fixed bg-cover'>
      <div className='absolute min-h-[70vh] flex items-center w-full overflow-hidden bg-black/10'>
        <Navbar />
        <motion.div
        initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className='container px-6 py-4 mx-auto text-white md:px-16 lg:px-20'>
          <h2 className='text-5xl sm:text-6xl md:text-[70px] inline-block max-w-3xl font-semibold pt-20'>Vacancies</h2>
          <p className='mt-3 text-[21px] grid grid-cols-[100%] md:grid-cols-[580px]'>
          We realize our people is our greatest assets. Our people possess the skills, expertise and experience needed
           to provide KDC Group with high-quality product & services to grow the business.</p>
        </motion.div>
      </div>
      
    </div>
    
  )
}

export default Joblisthead