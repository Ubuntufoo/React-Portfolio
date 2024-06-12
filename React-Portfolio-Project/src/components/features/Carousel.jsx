//
import { useState } from 'react'
import { PiArrowFatLinesDownFill, PiArrowFatLinesUpFill } from 'react-icons/pi'

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
    <div className="relative flex h-screen flex-col justify-center">
      <div className="mb-12 grid grid-cols-3 justify-center gap-y-24 border text-center 3xl:mb-28 3xl:gap-y-4">
        {images[currentIndex].type === 'video' ? (
          <video
            src={images[currentIndex].src}
            alt={images[currentIndex].label}
            className={`z-10 col-start-2 row-start-1 h-[320px] w-[1000px] origin-top cursor-pointer rounded object-scale-down transition-all duration-500 ease-in-out 3xl:h-[420px]`}
            controls
            onClick={handleClick}
          />
        ) : (
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].label}
            className={`z-10 col-start-2 row-start-1 h-[320px] w-full max-w-[1000px] origin-top cursor-pointer rounded object-scale-down transition-all duration-500 ease-in-out 3xl:h-[420px] ${isClicked ? 'origin-top scale-[1.85]' : ''}`}
            onClick={handleClick}
          />
        )}

        <div className="col-start-3 row-start-1 ms-8 flex w-1/4 max-w-10 flex-col justify-center gap-y-4 md:max-w-12 xl:max-w-14">
          <button
            onClick={handlePrevClick}
            className="bg-cyan-900 text-white transition-all duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
          >
            <PiArrowFatLinesUpFill className="lg:text-md mx-auto text-sm xl:text-xl" />
          </button>
          <button
            onClick={handleNextClick}
            className="rotate-180 bg-cyan-900 text-white transition-all duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
          >
            <PiArrowFatLinesDownFill className="lg:text-md mx-auto rotate-180 text-sm xl:text-xl" />
          </button>
        </div>
        <div className="col-span-full -my-12 mx-auto h-56 w-3/4 bg-gradient-to-b from-transparent to-white text-gray-950 trapezoid 3xl:-my-24 3xl:h-96">
          {children}
        </div>
      </div>
    </div>
  )
}




