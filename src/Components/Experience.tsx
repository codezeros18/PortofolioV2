import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
// @ts-ignore
import 'swiper/css'
import { motion, AnimatePresence,  useAnimation } from 'framer-motion'


const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [inView, controls])


  const experiences = [
  {
    organization: "Duta Anti Narkoba",
    role: "Website Coordinator",
    date: "Nov 2024 – Present",
    points: [
      "Coordinating the development of the official website with clear task delegation and workflow structure.",
      "Managing GitHub repository for version control, branches, and pull requests.",
      "Mentoring members in React and Tailwind to improve development efficiency and quality."
    ],
  },
  {
    organization: "Bisasinema",
    role: "Frontend Developer – Partnership Project",
    date: "Jun 2025 – Present",
    points: [
      "Built a responsive website to promote workshops, film productions, and creative events.",
      "Developed an admin panel to manage ticketing, media uploads, and event updates dynamically.",
      "Implemented structured content architecture to support scalable multimedia publishing."
    ],
  },
  {
    organization: "Starlight",
    role: "Website Team Member",
    date: "Jan 2025 – Nov 2025",
    points: [
      "Designed and developed an interactive circular carousel with modal support for showcasing content.",
      "Managed onboarding and guidance for new members (Mini Gerda), ensuring smooth workflow adoption.",
      "Improved collaboration through active involvement in cross-functional discussions and solutions."
    ],
  },
  {
    organization: "SurabayaDev",
    role: "3rd Place – Developer Battle 2025 (Data Analyst)",
    date: "Oct 2025",
    points: [
      "Analyzed hotel booking data to identify key drivers of revenue loss and cancellation rates.",
      "Created an interactive dashboard for actionable business insights and decision support.",
      "Presented clear storytelling and recommendations that impressed judges and achieved 3rd place."
    ],
  },
  {
    organization: "PT AEI",
    role: "Frontend Developer Intern",
    date: "Jun 2023 – Oct 2023",
    points: [
      "Developed responsive web interfaces using Laravel Blade & Tailwind CSS.",
      "Enhanced frontend skills by contributing to real product development and UI improvements."
    ],
  },
  {
    organization: "Digital Skola Bootcamp",
    role: "Data Science Trainee – Batch 51",
    date: "Jun 2025 – Oct 2025",
    points: [
      "Learning practical data analysis and machine learning including EDA, modeling, and reporting.",
      "Developing industry-oriented capstone projects and preparing for internship placement."
    ],
  },
  {
    organization: "AI Laboratory – University",
    role: "Student Representative",
    date: "Mar 2025 – Present",
    points: [
      "Introducing AI Lab projects and research areas to prospective students and visitors.",
      "Supporting outreach and community programs to increase engagement with AI initiatives."
    ],
  },
];


  return (
    <section id="experience" className="scroll-mt-[100px] md:scroll-mt-[120px] bg-navy text-light-slate font-inter py-24 flex items-start">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-6">
            <span className="text-green text-[18px] md:text-[20px] font-fira">02.</span>
            <h2 className="text-[24px] md:text-[26px] font-semibold text-lightest-slate">
              Experience
            </h2>
          <div className="flex-grow h-[0.5px] bg-lightest-navy mt-2" />
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.8, ease: 'easeOut' }}
         className="flex flex-col md:grid md:grid-cols-4 gap-y-10 gap-x-8 items-start md:items-start w-full">
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
                      className={`whitespace-nowrap px-4 py-2 font-fira text-[14px] leading-[20px] font-[400] border-b-2 transition-all ${
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
          <div className="hidden md:flex flex-col border-l border-lightest-navy">
            {experiences.map((exp, idx) => (
              <button
                key={exp.organization}
                onClick={() => setActiveIndex(idx)}
                className={`relative pl-6 pr-4 py-3 font-fira text-[13px] text-left transition-colors cursor-pointer duration-300 ease-in-out
                  ${
                    idx === activeIndex
                      ? 'text-green'
                      : 'text-slate hover:text-green'
                  }`}
              >
                {/* Animated vertical line */}
                <span
                  className={`absolute left-0 top-0 h-full w-[2px] bg-green transition-all duration-300 ${
                    idx === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {exp.organization}
              </button>
            ))}
          </div>


          {/* Content Area */}
          {/* Content Area with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="md:col-span-3 min-h-[300px]"
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
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
