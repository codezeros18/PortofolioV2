// import React from 'react'
// @ts-ignore
import { HashLink } from 'react-router-hash-link'


const Header = () => {
  return (
    <section className="font-inter bg-navy text-light-slate min-h-[110vh] flex items-center">
      <div className="max-w-7xl md:mx-24 lg:mx-auto px-8 py-24 flex flex-col gap-6">
        <p className="font-fira text-green text-[16px] font-[400] leading-[6px]  md:leading-[18px]">Hi, my name is</p>

        <h1 className="text-[40px] tracking-tight md:text-[80px] font-[600] leading-[44px] md:leading-[88px] text-lightest-slate">
          Lintang Balakosa Ardhana
        </h1>

        <h2 className="text-[40px] tracking-tight md:text-[80px] font-[600] leading-[36px] md:leading-[72px] text-slate">
          I build things with code
        </h2>

        <p className="text-[16px] tracking-tight md:text-[18px] max-w-[500px] leading-[23px] md:leading-[26px] text-slate mt-4">
          I’m a developer shifting into data science. Blending my web background with data, I’m exploring creative and analytical problem-solving through my studies.
        </p>
       <div className="mt-6">
  <HashLink
    smooth
    to="#about"
    className="inline-flex items-center justify-center border border-green text-green rounded px-8 py-4 text-[14px] leading-[17px] font-mono transition-all duration-300 ease-in-out hover:scale-[1.03] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_0_#64ffda]"
  >
    Know me better!
  </HashLink>
</div>

      </div>
    </section>
  )
}

export default Header
