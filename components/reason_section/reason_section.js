import Image from 'next/image'
import { motion } from "framer-motion"
import VideoModal from "../video_modal"

const ReasonSection = () => {
  return (
    <section id='reason' className="relative pt-[110px] px-0 pb-[90px] bg-[#F7F9FF]">
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
              <h2 className="mb-[24px] text-[25px] leading-[35px] font-bold capitalize text-[#242424] lg:text-[40px] lg:leading-[50px]">
                Why Choose Us
              </h2>
              <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
                Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2 overflow-hidden">
          <motion.div
            className="relative py-[243px] w-full h-full rounded-[5px] 
              after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full
              after:bg-main after:opacity-50 lg:p-0"
            initial={{ visibility: 'hidden', opacity: 0, x: -200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
          >
            <Image
              layout='fill'
              src='/video.jpg'
              alt='logo'
              objectFit='cover'
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2]">
              <VideoModal />
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-x-[30px]"
            initial={{ visibility: 'hidden', opacity: 0, x: 200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
          >
            <div className="flex gap-y-[30px] flex-col">
              <div className="reason-box bg-[#0250c5] w-full">
                <div className="box-icon">
                  <i className="fal fa-certificate text-white" />
                </div>
                <h5 className="text-white">
                  1 Year Guarantee
                </h5>
              </div>
              <div className="reason-box w-full">
                <div className="box-icon after:border-[#d43f8d]">
                  <i className="fal fa-undo bg-main bg-clip-text text-transparent" />
                </div>
                <h5 className="text-black">
                  Product Return
                </h5>
              </div>
            </div>
            <div className="flex gap-y-[30px] flex-col">
              <div className="reason-box w-full mt-[30px]">
                <div className="box-icon after:border-[#0250c5]">
                  <i className="fal fa-shipping-fast bg-main bg-clip-text text-transparent" />
                </div>
                <h5 className="text-black">
                  Free Shipping
                </h5>
              </div>
              <div className="reason-box w-full bg-[#d43f8d]">
                <div className="box-icon after:border-white">
                  <i className="fal fa-user-headset text-white" />
                </div>
                <h5 className="text-white">
                  Dedicated Support
                </h5>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ReasonSection