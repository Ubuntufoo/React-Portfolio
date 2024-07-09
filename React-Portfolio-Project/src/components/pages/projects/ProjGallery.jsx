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
        <div className="flex h-6/10 w-screen flex-col justify-center space-y-6 bg-gray-300 text-center">
          {selectedProject == null ? (
            <div className="mx-auto flex py-5 w-8/9 h-full flex-col justify-evenly">
              <h2 className="text-lg font-bold">Select a project below</h2>
              <hr className="h-0.5 w-full bg-gray-600" />
              <p className="">or scroll right to see project details</p>
              <ImArrowRight className="mx-auto text-3xl" />
            </div>
          ) : (
            <div className="mx-auto w-8/9 flex flex-col justify-evenly h-full">
              <h2 className="text-lg font-bold">{selectedProject.label}</h2>
              <hr className="h-0.5 w-full bg-gray-600" />
              <p className="text-pretty">{selectedProject.description}</p>
            </div>
          )}
        </div>
        <div className="h-3/4">
          <ul className="flex h-full flex-col place-content-center place-items-center">
            {projMainContent.map((proj, index) => (
              <li
                key={index}
                className={`flex w-screen grow flex-col justify-center text-center font-roboto text-xl tracking-wide ${backgroundClasses[index % backgroundClasses.length]}`}
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
