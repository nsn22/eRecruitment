import React from "react"
import Header from "../src/components/landing-page/Header"
import About from "../src/components/landing-page/About"
import Projects from "../src/components/landing-page/Projects"
import Testimonials from "../src/components/landing-page/Testimonials"
import Culture from "../src/components/landing-page/Culture"
import Recprocess from "../src/components/landing-page/Recprocess"  
import Apply from "../src/components/landing-page/Apply"
import Footer from "../src/components/Footer/Footer"
import InteractiveMap from "../src/components/landing-page/InteractiveMap"


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
        <InteractiveMap />
        <Footer />
    </div>
  )
}

export default Home