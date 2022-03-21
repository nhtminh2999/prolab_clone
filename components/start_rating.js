import { useState, useEffect, memo } from "react"

const StarRating = ({ className, color = '#f9bd22', rating = 5 }) => {
  const [stars, setStars] = useState(0);
  const [decimal, setDecimal] = useState(0);

  useEffect(() => {
    setStars(Math.floor(rating))
    setDecimal(rating - Math.floor(rating))
  }, [rating])

  return (
    <div className={`flex mb-[5px] ${className}`}>
      <div className={`inline-block text-[14px]`} style={{ color: color }}>
        {
          new Array(stars).fill(0).map((_, index) => (
            <i key={index} className="fas fa-star mr-1" />
          ))
        }
        {(decimal >= 0.5 && decimal < 1) && <i className="fas fa-star-half-alt mr-1" />}
        {
          new Array(Math.ceil(5 - stars - Math.round(decimal))).fill(0).map((_, index) => (
            <i key={`empty-star-${index}`} className="fal fa-star mr-1" />
          ))
        }
      </div>
    </div>
  )
}

export default memo(StarRating)