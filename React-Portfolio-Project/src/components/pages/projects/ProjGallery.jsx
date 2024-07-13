// a list or projects showing project details and a link onClick to the project page

import { useState } from 'react'
import { projMainContent } from '../../../utils/images'
import { ImArrowRight } from 'react-icons/im'
import { LuBadgeInfo } from 'react-icons/lu'
import BG1 from '../../../assets/BG1.png'

const projectClasses = [
  { bg: 'bg-gray-950', hover: 'hover:bg-red-700' },
  { bg: 'bg-gray-900', hover: 'hover:bg-orange-700' },
  { bg: 'bg-gray-800', hover: 'hover:bg-yellow-700' },
  { bg: 'bg-gray-700', hover: 'hover:bg-green-700' },
  { bg: 'bg-gray-600', hover: 'hover:bg-blue-700' },
]

export default function ProjGallery() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main className="relative flex h-screen flex-col justify-center">
      <h1 className="absolute left-6 top-7 min-w-max rounded-lg border-2 border-black p-1.5 text-center font-mono font-semibold tracking-wider text-gray-950 sm:text-lg md:left-8 md:top-11 2xl:inset-x-0 2xl:top-12 2xl:border-none 2xl:text-2xl">
        <code>&lt;Projects&gt;&lt;Gallery&gt;</code>
      </h1>
      <section className="mx-auto flex h-6/7 w-5/6 flex-col place-content-end place-items-center md:mt-auto">
        <div className="relative h-1/2 w-screen text-center">
          {selectedProject == null ? (
            <div className="mx-auto flex h-full w-8/9 flex-col justify-evenly py-10">
              <img
                className="absolute inset-x-0 -bottom-4 -z-10 w-full origin-bottom scale-150 opacity-10 brightness-90 sepia md:scale-[1.4] lg:scale-[.81] xl:scale-[.67] 2xl:scale-50"
                src={BG1}
                alt="Cluttered desk covered with tech and tools"
              />
              <h2 className="text-[25px] font-bold sm:text-3xl md:text-4xl">
                Select a project below
              </h2>
              <p className="text-pretty font-semibold sm:text-lg md:text-xl">
                or scroll right to see project details
              </p>
              <ImArrowRight className="mx-auto text-3xl" />
            </div>
          ) : (
            <div className="mx-auto flex h-full w-8/9 flex-col justify-evenly pt-2">
              <img
                className="absolute inset-x-0 -bottom-4 -z-10 w-full origin-bottom scale-150 rounded-lg opacity-15 brightness-90 sepia md:scale-[1.38] lg:scale-[.81] xl:scale-[.67] 2xl:scale-50"
                src={selectedProject.src}
                alt={selectedProject.label}
              />
              <h2 className="text-[25px] font-bold sm:text-3xl md:text-4xl">
                {selectedProject.label}
              </h2>
              <p className="text-pretty font-semibold sm:text-lg md:text-xl">
                {selectedProject.description}
              </p>
              <div className="mx-auto flex w-3/4 text-sm">
                <button className="mx-auto rounded-lg shadow-lg shadow-white">
                  <a
                    href={`http://localhost:5173/#Projects/${selectedProject.linkToSlide}`}
                    className="group relative inline-flex overflow-hidden rounded-lg bg-black px-7 py-2 text-gray-50 duration-500 hover:bg-blue-600"
                  >
                    <span className="z-40 font-roboto font-semibold tracking-wider lg:text-lg">
                      Details
                    </span>
                    <div className="absolute inset-0 z-20 h-[90%] w-[100%] translate-x-[-95%] rotate-45 bg-gray-400 transition-all duration-500 group-hover:translate-x-[90%] group-hover:scale-100"></div>
                  </a>
                </button>
                {selectedProject.linkExternal && (
                  <button className="mx-auto rounded-lg shadow-lg shadow-white">
                    <a
                      href={selectedProject.linkExternal}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-flex overflow-hidden rounded-lg bg-gray-700 px-9 py-2 text-gray-50 duration-500 hover:bg-blue-600"
                    >
                      <span className="z-40 font-roboto font-semibold tracking-wider lg:text-lg">
                        Visit
                      </span>
                      <div className="absolute inset-0 z-20 h-[90%] w-[100%] translate-x-[-95%] rotate-45 bg-gray-400 transition-all duration-500 group-hover:translate-x-[90%] group-hover:scale-100"></div>
                    </a>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="2xl:h-9/20 h-1/2">
          <ul className="flex h-19/20 flex-col place-content-center place-items-center xl:h-full">
            {projMainContent.map((proj, index) => (
              <li
                onClick={() => setSelectedProject(proj)}
                key={index}
                className={`flex w-screen grow origin-bottom-left cursor-pointer place-items-center justify-center text-center font-roboto text-xl tracking-wide transition-all hover:scale-105 hover:sepia ${projectClasses[index % projectClasses.length].bg} ${projectClasses[index % projectClasses.length].hover}`}
              >
                <button className="relative flex place-items-center text-gray-50">
                  {proj.label}
                  <LuBadgeInfo className="absolute -right-7 text-lg text-gray-50" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
