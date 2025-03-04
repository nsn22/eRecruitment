import React, { useState, useEffect } from 'react'
import { assets} from '../../../assets/assets'
import { DynamicIcon } from 'lucide-react/dynamic'


const Sidebar = () => {

  const [expanded, setExpanded] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobileOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md sm:top-2 sm:left-2 sm:p-1"
      >
        <DynamicIcon name="menu" className="text-gray-700 sm:h-5 sm:w-5" />
      </button>

    <aside className={`
          md:flex flex-col fixed bg-clip-border bg-white border border-gray-200 text-gray-700 h-screen p-4 transition-all
          ${expanded ? 'w-[20rem]' : 'w-28'}
          ${isMobileOpen ? 'translate-x-0 z-50' : '-translate-x-full md:translate-x-0'}
          md:static
          top-0 left-0 z-40
        `}
    >
      <header className='p-4 flex border-b border-b-gray-200 items-center justify-between'>
        <div className='inline-flex items-center'>
          <img src={assets.logo}/>
          <h1 className={`mx-2 font-semibold origin-left text-2xl text-gray-700 transition-all line-clamp-1 ${!expanded && 'scale-0'}`}>KDC-Group</h1>
        </div>
        <button onClick={() => setExpanded(curr =>! curr)} className='hidden md:flex p-1 rounded-md bg-gray-100 cursor-pointer'>
          { expanded ? <DynamicIcon name='panel-right-open' /> : <DynamicIcon name='panel-right-close' className='relative'/> }
        </button>
      </header>

      <ul className='p-4 h-full'>
        <li className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-100 rounded-md focus:bg-gray-500 active:bg-gray-200 group'>
          <a href="" className='flex items-center'>
            <span>
              <DynamicIcon name='house' className=''/>
            </span>
            <h2 className={`${expanded ? 'px-4 font-medium text-lg origin-left transition-all': 'px-2 rounded-sm font- text-sm origin-left invisible group-hover:bg-blue-500/10 group-hover:rounded-sm group-hover:visible group-hover:translate-x-14 transition-all'}`}>Dashboard</h2>  
          </a>
        </li>

        <li className='relative flex items-center p-3 rounded-md cursor-pointer transition-all hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 group'
        onClick={() => {setSubmenuOpen(!submenuOpen), setExpanded(true)}}
        >
          <div className='flex items float-left'>
            <span>
              <DynamicIcon name='layers' className=''/>
            </span>
            <h2 className={`${expanded ? 'px-4 font-medium text-lg origin-left transition-all line-clamp-1': 'px-2 rounded-sm font- text-sm origin-left line-clamp-1 invisible group-hover:bg-blue-500/10 group-hover:rounded-sm group-hover:visible group-hover:translate-x-14 transition-all'}`}>Master Data</h2>  
          </div>
          <span className='absolute right-0' >
              <DynamicIcon name='chevron-right' className={`${submenuOpen && 'rotate-90 transition-all'} ${!expanded && 'hidden'}`}/>
          </span>
        </li>

        {submenuOpen && expanded && (
            <ul>
              <a href='' className='flex items-center w-full p-2 px-14 cursor-pointer transition-all hover:ml-2 focus:bg-gray-100 focus:rounded-md active:bg-gray-100 active:rounded-md'>
                Company
              </a>
              <a href='' className='flex items-center w-full p-2 px-14 cursor-pointer transition-all hover:ml-2 focus:bg-gray-100 focus:rounded-md active:bg-gray-100 active:rounded-md'>
                Department
              </a>
              <a href='' className='flex items-center w-full p-2 px-14 cursor-pointer transition-all hover:ml-2 focus:bg-gray-100 focus:rounded-md active:bg-gray-100 active:rounded-md'>
                Users
              </a>
            </ul>
          )}

        <li className='relative flex items-center p-3 cursor-pointer group transition-all hover:bg-gray-100 rounded-md focus:bg-gray-100 active:bg-gray-200'>
          <a href="" className='flex items float-left'>
            <span>
              <DynamicIcon name='id-card' className=''/>
            </span>
            <h2 className={`${expanded ? 'px-4 font-medium text-lg origin-left transition-all': 'px-2 rounded-sm font- text-sm origin-left invisible group-hover:bg-blue-500/10 group-hover:rounded-sm group-hover:visible group-hover:translate-x-14 transition-all'}`}>Vacancy</h2>  
          </a>
        </li>

        <li className='relative flex items-center p-3 cursor-pointer group transition-all hover:bg-gray-100 hover:rounded-md focus:bg-gray-100 active:bg-gray-200'>
          <a href="" className='flex items float-left'>
            <span>
              <DynamicIcon name='book-user' className=''/>
            </span>
            <h2 className={`${expanded ? 'px-4 font-medium text-lg origin-left transition-all': 'px-2 rounded-sm font- text-sm origin-left invisible group-hover:bg-blue-500/10 group-hover:rounded-sm group-hover:visible group-hover:translate-x-14 transition-all'}`}>Applicant</h2>  
          </a>
        </li>

        <li className='relative flex items-center p-3 cursor-pointer group transition-all hover:bg-gray-100 rounded-md focus:bg-gray-100 active:bg-gray-200'>
          <a href="" className='flex items float-left'>
            <span>
              <DynamicIcon name='settings' className=''/>
            </span>
            <h2 className={`${expanded ? 'px-4 font-medium text-lg origin-left transition-all': 'px-2 rounded-sm font- text-sm origin-left invisible group-hover:bg-blue-500/10 group-hover:rounded-sm group-hover:visible group-hover:translate-x-14 transition-all'}`}>Settings</h2>  
          </a>
        </li>
      </ul>
    </aside>
          {/* Overlay untuk Mobile (hidden di desktop) tetap sama */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

    </>
  )
}

export default Sidebar