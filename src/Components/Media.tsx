// import React from 'react'
import { Github, Instagram, Twitter, Linkedin, Code } from 'lucide-react'

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/yourusername' },
  { icon: <Instagram size={18} />, href: 'https://instagram.com/yourusername' },
  { icon: <Twitter size={18} />, href: 'https://twitter.com/yourusername' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/yourusername' },
  { icon: <Code size={18} />, href: 'https://yourportfolio.com' },
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
          className="text-light-slate hover:text-green transition"
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