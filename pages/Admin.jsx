import React from 'react'
import Vacancy from '../src/components/Joblist/Vacancy'
import Sidebar from '../src/components/Admin/Sidebar/Sidebar'

const Admin = () => {
  return (
    <div className='flex' >
      <div className='sticky'>
        <Sidebar />
      </div>
      <div className='w-full'>
        <Vacancy />
      </div>
    </div>
  )
}

export default Admin