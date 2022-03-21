import { motion } from "framer-motion"

const Item = ({ icon, title, desc }) => {
  return (
    <div className="cursor-pointer px-[15px]">
      <div className="icon mb-[14px]">
        <i className={`${icon} text-[55px] leading-[65px]`} />
      </div>
      <h4 className="text-[20px] leading-[30px] font-semibold text-[#242424] mb-[5px] lg:text-[24px] lg:leading-[34px]">
        {title}
      </h4>
      <p className="mb-4 text-base leading-[26px] text-[#555] lg:text-justify">
        {desc}
      </p>
    </div>
  )
}

const ThirdSection = () => {
  return (
    <section className="relative pt-[110px] px-0 pb-[83px] bg-[#F7F9FF]">
      <div className='absolute left-0 top-0 w-full
        before:absolute before:left-0 before:top-0 before:border-solid before:w-0 before:h-0
        before:border-r-[30vw] before:border-r-transparent 
        before:border-t-[50px] before:lg:border-t-[80px] before:border-t-white
        after:absolute after:right-0 after:top-0 after:border-solid after:w-0 after:h-0
        after:border-l-[70vw] after:border-l-transparent 
        after:border-t-[50px] after:lg:border-t-[80px] after:border-t-white'
      ></div>
      <div className='absolute left-0 bottom-0 w-full
        before:absolute before:left-0 before:bottom-0 before:border-solid before:w-0 before:h-0
        before:border-r-[70vw] before:border-r-transparent 
        before:border-b-[50px] before:lg:border-b-[80px] before:border-b-white
        after:absolute after:right-0 after:bottom-0 after:border-solid after:w-0 after:h-0
        after:border-l-[30vw] after:border-l-transparent 
        after:border-b-[50px] after:lg:border-b-[80px] after:border-b-white'
      ></div>
      <div className="container">
        <div className="mb-[55px] grid lg:grid-cols-2 gap-30px overflow-hidden">
          <motion.div
            initial={{ visibility: 'hidden', opacity: 0, x: -200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
            className='order-last lg:order-first'
          >
            <h2 className="text-[25px] leading-[35px] font-bold mb-[23px] block text-[#242424] 
              md:text-[34px] md:leading-[43px] lg:text-[40px] lg:leading-[50px]">
              A Drone Can Make Your Life Easy and Fast.
            </h2>
            <div className="mt-[59px] mb-4 grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-[-15px]">
              <Item icon='fal fa-broadcast-tower'
                title='Powerful Antenna'
                desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              />
              <Item icon='fal fa-mobile-alt'
                title='3-axis stablization'
                desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              />
              <Item icon='fal fa-camera-alt'
                title='4K / 1080P video capture'
                desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              />
              <Item icon='fal fa-expand-wide'
                title='Wide angle lens'
                desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              />
            </div>
          </motion.div>
          <div className='relative text-center px-[30px] md:p-0 self-center'>
            <motion.img
              animate={{ y: [15, -15, 15] }}
              transition={{ ease: "linear", duration: 5, repeat: Infinity }}
              src='/mydrone3.png'
              className='relative max-w-full w-auto text-center mx-auto mb-11 lg:mb-0'
            />
          </div>
        </div>
        <div className="mb-[55px] grid lg:grid-cols-2 gap-30px overflow-hidden">
          <motion.div
            initial={{ visibility: 'hidden', opacity: 0, x: 200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}

          >
            <h2 className="text-[25px] leading-[35px] font-bold mb-[23px] block text-[#242424] 
              md:text-[34px] md:leading-[43px] lg:text-[40px] lg:leading-[50px]">
              A Drone Can Make Your Life Easy and Fast.
            </h2>
            <div className="mt-[59px] mb-4 grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-[-15px]">
              <Item icon='fal fa-broadcast-tower'
                title='Powerful Antenna'
                desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              />
              <Item icon='fal fa-mobile-alt'
                title='3-axis stablization'
                desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              />
              <Item icon='fal fa-camera-alt'
                title='4K / 1080P video capture'
                desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              />
              <Item icon='fal fa-expand-wide'
                title='Wide angle lens'
                desc='New had happen unable uneasy. Drawings pronounce can be followed improved out.'
              />
            </div>
          </motion.div>
          <div className='relative text-center px-[30px] md:p-0 self-center order-first'>
            <motion.img
              animate={{ y: [15, -15, 15] }}
              transition={{ ease: "linear", duration: 5, repeat: Infinity }}
              src='/mydrone5.png'
              alt="drone-5"
              className='relative max-w-full w-auto text-center mx-auto mb-11 lg:mb-0'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection