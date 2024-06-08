//
import { useState } from 'react'
import { PiArrowFatLinesDownFill } from 'react-icons/pi'
import { PiArrowFatLinesUpFill } from 'react-icons/pi'

export default function Carousel({
  images,
  currentIndex: propCurrentIndex,
  setCurrentIndex: propSetCurrentIndex,
  children,
}) {
  // If props are not provided, manage state internally
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0)
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

  if (!images[currentIndex]) {
    return null
  }

  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="mb-24 grid grid-cols-3 justify-evenly gap-y-16 text-center 3xl:mb-36 3xl:gap-y-4">
        {images[currentIndex].type === 'video' ? (
          <video
            src={images[currentIndex].src}
            alt={images[currentIndex].label}
            className="z-10 col-start-2 row-start-1 aspect-square h-[320px] w-[1000px] origin-top cursor-pointer rounded object-scale-down transition-all duration-500 ease-in-out 3xl:h-[400px]"
            controls
          />
        ) : (
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].label}
            className="z-10 col-start-2 row-start-1 h-[320px] w-[1000px] origin-top cursor-pointer rounded object-scale-down transition-all duration-500 ease-in-out 3xl:h-[400px]"
          />
        )}

        <div className="col-start-3 row-start-1 ms-8 flex flex-col justify-center gap-y-6">
          <button
            onClick={handlePrevClick}
            className="w-16 bg-cyan-900 text-white transition-all
                duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
          >
            <PiArrowFatLinesUpFill className="mx-auto text-xl" />
          </button>
          <button
            onClick={handleNextClick}
            className="w-16 rotate-180 bg-cyan-900 text-white transition-all duration-150
                trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
          >
            <PiArrowFatLinesDownFill className="mx-auto rotate-180 text-xl" />
          </button>
        </div>
        <div className="col-span-full -my-20 mx-auto h-56 w-3/4 bg-gradient-to-b from-transparent to-white text-gray-950 trapezoid 3xl:-my-36 3xl:h-96">
          {children}
        </div>
      </div>
    </div>
  )
}


