// import React from 'react'

const Email = () => {
  return (
    <>
        <div className="font-fira hidden md:flex fixed right-12 bottom-0 flex-col items-center gap-6 z-50">
        <a
        href="mailto:lintangbalakosa@gmail.com"
        className="text-light-slate text-[12px] hover:text-[#64ffda] transition transform hover:-translate-y-1 duration-300 font-[400] leading-[18px] tracking-[1.5px]"
        style={{ writingMode: 'vertical-rl' }}
        >
        lintangbalakosa@gmail.com
        </a>
        <div className="w-[1.2px] h-20 bg-light-slate mt-2" />
        </div>
    </>
  )
}

export default Email