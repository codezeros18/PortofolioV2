// import React from 'react'
import { Github, Instagram, Twitter, Linkedin} from 'lucide-react'

const socials = [
  { icon: <Github size={22} />, href: 'https://github.com/codezeros18' },
  { icon: <Instagram size={22} />, href: 'https://www.instagram.com/lintangbalakosaa/' },
  { icon: <Twitter size={22} />, href: 'https://x.com/codeee181' },
  { icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/lintang-balakosa-7ab072325/' },
]

const Media = () => {
  return (
    <>
      <div className="hidden md:flex fixed left-12 bottom-0 flex-col items-center gap-6 z-50">
      {socials.map(({ icon, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-light-slate hover:text-[#64ffda] transition transform hover:-translate-y-1 duration-300"
        >
          {icon}
        </a>

      ))}
      {/* Vertical line */}
      <div className="w-[1.25px] h-20 bg-light-slate mt-2" />
    </div>
    </>
  )
}

export default Media