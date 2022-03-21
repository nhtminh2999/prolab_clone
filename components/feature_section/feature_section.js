import Image from 'next/image'
import { forwardRef } from "react"
import { motion } from "framer-motion"

const Item = ({ icon, title, desc, reverse = false }) => {
  return (
    <div className="flex flex-nowrap bg-white mb-[30px]">
      <div className={`${reverse ? 'text-right' : 'text-left'}`}>
        <h4 className="text-[20px] leading-[30px] font-semibold text-[#242424] mb-2 lg:text-[24px] lg:leading-[34px]">
          {title}
        </h4>
        <p className="mb-2 text-base leading-[26px] text-[#555]">
          {desc}
        </p>
      </div>
      <div className={`flex ${reverse ? 'order-last' : 'order-first'}`}>
        <div className={`icon self-center mr-0 w-[70px] h-[70px] leading-[70px] text-[55px]
          ${reverse ? 'ml-[20px]' : 'mr-[20px]'}`}
        >
          <i className={`${icon}`} />
        </div>
      </div>
    </div>
  )
}

const FeatureSection = forwardRef((_, ref) => {
  return (
    <section id='feature' ref={ref} className="relative pt-[100px] px-0 pb-[88px] lg:pt-[110px] lg:pb-[95px]">
      <div className="container">
        <div className="mx-[-15px]">
          <div className="px-[15px]">
            <div className="text-center mb-[47px]">
              <h2 className="mb-[13px] text-[25px] leading-[35px] font-bold capitalize text-[#242424] lg:text-[40px] lg:leading-[50px]">
                Attractive Features
              </h2>
              <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
                Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-y-[30px] overflow-hidden mx-[-15px]">
          <motion.div
            className="px-[15px]"
            initial={{ visibility: 'hidden', opacity: 0, x: -200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
          >
            <Item
              title='4K Camera'
              desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              icon='fal fa-camera-alt'
              reverse={true}
            />
            <Item
              title='Control Panel'
              desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              icon='fal fa-gamepad'
              reverse={true}
            />
            <Item
              title='Battery life'
              desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              icon='fal fa-battery-bolt'
              reverse={true}
            />
          </motion.div>
          <div className="flex px-[15px] pt-[55%] lg:py-0 items-center justify-center relative">
            <div>
              <Image
                layout='fill'
                src='/drone2.jpg'
                alt='drone-2'
                objectFit='scale-down'
              />
            </div>
          </div>
          <motion.div
            className="px-[15px]"
            initial={{ visibility: 'hidden', opacity: 0, x: 200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
          >
            <Item
              title='Antenna'
              desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              icon='fal fa-broadcast-tower'
            />
            <Item
              title='Wide angle'
              desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              icon='fal fa-mobile-alt'
            />
            <Item
              title='Stablization'
              desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              icon='fal fa-camera-alt'
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default FeatureSection