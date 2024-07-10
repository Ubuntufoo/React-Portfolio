// a list or projects showing project details and a link onClick to the project page

import { useState } from 'react'
import { projMainContent } from '../../../utils/images'
import { ImArrowRight } from 'react-icons/im'

const backgroundClasses = [
  'bg-gray-950',
  'bg-gray-900',
  'bg-gray-800',
  'bg-gray-700',
  'bg-gray-600',
]

export default function ProjGallery() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main className="relative flex h-screen flex-col justify-center">
      <h1 className="absolute left-6 top-9 h-fit font-mono text-lg font-semibold tracking-wider text-gray-950">
        {`<Projects></Gallery>`}
      </h1>
      <section className="mx-auto mt-auto flex h-7/8 w-5/6 flex-col place-content-end place-items-center">
        <div className="h-2/3 w-screen text-center">
          {selectedProject == null ? (
            <div className="mx-auto flex h-full w-8/9 flex-col justify-evenly py-6">
              <h2 className="text-xl font-bold">Select a project below</h2>
              <hr />
              <p className="">or scroll right to see project details</p>
              <ImArrowRight className="mx-auto text-3xl" />
            </div>
          ) : (
            <div className="mx-auto flex h-full w-8/9 flex-col justify-evenly py-4">
              <h2 className="text-xl font-bold">{selectedProject.label}</h2>
              <hr />
              <p className="text-pretty">{selectedProject.description}</p>
              <div className="mx-auto flex w-3/4 text-sm">
                <button className="mx-auto w-24 shadow-lg shadow-white">
                  <a
                    href={`http://localhost:5173/#Projects/${selectedProject.linkToSlide}`}
                    className="group relative inline-flex overflow-hidden rounded-lg bg-black px-7 py-2 text-gray-50 duration-500 hover:bg-blue-600"
                  >
                    <span className="z-40 font-roboto font-semibold tracking-wider">
                      Details
                    </span>
                    <div className="absolute inset-0 z-20 h-[90%] w-[100%] translate-x-[-95%] rotate-45 bg-gray-400 transition-all duration-500 group-hover:translate-x-[90%] group-hover:scale-100"></div>
                  </a>
                </button>
                {selectedProject.linkExternal && (
                  <button className="group relative mx-auto w-24 overflow-hidden rounded-lg bg-gray-800 py-2 text-center text-gray-50 shadow-lg shadow-white duration-500 hover:bg-blue-600">
                    <a
                      href={selectedProject.linkExternal}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="z-40 mx-auto inline-block text-center font-roboto font-semibold tracking-wider">
                        Visit
                      </span>
                    </a>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="h-3/4">
          <ul className="flex h-full flex-col place-content-center place-items-center">
            {projMainContent.map((proj, index) => (
              <li
                key={index}
                className={`flex w-screen grow cursor-pointer flex-col justify-center text-center font-roboto text-xl tracking-wide ${backgroundClasses[index % backgroundClasses.length]}`}
              >
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-white"
                >
                  {proj.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
