//
import { useState } from 'react'
import { PiArrowFatLinesDownFill } from 'react-icons/pi'
import { PiArrowFatLinesUpFill } from 'react-icons/pi'
import { FaLink } from 'react-icons/fa'

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="gap-y-14 3xl:gap-y-16 mb-24 3xl:mb-36 grid grid-cols-3 justify-evenly text-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].label}
          className="z-10 col-start-2 row-start-1 h-[450px] w-[1000px] origin-top cursor-pointer rounded object-scale-down transition-all duration-500 ease-in-out"
        />

        <div className="col-start-3 row-start-1 ms-8 flex flex-col justify-center gap-y-6">
          <button
            onClick={handlePrevClick}
            className="trapezoid-button  w-16 bg-cyan-900 text-white
                transition-all duration-150 hover:scale-110 hover:bg-teal-950 active:-skew-x-6  active:scale-90"
          >
            <PiArrowFatLinesUpFill className="mx-auto text-xl" />
          </button>
          <button
            onClick={handleNextClick}
            className="trapezoid-button w-16 rotate-180 bg-cyan-900 text-white transition-all
                duration-150 hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
          >
            <PiArrowFatLinesDownFill className="mx-auto rotate-180 text-xl" />
          </button>
        </div>

        <div className="trapezoid col-span-full -my-20 3xl:-my-36 mx-auto h-56 3xl:h-80 w-3/4 bg-gradient-to-b from-transparent to-white text-gray-950">
          <div className="flex size-full flex-col justify-end gap-y-8 px-20 pb-6 3xl:pb-10">
            <h3 className="text-3xl font-semibold">
              {images[currentIndex].label}
              <a href="#Projects/1">
                <FaLink className="ms-4 inline text-3xl text-cyan-950" />
              </a>
            </h3>
            <p className="pretty text-lg 3xl:text-xl tracking-wide leading-snug">
              {images[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
