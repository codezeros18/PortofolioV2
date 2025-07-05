// // import React from 'react'
// import { Star } from 'lucide-react'
import { Github, Instagram, Twitter, Linkedin, Code } from 'lucide-react'

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/yourusername' },
  { icon: <Instagram size={18} />, href: 'https://instagram.com/yourusername' },
  { icon: <Twitter size={18} />, href: 'https://twitter.com/yourusername' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/yourusername' },
  { icon: <Code size={18} />, href: 'https://yourportfolio.com' },
]

const Footer = () => {
  return (
    <>
      <section
        id="experience"
        className="bg-navy text-light-slate font-inter h-[14vh] md:h-[10vh] flex items-center"
      >
        <div className="mx-auto md:max-w-2xl lg:max-w-3xl px-6 w-full flex flex-col justify-center items-center">
          
          {/* Social Icons - Positioned at Top */}
          <div className="flex md:hidden flex-row justify-center items-center gap-x-8 mb-6">
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
          </div>

          {/* Text + Stars */}
          <h4 className="text-light-slate text-[12px] leading-[12px] font-[400] font-fira text-center">
            Developed by Lintang Balakosa Ardhana
          </h4>
        </div>
      </section>

    </>
  )
}

export default Footer