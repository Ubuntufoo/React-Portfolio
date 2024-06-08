//
import { useState } from 'react'
import Carousel from '../../features/Carousel'
import { imagesProjMain } from '../../../utils/images'
import { FaLink } from 'react-icons/fa'

export default function ProjGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <Carousel
        images={imagesProjMain}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      >
        {imagesProjMain[currentIndex] && (
          <div className="flex size-full flex-col justify-end gap-y-7 px-20 pb-6 3xl:gap-y-10 3xl:pb-10">
            <h3 className="text-2xl font-semibold">
              {imagesProjMain[currentIndex].label}
              {imagesProjMain[currentIndex].link && (
                <a
                  href={imagesProjMain[currentIndex].link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline text-cyan-950"
                >
                  <FaLink className="ms-4 inline text-2xl" />
                </a>
              )}
            </h3>
            <p className="pretty text-lg tracking-wide 3xl:text-xl">
              {imagesProjMain[currentIndex].description}
            </p>
          </div>
        )}
      </Carousel>
    </>
  )
}



