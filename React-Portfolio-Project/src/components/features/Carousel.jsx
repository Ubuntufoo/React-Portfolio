//
import { useState } from 'react'
// import { PiArrowFatLinesDownFill, PiArrowFatLinesUpFill } from 'react-icons/pi'

export default function Carousel({
  images,
  currentIndex: propCurrentIndex,
  setCurrentIndex: propSetCurrentIndex,
  children,
}) {
  // If props are not provided, manage state internally
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  const currentIndex =
    propCurrentIndex !== undefined ? propCurrentIndex : internalCurrentIndex
  const setCurrentIndex =
    propSetCurrentIndex !== undefined
      ? propSetCurrentIndex
      : setInternalCurrentIndex

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  if (!images[currentIndex]) {
    return null
  }

  return (
    <div className="flex h-screen flex-col gap-y-4">
      <div className="flex w-full basis-1/2 place-items-center justify-center gap-x-2 lg:mt-6 lg:gap-x-3">
        <div className=" w-4/5 sm:w-2/3 md:w-6/10 lg:w-1/2 xl:w-9/20">
          {images[currentIndex].type === 'video' ? (
            <video
              src={images[currentIndex].src}
              alt={images[currentIndex].label}
              className={`relative z-50 mx-auto h-[500px] max-h-52 origin-top cursor-pointer rounded object-scale-down transition-all duration-300 sm:max-h-56 md:max-h-60 lg:max-h-64 xl:max-h-80 2xl:max-h-[380px]`}
              controls
              onClick={handleClick}
            />
          ) : (
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].label}
              className={`relative z-50 mx-auto h-[500px] max-h-52 origin-top cursor-pointer rounded object-scale-down transition-all duration-300 sm:max-h-56 md:max-h-60 lg:max-h-64 xl:max-h-80 2xl:max-h-[360px] ${isClicked ? 'scale-y-[1.6] scale-x-150' : ''}`}
              onClick={handleClick}
            />
          )}
        </div>
        <div className="flex w-7 shrink flex-col gap-y-2 md:w-8 xl:w-12">
          <button
            onClick={handlePrevClick}
            className=" inline-block  bg-gradient-to-b from-white to-cyan-950 text-white transition-all duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
          ></button>
          <button
            onClick={handleNextClick}
            className=" rotate-180 bg-gradient-to-t from-cyan-950 to-white text-white transition-all duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
          ></button>
        </div>
      </div>
      <div className=" flex basis-1/2 h-1/2 flex-col place-content-start place-items-center bg-cyan-400 text-center lg:trapezoid">
        {children}
      </div>
    </div>
  )
}
