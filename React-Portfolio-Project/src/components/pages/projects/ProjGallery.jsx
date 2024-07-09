// a list of projects in an accordion

import { useState } from 'react'
import ServerTooltip from '../../features/ServerTooltip'
import { projMainContent } from '../../../utils/images'
import { FaLink } from 'react-icons/fa'

export default function ProjGallery() {
  // const [featuredProj, setFeaturedProj] = useState(0)

  return (
    <main className="relative flex h-screen flex-col justify-center">
      <h1 className="absolute left-6 top-9 h-fit font-mono text-lg tracking-wide text-gray-950">
        {'<Projects></Gallery>'}
      </h1>

      <section className="flex h-screen flex-col justify-center">
        <div className="mx-auto mt-5 grid h-7/10 w-full grid-cols-2 place-content-evenly place-items-center gap-4 px-6 text-center">
          <div className="col-span-full size-fit rounded-sm ring ring-gray-800">
            <h2 className="hidden">{projMainContent[0].label}</h2>
            <img
              src={projMainContent[0].src}
              alt={projMainContent[0].label}
              className=""
            />
          </div>
          <div className="col-span-full mb-2.5 row-span-9 row-start-2 flex h-3/4 w-screen flex-col justify-center bg-gray-800">
            <p className="mx-auto w-6/10 text-gray-50">
              Select an item, or scroll horizontally to view details
            </p>
          </div>
          <div className="size-fit rounded-sm ring ring-gray-800">
            <h2 className="hidden">{projMainContent[1].label}</h2>
            <img
              src={projMainContent[1].src}
              alt={projMainContent[1].label}
              className=""
            />
          </div>
          <div className="size-fit rounded-sm ring ring-gray-800">
            <h2 className="hidden">{projMainContent[2].label}</h2>
            <img
              src={projMainContent[2].src}
              alt={projMainContent[2].label}
              className=""
            />
          </div>
          <div className="size-fit rounded-sm ring ring-gray-800">
            <h2 className="hidden">{projMainContent[3].label}</h2>
            <img
              src={projMainContent[3].src}
              alt={projMainContent[3].label}
              className=""
            />
          </div>
          <div className="size-fit rounded-sm ring ring-gray-800">
            <h2 className="hidden">{projMainContent[4].label}</h2>
            <img
              src={projMainContent[4].src}
              alt={projMainContent[4].label}
              className=""
            />
          </div>
        </div>
      </section>
    </main>
  )
}
