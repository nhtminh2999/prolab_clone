
const FeedbackSwiperItem = ({ imagePath, name, title, feedback }) => {
  return (
    <div className='client'>
      <div className='client-image'>
        <img src={imagePath} alt={name} />
      </div>
      <p className='mb-[19px] text-base leading-[1.625] text-[#555]'>
        {feedback}
      </p>
      <h4 className="text-[20px] leading-[30px] font-semibold text-[#242424] mb-0 capitalize">
        {name}
      </h4>
      <h5 className='text-[#555] text-sm leading-6 mb-0 font-medium'>
        {title}
      </h5>
    </div>
  )
}

export default FeedbackSwiperItem