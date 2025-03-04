import React from 'react'
import { motion } from "motion/react"
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className='relative w-full h-screen bg-[url(/header_img.png)] bg-fixed bg-cover' id='Header'>
      <div className='absolute inset-0 flex items-center w-full min-h-screen mb-4 overflow-hidden bg-black/5'>
        <Navbar />
        <motion.div
        initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className='container px-10 py-4 mx-auto text-white md:px-16 lg:px-20'>
          <h2 className='text-5xl sm:text-6xl md:text-[70px] inline-block max-w-3xl font-semibold pt-20'>Welcome to Your Future in Coal Mining</h2>
          <p className='mt-3 text-[19px] grid grid-cols-[400px] md:grid-cols-[580px]'>Explore our platform to discover exciting opportunities tailored just for you.</p>
          <div className='mt-16 space-x-4'>
            <a href="#Projects" className='px-6 py-3 duration-300 border border-white rounded hover:bg-neutral-50 hover:text-black'>Project</a>
            <a href="/contact" className='px-6 py-3 duration-300 bg-green-500 border border-green-500 rounded hover:bg-green-600 hover:border hover:border-green-600' >Contact Us</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header