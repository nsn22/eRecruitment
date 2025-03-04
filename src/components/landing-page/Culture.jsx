import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'motion/react'

const Culture = () => {
  return (
    <motion.div
    initial={{opacity: 0, y:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once: true}}
    className='' id='Culture'>
        <div className='container justify-center w-full mx-auto p-14 md:px-20'>
            <h1 className='mb-2 text-2xl font-bold text-center sm:text-4xl'> <span className='font-light'>Work</span> Culture</h1>
            <p className='mx-auto mb-12 text-center text-gray-500 max-w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

            <div className='grid max-w-screen-md grid-cols-1 gap-6 mx-auto md:grid-cols-2'>
                <div className='grid grid-cols-5 mx-auto max-w-[400px] shadow-md border border-gray-200 bg-gray-50 rounded-xl overflow-hidden'>
                    <img className='col-span-2 min-h-[200px] object-cover' src={assets.coal_mine_img} alt="" />
                    <div className='col-span-3 px-4 my-auto text-justify'>
                        <h3 className='text-xl font-semibold'>Communication</h3>
                        <p className='font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>

                <div className='grid grid-cols-5 mx-auto max-w-[400px] shadow-md border border-gray-200 bg-gray-50 rounded-xl overflow-hidden'>
                    <img className='col-span-2 min-h-[200px] object-cover' src={assets.coal_mine_img} alt="" />
                    <div className='col-span-3 px-4 my-auto text-justify'>
                        <h3 className='text-xl font-semibold'>Coordination</h3>
                        <p className='font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className='grid grid-cols-5 mx-auto max-w-[400px] shadow-md border border-gray-200 bg-gray-50 rounded-xl overflow-hidden'>
                    <img className='col-span-2 min-h-[200px] object-cover' src={assets.coal_mine_img} alt="" />
                    <div className='col-span-3 px-4 my-auto text-justify'>
                        <h3 className='text-xl font-semibold'>Collaboration</h3>
                        <p className='font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>

                <div className='grid grid-cols-5 mx-auto max-w-[400px] shadow-md border border-gray-200 bg-gray-50 rounded-xl overflow-hidden'>
                    <img className='col-span-2 min-h-[200px] object-cover' src={assets.coal_mine_img} alt="" />
                    <div className='col-span-3 px-4 my-auto text-justify'>
                        <h3 className='text-xl font-semibold'>Teamwork</h3>
                        <p className='font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>


            </div>
        </div>
    </motion.div>
  )
}

export default Culture