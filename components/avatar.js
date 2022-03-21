import Image from 'next/image'

const Avatar = ({ imagePath, className, alt }) => {
  return (
    <div
      className={`absolute w-[60px] h-[60px] rounded-full border-4 border-solid border-white shadow-md ${className}`}
    >
      <Image
        layout='fill'
        src={imagePath}
        alt={alt}
        objectFit='scale-down'
        className='rounded-full'
      />
    </div>

  )
}

export default Avatar