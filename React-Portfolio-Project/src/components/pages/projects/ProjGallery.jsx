//
import { useState } from 'react'
import Carousel from '../../features/Carousel'
import { projMainContent } from '../../../utils/images'
import { FaLink } from 'react-icons/fa'

export default function ProjGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <Carousel
        images={projMainContent}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      >
        {projMainContent[currentIndex] && (
          <>
            <h3 className="flex w-full place-items-center h-1/4 2xl:h-1/3 justify-self-start justify-center gap-x-8 bg-cyan-200 text-center text-lg font-semibold md:text-xl xl:text-2xl">
              <a
                className="shadow-gray-400 transition-all duration-500  [text-shadow:6px_6px_3px_var(--tw-shadow-color)]  hover:scale-110"
                href={`http://localhost:5173/#Projects/${projMainContent[currentIndex].linkToSlide}`}
              >
                {projMainContent[currentIndex].label}
              </a>
              {projMainContent[currentIndex].linkExternal && (
                <a
                  href={projMainContent[currentIndex].linkExternal}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLink className="text-xl text-black transition-all duration-500 hover:scale-125" />
                </a>
              )}
            </h3>
            <p className=" text-pretty h-full p-7 text-sm sm:text-base md:text-lg lg:w-2/3 lg:px-24 3xl:px-32 lg:text-xl xl:pt-8 3xl:pt-20">
              {projMainContent[currentIndex].description
                .split('\n')
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </>
        )}
      </Carousel>
    </>
  )
}
