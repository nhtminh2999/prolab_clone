import { useState, useRef } from 'react'

const Collapse = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false)
  const childref = useRef(null)

  const handleExpand = () => {
    const ele = childref.current
    if (!ele) return

    if (expanded) {
      ele.style.height = 0
      setTimeout(() => ele.style.display = 'none', 300)
      setExpanded(false)
    } else {
      ele.style.display = 'block'
      const height = childref.current.scrollHeight
      ele.style.height = height + 'px'
      setExpanded(true)
    }
  }

  return (
    <div className='panel'>
      <div className='flex justify-between items-center py-[15px] pr-4 pl-5 cursor-pointer' onClick={handleExpand}>
        <h4 className='panel-title'>
          {title}
        </h4>
        {
          expanded
            ? <i className="fal fa-minus-circle block text-[22px] w-[22px] h-[22px] leading-[22px] text-[#555]" />
            : <i className="fal fa-plus-circle block text-[22px] w-[22px] h-[22px] leading-[22px] text-[#555]" />
        }
      </div>
      <div ref={childref} className='h-0 overflow-hidden transition-[height] duration-300 ease-in'>
        <div className='panel-body'>
          <p className='mb-4 text-base leading-[1.625] text-[#555]'>
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Collapse