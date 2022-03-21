import { forwardRef } from "react"
import { motion } from "framer-motion"
import Avatar from "../avatar"
import FeedbackSwiper from "./feedback_swiper"

const FeedBackSection = forwardRef((_, ref) => {
  return (
    <section id="feedback" ref={ref} className="relative pt-[110px] px-0 pb-[83px] bg-[#F7F9FF]">
      <div className='absolute left-0 top-0 w-full
        before:absolute before:left-0 before:top-0 before:border-solid before:w-0 before:h-0
        before:border-r-[30vw] before:border-r-transparent 
        before:border-t-[50px] before:lg:border-t-[80px] before:border-t-white
        after:absolute after:right-0 after:top-0 after:border-solid after:w-0 after:h-0
        after:border-l-[70vw] after:border-l-transparent 
        after:border-t-[50px] after:lg:border-t-[80px] after:border-t-white'
      />
      <div className='absolute left-0 bottom-0 w-full
        before:absolute before:left-0 before:bottom-0 before:border-solid before:w-0 before:h-0
        before:border-r-[70vw] before:border-r-transparent 
        before:border-b-[50px] before:lg:border-b-[80px] before:border-b-white
        after:absolute after:right-0 after:bottom-0 after:border-solid after:w-0 after:h-0
        after:border-l-[30vw] after:border-l-transparent 
        after:border-b-[50px] after:lg:border-b-[80px] after:border-b-white'
      />
      <div className="container">
        <div className="mx-[-15px]">
          <div className="px-[15px]">
            <div className="text-center mb-[50px]">
              <h2 className="mb-6 text-[25px] leading-[35px] font-bold capitalize text-[#242424] lg:text-[40px] lg:leading-[50px]">
                Our Clients Say
              </h2>
              <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
                Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mx-[-15px] justify-center overflow-hidden">
          <motion.div
            className='px-[15px] max-w-full md:max-w-[83.333333%] xl:max-w-[58.333333%] mx-auto'
            initial={{ visibility: 'hidden', opacity: 0, y: 200 }}
            whileInView={{ visibility: 'visible', opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
          >
            <div className="relative">
              <Avatar
                imagePath='/client1.jpg'
                className='left-[-70px] top-[67px] xl:left-[-110px] animate-[zoom-in-out_3.1s_linear_infinite]'
                alt='client-1'
              />
              <Avatar
                imagePath='/client2.jpg'
                className='w-[75px] h-[75px] left-[-70px] top-[160px] xl:left-[-200px] animate-[zoom-in-out_3.5s_linear_infinite]'
                alt='client-2'
              />
              <Avatar
                imagePath='/client1.jpg'
                className='top-[270px] xl:left-[-110px] left-[-70px] animate-[zoom-in-out_3.2s_linear_infinite]'
                alt='client-1'
              />
              <Avatar
                imagePath='/client2.jpg'
                className='top-[67px] xl:right-[-110px] right-[-70px] animate-[zoom-in-out_3.2s_linear_infinite]'
                alt='client-1'
              />
              <Avatar
                imagePath='/client1.jpg'
                className='w-[75px] h-[75px] top-[160px] xl:right-[-200px] right-[-70px] animate-[zoom-in-out_3.5s_linear_infinite]'
                alt='client-2'
              />
              <Avatar
                imagePath='/client2.jpg'
                className='top-[270px] right-[-70px] xl:right-[-110px] animate-[zoom-in-out_3.1s_linear_infinite]'
                alt='client-1'
              />
            </div>
            <FeedbackSwiper />
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default FeedBackSection