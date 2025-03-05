import React, { useEffect, useState } from 'react'
import {assets} from '../../assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()

  const [header, setHeader] = useState(false)

  const scrollHeader = () => {
    if(window.scrollY >= 250){
      setHeader(true)
    }else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll' ,scrollHeader)

    return () => {
      window.addEventListener('scroll' ,scrollHeader)
    }
  },[])

  return (
    <div className={header ? "fixed w-full top-0 bg-black/40 transition-all z-10": "fixed w-full top-0 bg-[transparent] transition-all"}>
        <div className='container flex items-center justify-between px-10 py-4 mx-auto md:px-10 lg:px-20'>
          <a href="/">
            <img src={assets.logo} alt="" />
          </a>
          <ul className='items-center hidden text-white md:flex gap-7'>
             <a href="/" className='transition-all rounded-md cursor-pointer hover:scale-105'>Home</a>
             <a href="/#Projects" className='transition-all rounded-md cursor-pointer hover:scale-105'>Projects</a>
             <a href="/#Culture" className='transition-all rounded-md cursor-pointer hover:scale-105'>Work Culture</a>
             <a href="/#Recprocess" className='transition-all rounded-md cursor-pointer hover:scale-105'>Recruitment Process</a>
          </ul>

          <div className='flex gap-2 ml-2 md:flex'>
              <a className='inset-y-0 right-0 hidden px-6 py-2 text-white duration-300 border border-white rounded-full md:block hover:bg-white hover:text-black cursor-pointer'
               href='/joblist'>Apply</a>
          </div>
        
          <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menu_icon} className='cursor-pointer md:hidden w-7' alt="" />
        </div> 

        {/*-------------- mobile menu ----------- */}
        <div className={`flex md:hidden xl:hidden top-24 left-0 w-full
          text-white flex-col items-center font-semibold text-lg transform transition-transform
           ${isMenuOpen ? '' : 'hidden'}`}
          >
            <a onClick={() => setIsMenuOpen(false)} href='/' className='w-full p-2 text-center list-none '>Home</a>
            <a onClick={() => setIsMenuOpen(false)} href='#Projects' className='w-full p-2 text-center list-none'>Projects</a>
            <a onClick={() => setIsMenuOpen(false)} href='#Culture' className='w-full p-2 text-center list-none'>Work Culture</a>
            <a onClick={() => setIsMenuOpen(false)} href='#Recprocess' className='w-full p-2 text-center list-none'>Recruitment Process</a>
            <a onClick={() => setIsMenuOpen(false)} href='/joblist' className='w-full p-2 text-center list-none'>Apply</a>
        </div>
        
    </div>
  )
}

export default Navbar