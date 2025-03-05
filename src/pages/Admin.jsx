import React from 'react'
import Vacancy from '../components/Joblist/Vacancy'
import Sidebar from '../components/Admin/Sidebar/Sidebar'

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