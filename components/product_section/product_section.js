import { forwardRef } from "react"
import { motion } from "framer-motion"
import ProductSwiper from "./product_swiper"

const ProductSection = forwardRef((_, ref) => {
  return (
    <section id='product' ref={ref} className="relative pt-[100px] px-0 pb-[120px]">
      <div className="container">
        <div className="mx-[-15px]">
          <div className="px-[15px]">
            <div className="text-center mb-[56px]">
              <h2 className="mb-[13px] text-[25px] leading-[35px] font-bold capitalize text-[#242424] lg:text-[40px] lg:leading-[50px]">
                Our Awesome Products
              </h2>
              <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
                Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ visibility: 'hidden', opacity: 0, y: 200 }}
          whileInView={{ visibility: 'visible', opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, duration: 1 }}
        >
          <ProductSwiper />
        </motion.div>
      </div>
    </section>
  )
})

export default ProductSection