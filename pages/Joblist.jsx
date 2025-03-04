import React from 'react'
import Joblisthead from '../src/components/Joblist/Joblisthead'
import Vacancy from '../src/components/Joblist/Vacancy'
import Footer from "../src/components/Footer/Footer"

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