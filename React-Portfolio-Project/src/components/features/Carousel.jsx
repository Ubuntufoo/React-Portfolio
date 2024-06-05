//
import { useState } from 'react'
import { PiArrowFatLinesDownFill } from 'react-icons/pi'
import { PiArrowFatLinesUpFill } from 'react-icons/pi'
import { FaLink } from 'react-icons/fa'

export default function Carousel({ imagesProjMain }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesProjMain.length - 1 : prevIndex - 1,
    )
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesProjMain.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="mb-24 grid grid-cols-3 justify-evenly gap-y-10 text-center 3xl:mb-36 3xl:gap-y-4">
        <img
          src={imagesProjMain[currentIndex].src}
          alt={imagesProjMain[currentIndex].label}
          className="z-10 col-start-2 row-start-1 h-[450px] w-[1000px] origin-top cursor-pointer rounded object-scale-down transition-all duration-500 ease-in-out hover:scale-[1.3]"
        />

        <div className="col-start-3 row-start-1 ms-8 flex flex-col justify-center gap-y-6">
          <button
            onClick={handlePrevClick}
            className="w-16  bg-cyan-900 text-white transition-all
                duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6  active:scale-90"
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
          <div className="flex size-full flex-col justify-end gap-y-4 px-20 pb-6 3xl:gap-y-10 3xl:pb-10">
            <h3 className="text-3xl font-semibold">
              {imagesProjMain[currentIndex].label}
              {imagesProjMain[currentIndex].link && (
                <a
                  href={imagesProjMain[currentIndex].link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline text-cyan-950"
                >
                  <FaLink className="ms-4 inline text-3xl" />
                </a>
              )}
            </h3>
            <p className="pretty text-lg tracking-wide 3xl:text-xl">
              {imagesProjMain[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
