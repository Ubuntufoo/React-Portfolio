// a shifting grid of projects


import ServerTooltip from '../../features/ServerTooltip'
import { FaLink } from 'react-icons/fa'

import { useState } from 'react'
import { projMainContent } from '../../../utils/images'

export default function ProjGallery() {
  const [featuredIndex, setFeaturedIndex] = useState(0)

  const handleItemClick = (index) => {
    if (index !== featuredIndex) {
      setFeaturedIndex(index)
    }
  }

  return (
    <main className="relative flex h-screen flex-col justify-center">
      <h1 className="absolute left-6 top-9 h-fit font-mono font-semibold text-xl tracking-wide text-gray-950 whitespace-break-spaces">
        {`<Projects></Gallery>`}
      </h1>

      <section className="flex h-screen flex-col justify-center">
        <div className="h-7/10 mx-auto mt-5 grid w-full grid-cols-2 place-content-evenly place-items-center gap-4 px-6 text-center">
          <div className="col-span-full size-fit rounded-sm ring ring-gray-800 transition-all duration-500 ease-in-out">
            <h2 className="hidden">{projMainContent[featuredIndex].label}</h2>
            <img
              src={projMainContent[featuredIndex].src}
              alt={projMainContent[featuredIndex].label}
              className="transform transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="col-span-full row-span-9 row-start-2 mb-2.5 flex h-3/4 w-screen flex-col justify-center bg-gray-800">
            <p className="mx-auto w-6/10 text-gray-50">
              Select an item, or scroll horizontally to view details
            </p>
          </div>
          {projMainContent.map(
            (item, index) =>
              index !== featuredIndex && (
                <div
                  key={index}
                  className="size-fit cursor-pointer rounded-sm ring ring-gray-800 transition-all duration-500 ease-in-out"
                  onClick={() => handleItemClick(index)}
                >
                  <h2 className="hidden">{item.label}</h2>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              ),
          )}
        </div>
      </section>
    </main>
  )
}
