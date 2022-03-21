import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import DealSwiperItem from "./deal_swiper_item";

const DealSwiper = () => {
  return (
    <Swiper
      speed={1000}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <DealSwiperItem
          imagePath='/mydrone3.png'
          name='Drone (Yellow)'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo reiciendis saepe molestias veritatis!'
          salePrice={99}
          originPrice={250}
          rating={4.5}
          endDate={new Date("2022-12-29T00:00:00")}
        />
      </SwiperSlide>
      <SwiperSlide>
        <DealSwiperItem
          imagePath='/mydrone4.png'
          name='Drone (Black)'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo reiciendis saepe molestias veritatis!'
          salePrice={99}
          originPrice={250}
          endDate={new Date("2022-12-29T00:00:00")}
        />
      </SwiperSlide>
      <SwiperSlide>
        <DealSwiperItem
          imagePath='/mydrone1.png'
          name='Drone (White)'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo reiciendis saepe molestias veritatis!'
          salePrice={99}
          originPrice={250}
          endDate={new Date("2022-12-29T00:00:00")}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default DealSwiper