//
import { useState } from 'react'
import Carousel from '../../features/Carousel'
import ServerTooltip from '../../features/ServerTooltip'
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
            <h3 className="flex w-full place-items-center justify-center gap-x-8 justify-self-start bg-cyan-200 py-5 text-center text-lg font-semibold md:text-xl xl:text-2xl">
              <a
                className="font-roboto shadow-gray-400 transition-all  duration-500  [text-shadow:6px_6px_3px_var(--tw-shadow-color)] hover:scale-110"
                href={`https://timmurphywebdev.netlify.app/#Projects/${projMainContent[currentIndex].linkToSlide}`}
              >
                {projMainContent[currentIndex].label}
              </a>
              {projMainContent[currentIndex].linkExternal && (
                <a
                  href={projMainContent[currentIndex].linkExternal}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative h-fit flex justify-center transition-all"
                >
                  <FaLink className="text-base text-black transition-all duration-500 hover:scale-125 2xl:text-2xl" />
                  {projMainContent[currentIndex].linkToSlide === 3 && (
                    <ServerTooltip />
                  )}
                </a>
              )}
            </h3>
            <p className=" h-full bg-cyan-400 text-pretty text-sm sm:text-base md:text-lg lg:w-full p-5 lg:px-80 lg:text-xl xl:pt-6 3xl:px-96 3xl:pt-20">
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
