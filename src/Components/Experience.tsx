import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)
const scrollRef = useRef<HTMLDivElement | null>(null);

  const experiences = [
    {
      organization: 'Duta Anti Narkoba',
      role: 'Website Coordinator',
      date: 'November 2024 – Present',
      points: [
        'Led and organized a web development team, assigning responsibilities for key pages such as About Us and Events to ensure efficient workflow and clear ownership.',
        'Set up and maintained a collaborative GitHub repository, managing branches and pull requests to streamline team contributions and version control.',
        'Mentored team members in Tailwind CSS and React, providing guidance and hands-on support to enhance their frontend development skills.',
      ],
    },
    {
      organization: 'Starlight',
      role: 'Website Member',
      date: 'Jan 2025 – Present',
      points: [
        'Took charge of managing the division and was responsible for onboarding new members (referred to as Mini Gerda), ensuring a smooth integration into the team.',
        'Developed an interactive circular carousel with modal functionality, contributing to the organization\'s digital presence and improving user experience.',
        'Strengthened collaboration and communication skills through active participation in a team-based workflow and cross-functional discussions.',
      ],
    },
    {
      organization: 'PT AEI',
      role: 'Frontend Developer (Internship)',
      date: 'June 2023 - Oct 2023',
      points: [
        'Acquired Tailwind & Laravel experience by learning new things.',
        'Expanded front-end development expertise by proactively learning and implementing Tailwind CSS and Laravel frameworks to build responsive and efficient web applications.',
      ],
    },
    {
      organization: 'Digital Skola Bootcamp',
      role: 'Data Science Trainee – Batch 51',
      date: 'June 2025 – Present',
      points: [
        'Currently enrolled in a certified data science bootcamp as part of Batch 51, focused on building real-world skills in data analysis and machine learning.',
        'Learning key concepts including data wrangling, exploratory data analysis, and model building using Python and libraries such as pandas, matplotlib, seaborn, and scikit-learn.',
        'Preparing for a real internship component, with upcoming capstone projects designed to simulate industry-level business problems.',
      ],
    },
    {
      organization: 'Lab AI Workshop',
      role: 'Student Representative',
      date: 'March 2025 – Present',
      points: [
        'Introduce and present the AI Lab to prospective students and university visitors, explaining the lab’s research areas, projects, and opportunities.',
        'Help new students understand the role of AI in academic and practical contexts through guided tours and interactive discussions.',
        'Support community engagement by representing the lab at university events and outreach programs.',
      ],
    },
  ]

  return (
    <section id="experience" className="bg-navy text-light-slate font-inter h-[110vh] md:min-h-screen flex items-center">
      <div className="mx-auto max-w-3xl px-6 py-24 w-full flex flex-col justify-center">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-green text-[16px] font-[600] font-fira">02.</span>
          <h2 className="text-[26px] md:text-[32px] font-[600] text-lightest-slate">Experience</h2>
          <div className="flex-grow h-[0.5px] bg-lightest-navy mt-2" />
        </div>

        <div className="grid md:grid-cols-4 gap-y-8 gap-x-0 md:gap-x-8 md:gap-y-0 items-start">
          {/* Mobile Swiper Tabs */}
         <div className="relative block md:hidden col-span-4 w-full overflow-hidden">
            {/* Scrollable Tabs Container */}
            <div
              className="relative overflow-x-auto scroll-smooth border-b-2 border-lightest-navy"
              ref={scrollRef}
            >
              <Swiper
                spaceBetween={12}
                slidesPerView="auto"
                className="!overflow-visible w-full"
              >
                {experiences.map((exp, idx) => (
                  <SwiperSlide key={exp.organization} className="!w-auto">
                    <button
                      onClick={() => setActiveIndex(idx)}
                      className={`whitespace-nowrap px-4 py-2 font-mono text-[14px] leading-[20px] font-[400] border-b-2 transition-all ${
                        idx === activeIndex
                          ? 'text-green border-green bg-light-navy'
                          : 'text-slate border-transparent hover:bg-light-navy/30'
                      }`}
                    >
                      {exp.organization}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>



          {/* Desktop Sidebar Tabs */}
          <div className="hidden md:flex flex-col text-left border-l-2 border-lightest-navy">
            {experiences.map((exp, idx) => (
              <button
                key={exp.organization}
                onClick={() => setActiveIndex(idx)}
                className={`pl-4 py-2 font-mono text-sm text-left border-l-2 transition-all ${
                  idx === activeIndex
                    ? 'text-green border-green bg-light-navy'
                    : 'text-slate hover:bg-light-navy/30 border-transparent'
                }`}
              >
                {exp.organization}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div
            key={activeIndex}
            className="md:col-span-3 min-h-[300px] transition-opacity duration-500 ease-in-out opacity-100 animate-[fadeIn_0.4s_ease-in-out]"
            style={{ animation: 'fadeIn 0.4s ease-in-out' }}
          >
            <h3 className="text-[22px] md:text-xl leading-[28.6px] font-[500] text-lightest-slate">
              {experiences[activeIndex].role}{" "}
              <span className="text-green">@ {experiences[activeIndex].organization}</span>
            </h3>
            <p className="text-[14px] leading-[20px] font-[400] font-fira text-slate mt-1 mb-4">
              {experiences[activeIndex].date}
            </p>

            <ul className="flex flex-col gap-3 text-sm text-slate">
              {experiences[activeIndex].points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-green flex-shrink-0 mt-1" />
                  <span className='text-[14px] leading-[22px] font-[400]'>{point}</span>
                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
