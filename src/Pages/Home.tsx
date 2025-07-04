// import React from 'react'
import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Media from '../Components/Media'
import Email from '../Components/Email'
import Experience from '../Components/Experience'
// import Project from '../Components/Project'
// import Contact from '../Components/Contact'
import About from '../Components/About'

const Home = () => {
  return (
    <div className="bg-navy text-white min-h-screen w-full flex flex-col">
      <Navbar />
      <Header />
      <Media />
      <Email />
      <About />
      <Experience />
      {/* <Project />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default Home