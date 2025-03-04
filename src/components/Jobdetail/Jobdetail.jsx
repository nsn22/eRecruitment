import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'

const Jobdetail = ({isvisible, onClose}) => {
    const handleOnClose = (e) => {
        if(e.target.id === 'detail') onClose()
    }

    const navigate = useNavigate()
    if (!isvisible) return null

  return (
    <div
    id='detail'
    onClick={handleOnClose} className='fixed inset-0 bg-black/25 backdrop-blur-sm
    flex justify-center items-center'>
        <motion.div
        initial={{ opacity:0, y: '100%' }}
        animate={{ opacity:1, y: 0 }}
        exit={{ opacity: 0, y:'100%' }}
        transition={{ duration:0.2, ease:'easeInOut'}}
        className="container bg-white p-4 rounded-2xl h-[calc(100%-13rem)] mx-4 md:h-fit overflow-y-auto max-w-screen-md"
        >
            <button onClick={onClose} className='px-3'>
                <svg className="-rotate-180 w-3.5 h-3.5 ms-2 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>

            {/* Header */}
            <header className='flex justify-between px-4'>
                <div>
                    <h2 className='text-2xl font-bold text-gray-900'>Senior Planner</h2>
                    <span className="inline-block px-2 py-1 mt-2 mr-2 text-sm font-semibold text-gray-900 bg-white border rounded-lg">Sumatra</span>
                    <span className="inline-block px-2 py-1 mt-2 mr-2 text-sm font-semibold text-green-700 bg-white border rounded-lg">Experience Hire</span>
                    <span className="inline-block px-2 py-1 mt-2 mr-2 text-sm font-semibold text-sky-700 bg-white border rounded-lg">All In</span>
                </div>
                <div>
                    <button onClick={() => navigate('/apply')} className='py-2 px-3 md:px-4 bg-green-600 rounded-md text-white cursor-pointer'>Apply</button>
                </div>
            </header>

            {/* Main Content */}
            <main className='p-4 pt-8'>
                {/* About the Role */}
                <div>
                    <h3 className='font-semibold text-gray-900'>About This Role</h3>
                    <p className='text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* Qualification */}
                <div className='pt-6'>
                    <h3 className='font-semibold text-gray-900'>Qualification</h3>
                    <ul className='space-y-1 text-gray-700 list-disc list-inside'>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                </div>

                {/* Responsibility */}
                <div className='pt-6'>
                    <h3 className='font-semibold text-gray-900'>Responsibility</h3>
                    <ul className='space-y-1 text-gray-700 list-disc list-inside'>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                </div>
            </main>
        </motion.div>
    </div>
  )
}

export default Jobdetail