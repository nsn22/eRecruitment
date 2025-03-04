import React from 'react'
import { motion } from "motion/react"
import Navbar from '../Navbar/Navbar'

const Conthead = () => {
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
          <h2 className='text-5xl sm:text-6xl md:text-[70px] inline-block max-w-3xl font-semibold pt-20'>Contact Us</h2>
          <p className='mt-3 text-[21px] grid grid-cols-[400px] md:grid-cols-[580px]'>
            If you have any queries related to PT. Kaltim Diamond Coal, please do not hesitate to contact us</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Conthead