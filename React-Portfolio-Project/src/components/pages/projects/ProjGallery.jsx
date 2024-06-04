//
import { useState } from 'react'
import BrainteasersHomeIMG from '../../../assets/projects-assets/BrainteasersHomeIMG.png'
import ExploreLLM_IMG from '../../../assets/projects-assets/ExploreLLM_IMG.png'
import TADAmobile from '../../../assets/projects-assets/TADAmobile.png'
import WorkDashIMG from '../../../assets/projects-assets/WorkDashIMG.png'

const images = [
  {
    src: BrainteasersHomeIMG,
    label: 'BrainteasersHomeIMG',
    description: 'Some representative placeholder content for the first slide.',
  },
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM_IMG',
    description:
      'Some representative placeholder content for the second slide.',
  },
  {
    src: TADAmobile,
    label: 'TADAmobile',
    description: 'Some representative placeholder content for the third slide.',
  },
  {
    src: WorkDashIMG,
    label: 'WorkDashIMG',
    description:
      'Some representative placeholder content for the fourth slide.',
  },
]

export default function ProjGallery() {
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
    <div className="mx-auto flex max-w-xl flex-col items-center">
      <div className="text-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].label}
          className="h-80 w-full rounded-lg object-cover shadow-lg"
        />
        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            {images[currentIndex].label}
          </h3>
          <p className="text-gray-600">{images[currentIndex].description}</p>
        </div>
      </div>
      <div className="mt-4 flex w-full justify-between">
        <button
          onClick={handlePrevClick}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-700"
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  )
}