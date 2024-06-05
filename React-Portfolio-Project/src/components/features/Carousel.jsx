//
import { useState } from 'react'
import { PiArrowFatLinesDownFill } from 'react-icons/pi'
import { PiArrowFatLinesUpFill } from 'react-icons/pi'

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
    <>
      <div className="mx-auto flex size-fit h-[900px] w-[1000px] gap-y-10 flex-col justify-center text-center">
        <p className="text-center text-4xl">Some of my work:</p>
        <div className="flex h-fit">
          <div
            onClick={handlePrevClick}
            className="flex flex-col justify-center"
          >
            <button
              className="size-fit -rotate-90 bg-cyan-900 px-8 py-3 text-3xl text-white
              transition-all duration-150 hover:bg-teal-950 hover:ring-2 hover:ring-teal-950 active:-skew-x-12 active:scale-75"
            >
              <PiArrowFatLinesUpFill />
            </button>
          </div>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].label}
            className="h-[480px] w-[800px] shrink cursor-pointer rounded object-scale-down"
          />
          <div
            onClick={handleNextClick}
            className="flex flex-col justify-center"
          >
            <button
              className="size-fit -rotate-90 bg-cyan-900 px-8 py-3 text-3xl text-white
              transition-all duration-150 hover:bg-teal-950 hover:ring-2 hover:ring-teal-950 active:skew-x-12 active:scale-75"
            >
              <PiArrowFatLinesDownFill />
            </button>
          </div>
        </div>

        <div className=" w-full text-slate-50">
          <h3 className="text-xl font-semibold">
            {images[currentIndex].label}
          </h3>
          <p>{images[currentIndex].description}</p>
        </div>
      </div>
    </>
  )
}
