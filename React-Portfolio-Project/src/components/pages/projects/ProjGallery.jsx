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
          <div className="flex size-full flex-col justify-end gap-y-10 pb-6 2xl:px-40 3xl:gap-y-14 3xl:px-60 3xl:pb-12">
            <h3 className="text-3xl font-semibold">
              <a href={`http://localhost:5173/#Projects/${projMainContent[currentIndex].linkToSlide}`}>{projMainContent[currentIndex].label}</a>
              {projMainContent[currentIndex].linkExternal && (
                <a
                  href={projMainContent[currentIndex].linkExternal}
                  target="_blank"
                  rel="noreferrer"
                  className="inline ms-3 text-cyan-950"
                >
                  <FaLink className="ms-4 inline text-2xl" />
                </a>
              )}
            </h3>
            <p className="pretty text-lg 3xl:text-xl">
              {projMainContent[currentIndex].description}
            </p>
          </div>
        )}
      </Carousel>
    </>
  )
}



