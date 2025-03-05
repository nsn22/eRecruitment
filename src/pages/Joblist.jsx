import React from 'react'
import Joblisthead from '../components/Joblist/Joblisthead'
import Vacancy from '../components/Joblist/Vacancy'
import Footer from "../components/Footer/Footer"

const Joblist = () => {
  return (
    <div>
        <Joblisthead />
        <Vacancy />
        <Footer />
    </div>
  )
}

export default Joblist