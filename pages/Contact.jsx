import React from "react"
import ContactUS from "../src/components/Contact/ContactUs"
import Conthead from "../src/components/Contact/Conthead"
import Footer from "../src/components/Footer/Footer"

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