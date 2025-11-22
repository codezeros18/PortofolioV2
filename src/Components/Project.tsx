// import React from 'react'
import {ExternalLink } from 'lucide-react'
import img1 from '../assets/p3.webp'
import img2 from '../assets/p1.webp' // replace with different image
import img3 from '../assets/p2.webp' // replace with different image
import { motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Project = () => {
  const projects = [
  {
    title: "Dashboard Analysis: Consumer Behavior & Financial Insights",
    description:
      "An interactive dashboard built using Python and Looker Studio to uncover how spending behavior impacts financial stress. This project focuses on understanding debt anxiety, consumer priorities, and lifestyle choices through correlation-driven insights. The dashboard uses a modern dark interface with a clear narrative flow to help decision-makers explore what really drives personal finance concerns.",
    tech: ["Python", "Pandas", "NumPy"],
    tech2: ["Looker Studio", "Matplotlib", "Seaborn"],
    external: "https://lookerstudio.google.com/reporting/ebc42c4d-2ba8-40ef-9706-adc54a4c6581",
    image: img1,
  },
  {
    title: "Bisasinema – Creative Film Community Website",
    description:
      "A responsive website built for a creative film community to showcase workshops, production content, and upcoming events. The platform provides a smooth admin experience for uploading multimedia, and updating program information dynamically. This project strengthens the community’s digital identity and makes it easier to grow engagement with new audiences.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    tech2: ["SQL", "Figma", "GitHub"],
    external: "https://bisasinema.vercel.app/",
    image: img2,
  },
  {
    title: "Dashboard Analysis – Economic Inequality & Digital Transformation",
    description:
      "A data storytelling dashboard focused on understanding the economic gap between rural and urban regions. Using analysis and machine learning exploration, this project highlights poverty risks, digital access limitations, and inefficiencies in regional development budgets. The result is a strategic narrative that proposes scalable digital transformation solutions aligned with long-term social impact.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    tech2: ["Looker Studio", "Seaborn", "Folium"],
    external: "https://github.com/codezeros18/",
    image: img3,
  }
];
  return (
    <section id="project" className="scroll-mt-28 bg-navy text-light-slate font-inter min-h-screen">
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
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

        return (
          <motion.div
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`relative flex flex-col ${
              isEven ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center md:items-start h-auto mb-0 md:mb-24`}
          >
            {/* Background Image */}
            {/* Desktop-only absolute image */}
            <div
              className={`group hidden md:block absolute cursor-pointer top-0 ${
                isEven ? 'md:left-0' : 'md:right-0'
              } w-auto h-auto rounded overflow-hidden z-0`}
            >
              <div className="absolute inset-0 bg-green-900 opacity-50 mix-blend-screen z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="h-[52vh] w-[80vh] object-cover opacity-60 mix-blend-lighten group-hover:opacity-100 transition duration-500 rounded object-center"
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
                      <a href={project.external} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 hover:text-[#64ffda] duration-500 transition" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Project
