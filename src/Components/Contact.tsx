// import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
        <section id="contact" className="bg-navy text-light-slate font-inter h-[70vh] md:h-[80vh] lg:h-[80vh] flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto md:max-w-2xl lg:max-w-3xl px-6 py-24 w-full flex flex-col justify-center items-center">
            {/* Section Heading */}
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="text-green text-[16px] font-[400] font-fira">04.</span>
              <h2 className="text-green text-[16px] font-[400] font-fira leading-[17.6px] text-lightest-slate">What's Next?</h2>
            </div>
            <h1 className="text-[40px] text-center tracking-tight md:text-[60px] font-[600] leading-[44px] md:leading-[66px] text-lightest-slate">Get In Touch</h1>
            <p className="text-slate text-[18px] text-center tracking-tight md:text-[20px] max-w-2xl leading-[23px] md:leading-[26px] my-4">
              I’m always open to new opportunities, collaborations, or simply a friendly chat.
              Whether you have a project in mind or just want to say hi — I’d love to hear from you.
            </p>

            <div className="mt-6">
              <a
                href="mailto:lintangbalakosa@gmail.com"
                className="font-fira inline-block border border-green text-green rounded px-6 py-5 text-[14px] leading-[14px] font-[500] hover:bg-green/10 transition"
                >
                Say Hello
              </a>
            </div>
          </motion.div>
        </section>
    </>
  )
}

export default Contact