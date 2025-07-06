// import React from 'react'
import { ChevronRight } from 'lucide-react'
// @ts-ignore
import profile from '../assets/profile2.jpg' // Adjust the path as necessary
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const About = () => {
  const techStack = [
    "JavaScript (ES6+)",
    "Python",
    "TypeScript",
    "NumPy",
    "React",
    "Pandas",
    "Tailwind CSS",
    "Matplotlib",
    "Laravel",
    "Seaborn",
    "Git & GitHub",
    "scikit-learn",
    "Pyplot",
    "MySQL",
    "Folium"
  ]
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 })
  }, [inView, controls])

  return (
    <section
      id="about"
      className="scroll-mt-[150px] md:scroll-mt-28 bg-navy text-light-slate font-inter h-[120vh] lg:h-[80vh] flex items-center "
    >
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          transition={{ duration: 0.8, ease: 'easeOut' }} 
        className="max-w-5xl mx-auto md:mx-24 md:px-14 lg:mx-auto px-8 py-24">
        <div className="grid md:grid-cols-7 gap-12 items-start">
          {/* Text Content */}
          <div className='grid col-span-4'>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-green text-[18px] md:text-[20px] font-fira">01.</span>
              <h2 className="text-[24px] md:text-[26px] font-semibold text-lightest-slate">
                About Me
              </h2>
              <div className="flex-grow h-[0.5px] bg-lightest-navy mt-2" />
            </div>

            <div className="flex flex-col gap-4 text-base leading-relaxed">
              <p>
                Hi! I’m Lintang — a developer with a background in <span className="text-green">web development</span>, now diving into <span className="text-green">data science</span>. I’m currently studying at university, <span className="text-green">leading web development</span> in a student organization, and <span className="text-green">volunteering at an AI lab</span>.
              </p>
              <p>
                Outside of class, I’m learning through a <span className="text-green">data science bootcamp</span>, joining <span className="text-green">hackathons</span>, and exploring how <span className="text-green">data can solve real-world problems</span>. My goal is to blend <span className="text-green">creativity</span>, <span className="text-green">code</span>, and <span className="text-green">data</span> — and someday, build something meaningful with <span className="text-green">AI</span>.
              </p>

              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-y-2 text-sm font-mono text-light-slate mt-4">
              {techStack.map((tech, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-green" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className="col-span-3 flex items-center justify-center md:justify-end h-full">
            <div className="relative h-[40vh] aspect-square group">
              {/* Image */}
              <div className="relative z-10 overflow-hidden h-full">
                <img
                  src={profile} // your image import
                  alt="Profile"
                  className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>

              {/* Border box */}
              <div className="absolute top-3 left-3 h-[40vh] aspect-square border-2 border-green z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition duration-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
