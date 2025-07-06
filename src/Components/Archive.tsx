import {Github, FolderGit2 } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
     {
    title: 'Library System',
    description:
        'A full-featured library management system for admins to manage users, set return deadlines, and ban overdue users. Includes book borrowing, returning, and user tracking functionality.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'XAMPP'],
    github: 'https://github.com/codezeros18/app-15-ukk',
    },
    {
    title: 'Mini Games',
    description:
        'A collection of simple browser-based games including Rock Paper Scissors against a bot and a responsive Tic Tac Toe, built for fun and practice in React.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/codezeros18/myself',
    },
    {
    title: 'Simple Spotify',
    description:
        'A Mobile minimal music streaming UI clone inspired by Spotify, featuring animated video backgrounds, interactive song cards, and basic playback controls with skip/back support.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/codezeros18/spotify',
    },
]

const Archive = () => {
  return (
    <section
      id="archive"
      className="scroll-mt-28 bg-navy text-light-slate font-inter min-h-screen py-20 md:py-40"
    >
      <div className="md:max-w-2xl lg:max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-2xl font-semibold text-lightest-slate">
            Other Noteworthy Projects
          </h2>
          <a
            href="https://github.com/codezeros18/"
            className="mt-2 text-green text-sm font-mono hover:underline"
          >
            view the archive
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}

              className="bg-light-navy hover:-translate-y-2 hover:shadow-lg transition duration-300 rounded cursor-pointer py-8 px-6 md:py-10 md:px-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <FolderGit2 className="text-green" size={24} />
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 hover:text-[#64ffda] duration-500 transition" />
                  </a>
                  </div>
                </div>
                <h3 className="text-[20px] font-[600] hover:text-[#64ffda] transition duration-500 tracking-tight leading-[24.2px] text-lightest-slate my-4 pt-4">
                  {project.title}
                </h3>
                <p className="text-sm text-slate mb-4">{project.description}</p>
              </div>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-slate mt-4">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Archive
