// a grid of items discussing my coding skills

import SlantedEdgeRS from '../../shapes/SlantedEdgeRS'
import SlantedEdgeLS from '../../shapes/SlantedEdgeLS'

import reactLOGOcustom from '../../../assets/grid/reactLOGOcustom.png'

const slantedEdgeClasses =
  'group relative bg-cyan-950 text-white transition-all duration-500 hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-white hover:text-cyan-800 hover:z-50 border-t-2 border-b-2 border-white hover-shadow-2xl'
const slantedEdgeLSClasses = `${slantedEdgeClasses} border-r-2`
const slantedEdgeRSClasses = `${slantedEdgeClasses} border-l-2`

export default function SkillsGrid() {
  return (
    <main className="size-screen flex justify-center">
      <div className="grid size-3/4 m-auto pe-16 gap-y-11 grid-cols-2 text-center">
        <SlantedEdgeRS classNames={slantedEdgeRSClasses}>
          <div className="fixed left-0 top-0 h-2 w-10 bg-cyan-950 transition-all duration-700 group-hover:w-1/2 group-hover:bg-cyan-950"></div>
          <div className="flex place-items-center">
            <div className="w-1/2">
              <h3 className="text-lg font-semibold">Amet minim mollit</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <img
              className="w-1/2"
              src={reactLOGOcustom}
              alt="reactLOGOcustom"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-2 w-10 bg-cyan-950 transition-all duration-700 group-hover:w-1/2 group-hover:bg-cyan-950"></div>
        </SlantedEdgeRS>

        <SlantedEdgeLS classNames={slantedEdgeLSClasses}>
          <div className="fixed right-0 top-0 h-2 w-10 bg-cyan-950 transition-all duration-700 group-hover:w-1/2 group-hover:bg-cyan-950"></div>
          <div className="flex flex-row-reverse place-items-center">
            <div className="w-1/2">
              <h3 className="text-lg font-semibold">Amet minim mollit</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <img
              className="w-1/2"
              src={reactLOGOcustom}
              alt="reactLOGOcustom"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-2 w-10 bg-cyan-950 transition-all duration-700 group-hover:w-1/2 group-hover:bg-cyan-950"></div>
        </SlantedEdgeLS>
        <SlantedEdgeRS classNames={slantedEdgeRSClasses}>
          <div className="fixed left-0 top-0 h-2 w-10 bg-cyan-950 transition-all duration-700 group-hover:w-1/2 group-hover:bg-cyan-950"></div>
          <div className="flex place-items-center">
            <div className="w-1/2">
              <h3 className="text-lg font-semibold">Amet minim mollit</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <img
              className="w-1/2"
              src={reactLOGOcustom}
              alt="reactLOGOcustom"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-2 w-10 bg-cyan-950 transition-all duration-700 group-hover:w-1/2 group-hover:bg-cyan-950"></div>
        </SlantedEdgeRS>
        <SlantedEdgeLS classNames={slantedEdgeLSClasses}>
          <div className="fixed right-0 top-0 h-2 w-10 bg-cyan-950 transition-all duration-700 group-hover:w-1/2 group-hover:bg-cyan-950"></div>
          <div className="flex flex-row-reverse place-items-center">
            <div className="w-1/2">
              <h3 className="text-lg font-semibold">Amet minim mollit</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <img
              className="w-1/2"
              src={reactLOGOcustom}
              alt="reactLOGOcustom"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-2 w-10 bg-cyan-950 transition-all duration-700 group-hover:w-1/2 group-hover:bg-cyan-950"></div>
        </SlantedEdgeLS>
      </div>
    </main>
  )
}
