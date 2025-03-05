import React from "react"
import ContactUS from "../components/Contact/ContactUs"
import Conthead from "../components/Contact/Conthead"
import Footer from "../components/Footer/Footer"

const Contact = () => {
  return (
    <div className="relative w-full">
      <Conthead />
      <ContactUS />
      <Footer />
    </div>
  )
}

export default Contact