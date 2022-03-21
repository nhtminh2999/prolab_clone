const Avatar = ({ imagePath, className, alt }) => {
  return (
    <img
      src={imagePath}
      className={`absolute w-[60px] h-[60px] rounded-full border-4 border-solid border-white shadow-md ${className}`}
      alt={alt}
    />
  )
}

export default Avatar