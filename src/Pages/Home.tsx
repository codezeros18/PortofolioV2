// import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Media from '../Components/Media'
import Email from '../Components/Email'
import Experience from '../Components/Experience'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import About from '../Components/About'
import Archive from '../Components/Archive'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
  if (location.hash) {
    // Use setTimeout to wait for DOM to render fully
    setTimeout(() => {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 0)
  }
}, [location])

  return (
    <div className="bg-navy text-white min-h-screen w-full flex flex-col scroll-smooth overflow-x-hidden">
      <Navbar />
      <Header />
      <Media />
      <Email />
      <About />
      <Experience />
      <Project />
      <Archive />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home