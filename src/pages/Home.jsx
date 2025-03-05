import React from "react"
import Header from "../components/landing-page/Header"
import About from "../components/landing-page/About"
import Projects from "../components/landing-page/Projects"
import Testimonials from "../components/landing-page/Testimonials"
import Culture from "../components/landing-page/Culture"
import Recprocess from "../components/landing-page/Recprocess"  
import Apply from "../components/landing-page/Apply"
import Footer from "../components/Footer/Footer"


const Home = () => {
  return (
    <div className="relative w-full">
        <Header />
        <About />
        <Projects />
        <Culture />
        <Recprocess />
        <Apply />
        <Testimonials />
        <Footer />

    </div>
  )
}

export default Home