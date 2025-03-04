import React from 'react'
import {assets} from '../../assets/assets'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}

    className='container flex flex-col items-center justify-center w-full mx-auto overflow-hidden p-14 md:px-20 lg:px-32'
    id='About'>
        <h1 className='mb-2 text-2xl font-bold sm:text-4xl'>About 
            <span className='ml-3 font-light'
            >Us</span></h1>
        <p className='mb-8 text-center text-gray-500 max-w-80'>Integrated Mining Services</p>

        <div className='flex flex-col items-center md:flex-row md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full max-w-lg sm:w-1/2'/>
            <div className='flex-col items-center mt-10 text-gray-600 md:items-start'>
                <div className='grid w-full grid-cols-2 gap-6 md:gap-10 2xl pr-28'>
                    <div>
                        <p className='text-4xl font-bold text-gray-800'>19</p>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold text-gray-800'>12</p>
                        <p>Project Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold text-gray-800'>20</p>
                        <p>Clients</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold text-gray-800'>12</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='max-w-lg my-10 text-justify'>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                </p>
                <button className='px-8 py-2 text-white bg-green-500 rounded'>Learn More</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About