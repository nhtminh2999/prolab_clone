import { forwardRef } from 'react'
import { motion } from "framer-motion"
import ContactForm from "./contact_form"

const ContactSection = forwardRef((_, ref) => {
  return (
    <section id='contact' ref={ref} className="relative pt-[100px] px-0 pb-[100px] lg:pt-[110px] lg:pb-[90px] overflow-hidden">
      <div className="container">
        <div className="mx-[-15px]">
          <div className="px-[15px]">
            <div className="text-center mb-[56px]">
              <h2 className="mb-[13px] text-[25px] leading-[35px] font-bold capitalize text-[#242424] lg:text-[40px] lg:leading-[50px]">
                Contact Us
              </h2>
              <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
                Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-y-[30px] mx-[-15px]">
          <div className="w-full gap-y-[30px] grid grid-cols-1 lg:grid-cols-3">
            <motion.div
              className="px-[15px]"
              initial={{ visibility: 'hidden', opacity: 0, x: -200 }}
              whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 60, duration: 1 }}
            >
              <div className="relative bg-white pt-[30px] px-[30px] pb-[22px] shadow-md">
                <div className="mb-[25px]">
                  <div className="box-icon text-center text-[30px] after:border-[#0250c5]">
                    <i className="fas fa-phone bg-main bg-clip-text text-transparent" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-base text-[#555] leading-[1.625]">+333 123 4565 7898</p>
                  <p className="text-base text-[#555] leading-[1.625]">+333 153 4575 7893</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="px-[15px]"
              initial={{ visibility: 'hidden', opacity: 0, y: 100 }}
              whileInView={{ visibility: 'visible', opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 60, duration: 1 }}
            >
              <div className="relative bg-white pt-[30px] px-[30px] pb-[22px] shadow-md">
                <div className="mb-[25px]">
                  <div className="box-icon text-center text-[30px] after:border-[#0250c5]">
                    <i className="fas fa-envelope bg-main bg-clip-text text-transparent" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-base text-[#555] leading-[1.625]">demoname@name.com</p>
                  <p className="text-base text-[#555] leading-[1.625]">anothername@name.com</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="px-[15px]"
              initial={{ visibility: 'hidden', opacity: 0, x: 200 }}
              whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 60, duration: 1 }}
            >
              <div className="relative bg-white pt-[30px] px-[30px] pb-[22px] shadow-md">
                <div className="mb-[25px]">
                  <div className="box-icon text-center text-[30px] after:border-[#0250c5]">
                    <i className="fas fa-map-marked-alt bg-main bg-clip-text text-transparent" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-base text-[#555] leading-[1.625]">
                    140 Berkley Street, Philadelphia, Pennsylvania
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full gap-y-[30px] grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              className="px-[15px]"
              initial={{ visibility: 'hidden', opacity: 0, x: -200 }}
              whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 60, duration: 1 }}
            >
              <div className="relative bg-white pt-[30px] px-[25px] py-[40px] shadow-lg">
                <ContactForm />
              </div>
            </motion.div>
            <motion.div
              className="px-[15px]"
              initial={{ visibility: 'hidden', opacity: 0, x: 200 }}
              whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 60, duration: 1 }}
            >
              <div className="relative bg-white h-full w-ful shadow-lg border-[10px] border-solid border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.787914417693!2d106.
                  71945375092317!3d10.827536111169792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                  1!3m3!1m2!1s0x31752930d4f0ef63%3A0xfeffcc189deddb5b!2zQ0dWIEdpZ2EgTWFsbCBUaOG7pyDEkOG7qWM!5e0!3m2!1svi!2s!4v1647844807927!5m2!1svi!2s"
                  style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen={true} loading="lazy"
                >
                </iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default ContactSection