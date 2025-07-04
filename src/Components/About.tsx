import React from 'react'
import { ChevronRight } from 'lucide-react'
import profile from '../assets/profile2.jpg' // Adjust the path as necessary

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
  ]

  return (
    <section
      id="about"
      className="bg-navy text-light-slate font-inter h-[110vh] md:min-h-screen flex items-center "
    >
      <div className="max-w-5xl mx-auto md:mx-24 md:px-14 lg:mx-auto px-8 py-24">
        <div className="grid md:grid-cols-7 gap-12 items-start">
          {/* Text Content */}
          <div className='grid col-span-4'>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-green text-[16px] font-[600] leading-[35px] font-fira">01.</span>
              <h2 className="text-[26px] md:text-[32px]  leading-[35px] font-[600] text-lightest-slate">About Me</h2>
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
          <div className="col-span-3 flex justify-center md:justify-end">
            <div className="relative w-40 md:w-64 aspect-square group">
              <div className="relative z-10 overflow-hidden">
                <img
                  src={profile} // your image import
                  alt="Profile"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="absolute top-3 left-3 w-full h-full border-2 border-green z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition duration-300" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
