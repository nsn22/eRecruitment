import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Joblist from './pages/Joblist'
import LoginPage from './components/Login/LoginPage'
import Jobapply from './components/Jobapply/Jobapply'
import Admin from './pages/Admin'
import Sidebar from './components/Admin/Sidebar/Sidebar'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/joblist' element={<Joblist />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/apply' element={<Jobapply />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='sidebar' element={<Sidebar />} />
      </Routes>
    </Router>
  )
}

export default App