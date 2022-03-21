import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Autoplay, EffectFade } from "swiper"
import FeedbackSwiperItem from "./feedback_swiper_item"
import "swiper/css/effect-fade"

const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slidePrev()}
      className='w-10 h-10 bg-[#0250c50d] inline-block mx-[5px] 
        text-[22px] text-[#242424] leading-[41px] text-center rounded-[50%] 
        transition-colors ease-in duration-300
        hover:cursor-pointer hover:text-white hover:bg-[#0250c5]'
    >
      <i className='fa fa-angle-left' />
    </div>
  )
}

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slideNext()}
      className='w-10 h-10 bg-[#0250c50d] inline-block mx-[5px] 
        text-[22px] text-[#242424] leading-[41px] text-center rounded-[50%] 
        transition-colors ease-in duration-300
        hover:cursor-pointer hover:text-white hover:bg-[#0250c5]'
    >
      <i className='fa fa-angle-right' />
    </div>
  )
}

const FeedbackSwiper = () => {
  return (
    <Swiper
      speed={1000}
      loop={true}
      effect='fade'
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      modules={[Autoplay, EffectFade]}
    >
      <SwiperSlide>
        <FeedbackSwiperItem
          imagePath='/client1.jpg'
          name='Natha Roy'
          title='CEO of Apple'
          feedback='Do play they miss give so up. Words to up style of since world. Way own uncommonly travelling now
            acceptance bed compliment solicitude. We leaf to snug on no need.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <FeedbackSwiperItem
          imagePath='/client2.jpg'
          name='Natasha Li'
          title='CEO of Facebook'
          feedback='Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. 
            Way own uncommonly travelling now acceptance bed compliment solicitude.'
        />
      </SwiperSlide>
      <div className='flex justify-center -mt-6 relative z-[2]'>
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  )
}

export default FeedbackSwiper