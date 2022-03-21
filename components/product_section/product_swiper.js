import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import ProductSwiperitem from './product_swiper_item';
import { productData } from '../../data/product.data';
import 'swiper/css/navigation';

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

const ProductSwiper = () => {
  return (
    <Swiper
      speed={1000}
      loop={true}
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay, Navigation]}
    >
      {productData.map(data => (
        <SwiperSlide key={data.id}>
          <ProductSwiperitem
            imagePath={data.imagePath}
            name={data.name}
            rating={data.rating}
            salePrice={data.salePrice}
            originalPrice={data.originalPrice}
          />
        </SwiperSlide>
      ))}
      <div className='flex justify-center mt-[40px]'>
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  )
}

export default ProductSwiper