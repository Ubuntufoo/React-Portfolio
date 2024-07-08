// a list of projects in an accordion

import { useState } from 'react'
import ServerTooltip from '../../features/ServerTooltip'
import { projMainContent } from '../../../utils/images'
import { FaLink } from 'react-icons/fa'

export default function ProjGallery() {
  return (
    <main className="relative flex h-screen flex-col justify-center">
      <h1 className="absolute left-6 top-8 h-fit font-roboto text-3xl tracking-wide text-gray-950">
        {'<Projects/>'}
      </h1>

      <section className="flex h-screen flex-col justify-center">
        <div className="relative mx-auto w-2/3 columns-1 space-y-3 text-center">
          <div className="absolute w-full -translate-y-full border border-white">
            <input
              type="checkbox"
              id="proj1"
              className="peer appearance-none"
            />
            <label htmlFor="proj1" className=" cursor-pointer">
              <h2>test content here 1 </h2>
            </label>
            <img
              src={projMainContent[0].src}
              alt=""
              className="h-0 transition-all duration-500 peer-checked:h-fit"
            />
          </div>
          <div className="absolute w-full border border-black">
            <input
              type="checkbox"
              id="proj2"
              className="peer appearance-none"
            />
            <label htmlFor="proj2" className=" cursor-pointer">
              <h2>test content here 2 </h2>
            </label>
            <img
              src={projMainContent[1].src}
              alt=""
              className="h-0 transition-all duration-500 peer-checked:h-fit"
            />
          </div>
          <div className="absolute w-full translate-y-full border border-yellow-400">
            <input
              type="checkbox"
              id="proj3"
              className="peer appearance-none"
            />
            <label htmlFor="proj3" className=" cursor-pointer">
              <h2>test content here 3 </h2>
            </label>
            <img
              src={projMainContent[3].src}
              alt=""
              className="h-0 transition-all duration-500 peer-checked:h-fit"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
