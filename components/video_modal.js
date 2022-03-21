import { useState, useEffect } from 'react'
import Portal from './portal'

const VideoModal = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
  }

  const handleEscapePress = (e) => {
    if (e.keyCode !== 27) return

    closeModal()
  }

  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden'
    else document.body.style.removeProperty('overflow')

    return () => document.body.style.removeProperty('overflow')
  }, [visible])

  useEffect(() => {
    if (visible) window.addEventListener('keydown', handleEscapePress)
    else window.removeEventListener('keydown', handleEscapePress)

    return () => {
      window.removeEventListener('keydown', handleEscapePress)
    }
  }, [visible, handleEscapePress])

  return (
    <>
      <div
        onClick={showModal}
        className="icon w-[70px] h-[70px] leading-[72px] relative
        bg-white rounded-full text-center text-[26px] cursor-pointer
          before:absolute before:content-[''] before:w-full before:h-full 
          before:top-0 before:left-0 before:animate-pulse-border
          before:rounded-full before:bg-white before:z-[-1]"
      >
        <i className="fas fa-play leading-[inherit]" />
      </div>
      {visible && (
        <Portal>
          <div
            onClick={closeModal}
            className='fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10 
              overflow-hidden bg-[#0b0b0b] opacity-80'
          >
          </div>
          <div className='fixed w-full max-w-[900px] h-[50%] top-[50%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex justify-end bg-transparent'>
              <button className='text-white-800 text-2xl' onClick={closeModal}>
                ×
              </button>
            </div>
            <iframe className="relative w-full h-full bg-black z-30 block"
              src="//www.youtube.com/embed/4DCTTrGjGU4?autoplay=1" allowFullScreen={true}
            />
          </div>
        </Portal>
      )}
    </>
  )
}

export default VideoModal