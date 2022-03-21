import Image from 'next/image'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const HeroSection = forwardRef((_, ref) => {
  return (
    <section id='home' ref={ref}
      className='relative pt-[189px] pb-[122px] md:pt-[185px] md:pb-[118px]'
    >
      <Image
        layout='fill'
        src='/heroarea.jpg'
        alt='hero-area'
        objectFit='cover'
      />
      <div className='absolute left-0 bottom-0 w-full
        before:absolute before:left-0 before:bottom-0 before:border-solid before:w-0 before:h-0
        before:border-r-[50vw] before:border-r-transparent 
        before:border-b-[80px] before:lg:border-b-[200px] before:xl:border-b-[300px] before:border-b-white
        after:absolute after:right-0 after:bottom-0 after:border-solid after:w-0 after:h-0
        after:border-l-[50vw] after:border-l-transparent 
        after:border-b-[80px] after:lg:border-b-[200px] after:xl:border-b-[300px] after:border-b-white'
      >
      </div>
      <div className="container">
        <div className='flex flex-wrap justify-center mx-[-15px] gap-y-[30px]'>
          <div className='basis-full w-full lg:basis-[50%] lg:max-w-[50%] px-[15px]'>
            <div className='relative text-center px-[30px] md:p-0'>
              <motion.img
                animate={{ y: [15, -15, 15] }}
                transition={{ ease: "linear", duration: 5, repeat: Infinity }}
                src='/mydrone1.png'
                className='relative max-w-full w-auto text-center mx-auto
                  lg:absolute lg:top-[50px] lg:left-auto lg:right-[30px] md:max-w-[450px] xl:max-w-[600px]'
              />
            </div>
          </div>
          <div className='relative z-[2] basis-full w-full lg:basis-[50%] lg:max-w-[50%] px-[15px]'>
            <h1 className='mb-2 text-[30px] leading-[42px] font-bold text-white md:text-[48px] md:leading-[58px] xl:text-[56px] xl:leading-[66px] '>
              Best quality Drone for your daily life
            </h1>
            <p className='text-[18px] leading-[28px] mt-[26px] text-white'>
              Effects present letters inquiry no an removed or friends.
              Desire behind latter me though in. Supposing shameless am engrossed itatibus additions.
            </p>
            <div className='mt-[42px] pr-[15px]'>
              <button className='btn'>
                <span className='relative z-[2]'>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default HeroSection