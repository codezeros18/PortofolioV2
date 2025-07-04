// import React from 'react'
import { Star } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <section id="experience" className="bg-navy text-light-slate font-inter h-[10vh] flex items-center">
        <div className="mx-auto md:max-w-2xl lg:max-w-3xl px-6 w-full flex flex-col justify-center items-center">
          <h4 className="text-light-slate text-[12px] leading-[12px] font-[400] font-fira pb-2">Developed & Built by Lintang Balakosa Ardhana</h4>
          <div className='flex flex-row gap-x-2'>
            <Star className="text-green mt-2 w-4 h-4 animate-pulse" />
            <Star className="text-green mt-2 w-4 h-4 animate-pulse" />
            <Star className="text-green mt-2 w-4 h-4 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer