const AboutCard = ({ Icon, title, desc }) => {
  return (
    <div
      className="relative z-[2] bg-[#F7F9FF] w-full pt-[27px] px-[25px] pb-[35px] transition-all duration-300 ease-in
        after:absolute after:content-[''] after:bottom-0 after:left-0 after:h-[4px] after:w-0 after:bg-main
        after:transition-[width] after:duration-300 after:ease-in
        hover:translate-y-[-5px] hover:shadow-2xl hover:after:w-full "
    >
      <div className="icon text-[55px] text-center">
        <Icon />
      </div>
      <h4 className="text-[20px] leading-[30px] font-semibold text-[#242424] mt-[9px] mb-[22px] text-center">
        {title}
      </h4>
      <p className="text-center text-[16px] text-[#555] leading-[1.625]">
        {desc}
      </p>
    </div>
  )
}

export default AboutCard