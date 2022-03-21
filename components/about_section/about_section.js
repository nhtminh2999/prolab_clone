import { forwardRef } from "react"
import { motion } from "framer-motion"
import AboutCard from "./about_card"

const CameraIcon = () => {
  return <i className="fal fa-camera-alt" />
}

const ControllerIcon = () => {
  return <i className="fal fa-gamepad"></i>
}

const BatteryIcon = () => {
  return <i className="fal fa-battery-bolt"></i>
}

const AboutSection = forwardRef((_, ref) => {
  return (
    <section id="about" ref={ref} className="pt-[110px] px-[0] pb-[120px] relative">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="mb-6 text-[25px] leading-[35px] font-bold capitalize text-[#242424]
            lg:text-[40px] lg:leading-[50px]">
            Why Prolab Is Best
          </h2>
          <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
            Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3 overflow-hidden">
          <motion.div
            initial={{ visibility: 'hidden', opacity: 0, x: -200, y: 200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
            viewport={{ once: false }}
          >
            <AboutCard
              Icon={CameraIcon}
              title='4K Camera'
              desc='Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.'
            />
          </motion.div>
          <motion.div
            initial={{ visibility: 'hidden', opacity: 0, y: 200 }}
            whileInView={{ visibility: 'visible', opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
          >
            <AboutCard
              Icon={ControllerIcon}
              title='Control Panel'
              desc='Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.'
            />
          </motion.div>
          <motion.div
            initial={{ visibility: 'hidden', opacity: 0, x: 200, y: 200 }}
            whileInView={{ visibility: 'visible', opacity: 1, x: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, duration: 1 }}
          >
            <AboutCard
              Icon={BatteryIcon}
              title='Battery life'
              desc='Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.'
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default AboutSection