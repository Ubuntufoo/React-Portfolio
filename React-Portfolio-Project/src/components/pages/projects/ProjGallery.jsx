//a carousel of project images with a description below

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
            <h3 className="flex h-1/4 w-full place-items-center justify-center gap-x-8 justify-self-start bg-cyan-200 py-6 text-center text-xl font-semibold md:text-2xl xl:text-3xl">
              <a
                className="[text-shadow:6px 6px 3px var(--tw-shadow-color)] font-roboto shadow-gray-400 transition-all duration-500 hover:scale-110"
                href={`https://timmurphywebdev.netlify.app/#Projects/${projMainContent[currentIndex].linkToSlide}`}
              >
                {projMainContent[currentIndex].label}
              </a>
              {projMainContent[currentIndex].linkExternal && (
                <a
                  href={projMainContent[currentIndex].linkExternal}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-fit justify-center transition-all"
                >
                  <FaLink
                    alt="External link"
                    className="text-base text-black transition-all duration-500 hover:scale-125 2xl:text-2xl"
                  />
                  {projMainContent[currentIndex].linkToSlide === 3 && (
                    <ServerTooltip />
                  )}
                </a>
              )}
            </h3>
            <p className="h-full text-pretty bg-cyan-400 p-5 text-sm sm:text-base md:text-lg lg:w-full lg:px-80 lg:text-xl xl:pt-6 3xl:px-96 3xl:pt-20">
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
