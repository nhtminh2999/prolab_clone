import CountDown from "../countdown"
import StarRating from "../start_rating"

const DealSwiperItem = ({ imagePath, name, desc, salePrice, originPrice, endDate, rating = 5 }) => {
  return (
    <div className="grid grid-cols-1 gap-y-[30px] lg:grid-cols-2 mx-[-15px]">
      <div className="flex px-[15px] items-center justify-center">
        <div>
          <img src={imagePath} alt={name} />
        </div>
      </div>
      <div className="px-[15px]">
        <StarRating rating={rating} />
        <h4 className="text-[20px] leading-[30px] font-semibold text-[#242424] mb-[9px] lg:text-[24px] lg:leading-[34px]">
          {name}
        </h4>
        <p className="mb-4 text-base leading-[26px] text-[#555]">
          {desc}
        </p>
        <p className="mt-[25px] mb-4">
          <span className="text-[30px] leading-[30px] font-black bg-main bg-clip-text text-transparent">
            ${salePrice}
          </span>
          <del className="text-[18px] leading-[18px] font-semibold ml-[10px] text-[#555]">
            ${originPrice}
          </del>
        </p>
        <div>
          <CountDown endDate={endDate} className='mt-[10px]' />
        </div>
        <div className="mt-[30px]">
          <button className="btn btn-secondary">
            <span className="relative z-[2]">buy now</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DealSwiperItem