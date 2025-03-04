import React from 'react';
import { motion } from 'motion/react'

const Projects = () => {

  return (
    <motion.div 
    initial={{opacity: 0, y:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once: true}}
    className='w-full max-h-[1/2svh] md:h-fit md:pb-10 bg-gray-600' id='Projects'>
        <div className='container w-full px-10 py-4 pt-5 mx-auto my-auto md:pt-16 md:px-20 lg:px-32 overflow-hidde' >
            <h1 className='mb-2 text-2xl font-light text-center text-gray-100 sm:text-4xl'>Our <span className='font-bold'>Projects</span></h1>
            <p className='mx-auto text-center text-gray-400 md:mb-8 w-80'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

            <div>
              <img
                src='src\assets\Indonesian_map.svg'
                className="w-full h-auto"
              />
              <div className='absolute w-2 h-2 bg-gray-500 rounded-full left-20 right-20'></div>
              
            </div>
        </div>
    </motion.div>
    
  )
}

export default Projects