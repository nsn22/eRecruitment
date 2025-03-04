import React, { useState } from 'react'
import { assets} from '../../../assets/assets'
import { DynamicIcon } from 'lucide-react/dynamic'
import { div } from 'motion/react-client'


const Sidebar = () => {

  const [expanded, setExpanded] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  return (
    <aside className={`hidden md:flex flex-col sticky top-0 bg-clip-border bg-white border border-gray-200 text-gray-700 h-screen p-4 transition-all
    ${expanded ? 'w-[20rem]' : 'w-28'}`}>
      <header className='p-4 flex border-b border-b-gray-200 items-center justify-between'>
        <div className='inline-flex items-center'>
          <img src={assets.logo}/>
          <h1 className={`mx-2 font-semibold origin-left text-2xl text-gray-700 transition-all line-clamp-1 ${!expanded && 'scale-0'}`}>KDC-Group</h1>
        </div>
        <button onClick={() => setExpanded(curr =>! curr)} className='p-1 rounded-md bg-gray-100 cursor-pointer'>
          { expanded ? <DynamicIcon name='panel-right-open' /> : <DynamicIcon name='panel-right-close' className='relative'/> }
        </button>
      </header>

      <ul className='p-4 h-full'>
        <li className='flex items-center p-3 cursor-pointer transition-all hover:ml-2 focus:bg-gray-100 focus:rounded-md active:bg-gray-100 active:rounded-md'>
          <a href="" className='flex items-center float-left'>
            <span>
              <DynamicIcon name='house' className=''/>
            </span>
            <h2 className={`px-4 font-medium text-lg origin-left transition-all ${!expanded && 'scale-0'}`}>Dashboard</h2>  
          </a>
        </li>

        <li className='relative flex items-center p-3 cursor-pointer transition-all hover:ml-2 focus:bg-gray-100 focus:rounded-md active:bg-gray-100 active:rounded-md'
        onClick={() => setSubmenuOpen(!submenuOpen)}
        >
          <div className='flex items float-left'>
            <span>
              <DynamicIcon name='layers' className=''/>
            </span>
            <h2 className={`px-4 font-medium text-lg origin-left transition-all line-clamp-1 ${!expanded && 'scale-0'}`}>Master Data</h2>  
          </div>
          <span className='absolute right-0' >
              <DynamicIcon name='chevron-right' className={`${submenuOpen && 'rotate-90 transition-all'} ${!expanded && 'scale-0'}`}/>
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

        <li className='relative flex items-center p-3 cursor-pointer transition-all hover:ml-2 focus:bg-gray-100 focus:rounded-md active:bg-gray-100 active:rounded-md'>
          <a href="" className='flex items float-left'>
            <span>
              <DynamicIcon name='id-card' className=''/>
            </span>
            <h2 className={`px-4 font-medium text-lg origin-left transition-all line-clamp-1 ${!expanded && 'scale-0'}`}>Vacancy</h2>  
          </a>
        </li>

        <li className='relative flex items-center p-3 cursor-pointer transition-all hover:ml-2 focus:bg-gray-100 focus:rounded-md active:bg-gray-100 active:rounded-md'>
          <a href="" className='flex items float-left'>
            <span>
              <DynamicIcon name='book-user' className=''/>
            </span>
            <h2 className={`px-4 font-medium text-lg origin-left transition-all line-clamp-1 ${!expanded && 'scale-0'}`}>Applicant</h2>  
          </a>
        </li>

        <li className='relative flex items-center p-3 cursor-pointer transition-all hover:ml-2 focus:bg-gray-100 focus:rounded-md active:bg-gray-100 active:rounded-md'>
          <a href="" className='flex items float-left'>
            <span>
              <DynamicIcon name='settings' className=''/>
            </span>
            <h2 className={`px-4 font-medium text-lg origin-left transition-all line-clamp-1 ${!expanded && 'scale-0'}`}>Settings</h2>  
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar