// a list or projects showing project details and a link onClick to the project page

import { useState } from 'react'
import { projMainContent } from '../../../utils/images'
import { LuBadgeInfo } from 'react-icons/lu'
import Button from '../../features/Button'
import BG1 from '../../../assets/BG1.png'

const projectClasses = [
  { bg: 'bg-gray-950'},
  { bg: 'bg-gray-900'},
  { bg: 'bg-gray-800'},
  { bg: 'bg-gray-700'},
  { bg: 'bg-gray-600'},
]

export default function ProjGallery() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main className="relative flex h-screen flex-col justify-center">
      <section className="mx-auto flex h-6/7 w-5/6 flex-col place-content-end place-items-center md:mt-auto 3xl:h-19/20">
        <div className="relative h-1/2 w-screen text-center">
          {selectedProject == null ? (
            <div className="mx-auto flex h-full flex-col justify-center">
              <img
                className="absolute inset-x-0 -bottom-4 -z-20 w-full origin-bottom scale-[1.58] rounded-3xl opacity-10 brightness-75 md:scale-[1.4] lg:scale-[.81] xl:scale-[.67] 2xl:scale-[.61] 3xl:scale-[.73]"
                src={BG1}
                alt="Cluttered desk covered with tech and tools"
              />
              <div className="mx-auto w-fit">
                <h2 className="text-2xl font-semibold sm:text-3xl md:text-5xl">
                  Select a project below
                </h2>
              </div>
            </div>
          ) : (
            <div className="mx-auto flex h-full w-8/9 flex-col justify-evenly pt-5">
              <img
                className="absolute inset-x-0 -bottom-4 -z-20 w-full origin-bottom scale-[1.58] rounded-3xl opacity-15 brightness-75 md:scale-[1.38] lg:scale-[.81] xl:scale-[.67] 2xl:scale-[.61] 3xl:scale-[.73]"
                src={selectedProject.src}
                alt={selectedProject.label}
              />
              <h2 className="text-[25px] font-bold sm:text-3xl md:text-4xl 2xl:text-5xl">
                {selectedProject.label}
              </h2>
              <p className="text-pretty font-semibold sm:text-lg md:text-xl 2xl:text-2xl">
                {selectedProject.description}
              </p>
              <div className="mx-auto flex w-3/4 text-sm xl:w-1/2">
                <Button
                  link={`/#Projects/${selectedProject.linkToSlide}`}
                  position=""
                  styles="scale-90"
                  text="Details"
                />

                <Button
                  link={selectedProject.linkExternal}
                  position=""
                  styles="scale-90"
                  text="Visit"
                  isExternal
                />
              </div>
            </div>
          )}
        </div>
        <div className="h-1/2 2xl:h-9/20">
          <ul className="flex h-19/20 flex-col place-content-center place-items-center bg-gray-800 xl:h-full">
            {projMainContent.map((proj, index) => (
              <li
                onClick={() => setSelectedProject(proj)}
                key={index}
                className={`flex w-screen grow origin-bottom cursor-pointer place-items-center justify-center text-center text-xl tracking-wide transition-all hover:scale-[1.15] ${projectClasses[index % projectClasses.length].bg} ${projectClasses[index % projectClasses.length].hover}`}
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
