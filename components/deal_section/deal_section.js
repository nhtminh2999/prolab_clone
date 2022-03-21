import { motion } from 'framer-motion'
import DealSwiper from "./deal_swiper"

const DealSection = () => {
  return (
    <section className="relative pt-[110px] px-0 pb-[83px] bg-[#F7F9FF]">
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
            <div className="text-center mb-[56px]">
              <h2 className="mb-[13px] text-[25px] leading-[35px] font-bold capitalize text-[#242424] lg:text-[40px] lg:leading-[50px]">
                Deal Of The Week
              </h2>
              <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
                Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          className="max-w-[100%] lg:max-w-[83.333333%] bg-white rounded-[3px] p-10 shadow-lg mx-auto overflow-hidden"
          initial={{ visibility: 'hidden', opacity: 0, y: 200 }}
          whileInView={{ visibility: 'visible', opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, duration: 1 }}
        >
          <DealSwiper />
        </motion.div>
      </div>
    </section>
  )
}

export default DealSection