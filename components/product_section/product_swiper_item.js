import Image from 'next/image'
import StartRating from '../start_rating';

const ProductSwiperitem = ({ imagePath, name, rating = 5, salePrice = 0, originalPrice = 0 }) => {
  return (
    <div className="bg-[#0250c50d] text-center group">
      <div className="flex justify-center items-center relative bg-[#d43f8d1a] py-0 px-[30px] h-[250px] overflow-hidden
            lg:pt-[30px] lg:pb-[24px]"
      >
        <Image
          layout='fill'
          src={imagePath}
          alt={name}
          objectFit='contain'
        />
        {/* <img src={imagePath} alt={name} /> */}
        <div className='flex justify-center items-center absolute top-full left-0 w-full h-full bg-black-500 transition-[top] duration-300 ease-in
          group-hover:top-0'>
          <button className='btn bg-white-800 text-black hover:text-white'>
            <span className='relative z-[2]'>Buy Now</span>
          </button>
        </div>
      </div>
      <div className="py-[25px] px-[27px]">
        <StartRating color="#56eb00" rating={rating} className='mb-[10px] justify-center' />
        <p className="mt-[25px] mb-4">
          <span className="text-[30px] leading-[30px] font-black bg-main bg-clip-text text-transparent">
            ${salePrice}
          </span>
          <del className="text-[18px] leading-[18px] font-semibold ml-[10px] text-[#555]">
            ${originalPrice}
          </del>
        </p>
        <h4 className="text-[20px] leading-[30px] font-semibold text-[#242424] mb-[9px] lg:text-[24px] lg:leading-[34px]">
          {name}
        </h4>
      </div>
    </div>
  )
}

export default ProductSwiperitem