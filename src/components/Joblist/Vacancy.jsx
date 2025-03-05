import React, { Fragment, useState } from 'react'
import {assets, vacancyData} from '../../assets/assets'
import { motion } from 'motion/react'
import Jobdetail from '../Jobdetail/Jobdetail'

const Vacancy = () => {
    const [showDetail, setShowDetail] = useState(false)

    const handleOnClose = () => setShowDetail(false)

  return (
    <Fragment>
        <div className='bg-gray-200'>
            <motion.div
            initial={{opacity: 0, x:200}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, x:0}}
            viewport={{once: true}}
            
            className='container w-full px-10 py-10 mx-auto overflow-hidden md:px-20' id='Vacancy'>
                {/* PENGUMUMAN */}
                <div className='p-3 text-center bg-white rounded-2xl'>
                    <h2 className='mt-4 text-3xl font-bold text-center text-green-900'>ATTENTION</h2>
                    <ul className='px-7 md:px-12 pb-4 font-normal text-green-900 text-left list-disc rounded-2xl'>
                        <li className='text-lg'>KDC Group does not charge any fees in the recruitment process and does not involve travel agencies or individuals for any form of payment.</li>
                        <li className='text-lg'>The official information regarding the recruitment and employee admission process at KDC Group is only available through the official website career.kdcgroup.com.</li>
                        <li className='text-lg'>All official invitations to participate in the selection process will only be sent through email addresses with the domain kaltimdiamondcoal.com.</li>
                    </ul>
                </div>

                {/* JOBLIST */}
                <div className='flex flex-wrap justify-center gap-8 py-8'>
                    {vacancyData.map((vacancy, index) => (
                    <div key={index} className="max-w-[340px] h-fit bg-white rounded-lg shadow-xm overflow-hidden">
                        <a href="#">
                            <img src={vacancy.image} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{vacancy.position}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-900 line-clamp-2">{vacancy.desc}</p>
                            <div className='mt-5 line-clamp-1'>
                                <span className="inline-block px-2 py-1 mt-2 mr-2 text-sm font-semibold text-gray-800 bg-white border border-gray-500 rounded-lg">{vacancy.site}</span>
                                <span className="inline-block px-2 py-1 mt-2 mr-2 text-sm font-semibold text-green-600 bg-white border border-green-600 rounded-lg">{vacancy.hiringType}</span>
                                <span className="inline-block px-2 py-1 mt-2 mr-2 text-sm font-semibold text-sky-600 bg-white border border-sky-600 rounded-lg">{vacancy.type}</span>
                            </div>

                            {/* Button */}
                            <button 
                            className="inline-flex mt-5 items-center w-full justify-between px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-sky-500 to-green-500 rounded-lg hover:bg-green-700 cursor-pointer"
                            onClick={() => setShowDetail(true)}>
                                Read more
                                <svg className="-rotate-45 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </motion.div>
        </div>
        <Jobdetail onClose={handleOnClose}  isvisible={showDetail}/>
    </Fragment>
  )
}

export default Vacancy