// import React from 'react'
import { Github, ExternalLink } from 'lucide-react'
import img1 from '../assets/capstone.jpg'
import img2 from '../assets/project.png' // replace with different image
import img3 from '../assets/fiver2.png' // replace with different image

const projects = [
  {
  title: 'Project Capstone',
  description:
    'A data science project using Python to analyze real-world datasets through visualization and machine learning. Built with Jupyter, Pandas, and Scikit-learn for academic insights and predictions.',
  tech: ['Python', 'Jupyter', 'Pandas', 'NumPy'],
  tech2: ['Matplotlib', 'Seaborn', 'Scikit-learn'],
  github: '#',
  external: '#',
  image: img1,
},
{
  title: '2D Pixel Game',
  description:
    'An interactive 2D pixel game inspired by Stardew Valley. Built with React and Tiled Map Editor, featuring animated sprites, tile-based maps, and a nostalgic aesthetic.',
  tech: ['React', 'JavaScript', 'Tailwind CSS'],
  tech2: ['Vite', 'Tiled Map Editor'],
  github: 'https://github.com/codezeros18/pti',
  external: 'https://codezeros18.github.io/pti/',
  image: img2,
},
{
  title: 'Fiver Home Cloning',
  description:
    'A responsive clone of Fiverr’s homepage using React, TypeScript, and Tailwind CSS. Features clean UI components and layout inspired by a real-world platform.',
  tech: ['React', 'TypeScript', 'HeroIcons'],
  tech2: ['Tailwind CSS', 'Vite'],
  github: 'https://github.com/codezeros18/fiverr',
  external: 'https://codezeros18.github.io/fiverr/',
  image: img3,
}
]

const Project = () => {
  return (
    <section id="projects" className="scroll-mt-28 bg-navy text-light-slate font-inter min-h-screen">
      <div className="md:max-w-2xl lg:max-w-5xl mx-auto md:px-10 lg:px-6">
        {/* Section Header */}
        <div className="mb-12 mx-6 md:mx-0">
          <div className="flex items-center gap-2">
            <span className="text-green text-[18px] md:text-[20px] font-fira">03.</span>
            <h2 className="text-[24px] md:text-[26px] font-semibold text-lightest-slate">
              Some Things I’ve Built
            </h2>
            <div className="flex-grow h-[1px] bg-lightest-navy mt-2" />
          </div>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-y-0 md:gap-y-28">
        {projects.map((project, i) => {
        const isEven = i % 2 === 0

        return (
          <div
            key={i}
            className={`relative flex flex-col ${
              isEven ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center md:items-start h-auto mb-0 md:mb-24`}
          >
            {/* Background Image */}
            {/* Desktop-only absolute image */}
            <div
              className={`group hidden md:block absolute top-0 ${
                isEven ? 'md:left-0' : 'md:right-0'
              } w-auto h-auto rounded overflow-hidden z-0`}
            >
              <div className="absolute inset-0 bg-green-900 opacity-50 mix-blend-screen z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="h-[52vh] w-[80vh] object-cover opacity-60 mix-blend-lighten group-hover:opacity-100 transition duration-300 rounded object-center"
              />
            </div>
            {/* Text Content */}
              <div
                className={`relative z-0 md:w-[50%] ${
                  isEven ? 'md:text-right' : 'md:text-left'
                } text-left p-6 mx-6 md:mx-0 my-4 md:my-0 shadow-lg md:shadow-none md:p-0 bg-cover bg-center md:bg-none`}
                style={{
                  backgroundImage:
                    typeof window !== 'undefined' && window.innerWidth < 768
                      ? `url(${project.image})`
                      : 'none',
                }}
              >
            {/* Optional dark overlay only on mobile */}
            <div className="absolute inset-0 bg-navy opacity-[95%] md:hidden z-0" />
              <div className='relative z-10'>
                <p className="text-green font-fira text-sm md:text-[13px] leading-[24px] mb-1">Featured Project</p>
                <h3 className="text-[22px] leading-[26.4px] font-[600] md:text-[24px] hover:text-[#64ffda] transition duration-500 cursor-pointer tracking-normal text-lightest-slate">
                  {project.title}
                </h3>
                <div className="bg-transparent md:bg-[#112240] px-0 md:px-6 py-6 my-4 shadow-none md:shadow-lg rounded-sm">
                  <p className="leading-[23.4px] font-[400] text-[16px] text-light-slate">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`flex flex-col gap-2 text-xs text-slate font-fira ${
                    isEven ? 'md:items-end' : 'md:items-start'
                  }`}
                >
                  <ul className="flex flex-wrap gap-4">
                    {project.tech.map((tech, j) => (
                      <li className='text-[13px] leading-[16.9px] font-[400] text-light-slate' key={`tech1-${j}`}>{tech}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-4">
                    {project.tech2.map((tech, j) => (
                      <li className='text-[13px] leading-[16.9px] font-[400] text-light-slate' key={`tech2-${j}`}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`flex gap-4 mt-4 text-lightest-slate ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 hover:text-[#64ffda] duration-500 transition" />
                  </a>
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 hover:text-[#64ffda] duration-500 transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        )
      })}
        </div>

      </div>
    </section>
  )
}

export default Project
