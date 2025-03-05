import React from 'react'
import { howtoapply } from '../../assets/assets'


const Apply = () => {
  return (
    <div className='relative w-full px-5 overflow-hidden p-14 md:px-20 h-fit' id='Apply'>
        <h1 className='mb-2 text-3xl font-bold text-center md:text-4xl'> <span className='font-light'>How To</span> Apply</h1>
        <p className='mx-auto mb-8 text-center text-gray-500 max-w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        {/* How To Apply */}
        <div className='space-y-4'>
            {howtoapply.map((how, index) => (
            <div key={index} className="relative flex flex-col max-w-4xl mx-auto overflow-hidden bg-white border rounded-lg shadow-sm border-slate-300">
                <div className='p-4 overflow-hidden border-b bg-gradient-to-r from-sky-500 to-green-500 border-slate-200'>
                    <h5 className='text-xl font-semibold text-white'>{how.step}</h5>
                </div>
                <div className='px-4 py-3'>
                    <p className='font-normal leading-normal text-justify text-gray-600'>{how.explanation}</p>
                </div>    
            </div>
            ))}
        </div>     
    </div>
    
  )
}

export default Apply