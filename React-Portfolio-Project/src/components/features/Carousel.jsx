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
    <div className="flex h-screen flex-col justify-center">
      <div className="mt-12 grid mb-20 justify-evenly grid-cols-3 gap-y-8 text-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].label}
          className="col-start-2 row-start-1 h-[450px] w-[1000px] cursor-pointer rounded object-scale-down"
        />

        <div className="col-start-3 row-start-1 ms-6 flex flex-col justify-center gap-y-6">
          <button
            onClick={handlePrevClick}
            className=" size-fit bg-cyan-900 p-4 text-3xl text-white
                transition-all duration-150 hover:bg-teal-950 hover:ring-2 hover:ring-teal-950 active:-skew-x-12 active:scale-75"
          >
            <PiArrowFatLinesUpFill />
          </button>
          <button
            onClick={handleNextClick}
            className=" size-fit bg-cyan-900 p-4 text-3xl text-white
                transition-all duration-150 hover:bg-teal-950 hover:ring-2 hover:ring-teal-950 active:-skew-x-12 active:scale-75"
          >
            <PiArrowFatLinesDownFill />
          </button>
        </div>

        <div className="self-start col-span-full mx-64 space-y-4 text-slate-50">
          <h3 className="text-xl font-semibold">
            {images[currentIndex].label}
          </h3>
          <p>{images[currentIndex].description}</p>
        </div>
      </div>
    </div>
  )
}
