import { forwardRef } from "react"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Collapse from "../collapse"

const FaqSection = forwardRef((_, ref) => {
  return (
    <section id="faq" ref={ref} className="relative pt-[100px] px-0 pb-[100px] bg-[#F7F9FF] lg:pt-[110px]">
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
              <h2 className="mb-6 text-[25px] leading-[35px] font-bold capitalize text-[#242424] lg:text-[40px] lg:leading-[50px]">
                Asked Questions
              </h2>
              <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
                Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
              </p>
            </div>
          </div>
        </div>
        <div className="grid mx-[-15px] gap-y-[30px] grid-cols-1 overflow-hidden lg:grid-cols-2">
          <motion.div
            className="px-[15px]"
            initial={{ visibility: 'hidden', opacity: 0, x: -200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
          >
            <Collapse
              title='How can I order my favourate product ?'
              content="
                Wicket branch to answer do we. Place are decay men hours tiled. 
                If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood
              "
            />
            <Collapse
              title='How can I complete the order with payment ?'
              content="
                Wicket branch to answer do we. Place are decay men hours tiled. 
                If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood
              "
            />
            <Collapse
              title='Which payments options are available ?'
              content="
                Wicket branch to answer do we. Place are decay men hours tiled. 
                If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood
              "
            />
            <Collapse
              title='How can I get refund for return products ?'
              content="
                Wicket branch to answer do we. Place are decay men hours tiled. 
                If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood
              "
            />
            <Collapse
              title='How can I be confident of the quality ?'
              content="
                Wicket branch to answer do we. Place are decay men hours tiled. 
                If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood
              "
            />
          </motion.div>
          <motion.div
            className="px-[15px] flex items-center"
            initial={{ visibility: 'hidden', opacity: 0, x: 200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
          >
            <div>
              <Image
                src="/faq2.png"
                layout='intrinsic'
                width={1920}
                height={1080}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default FaqSection