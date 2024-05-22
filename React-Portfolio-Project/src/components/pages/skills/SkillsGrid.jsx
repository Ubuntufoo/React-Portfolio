// a grid of items discussing my coding skills

import SlantedEdgeRS from '../../shapes/SlantedEdgeRS'
import SlantedEdgeLS from '../../shapes/SlantedEdgeLS'

import reactLOGOcustom from '../../../assets/grid/reactLOGOcustom.png'
import genaiIMG from '../../../assets/grid/genaiIMG.png'
import fullstackIMG3 from '../../../assets/grid/fullstackIMG3.png'
import problemsolveIMG from '../../../assets/grid/problemsolveIMG.png'

const slantedEdgeClasses =
  'group relative bg-cyan-950 text-white transition-all duration-700 hover:scale-110 hover:bg-white hover:text-cyan-950 hover:z-50 border-t-2 border-b-2 border-white hover-shadow-2xl cursor-pointer'
const slantedEdgeLSClasses = `${slantedEdgeClasses} border-r-2`
const slantedEdgeRSClasses = `${slantedEdgeClasses} border-l-2`

export default function SkillsGrid() {
  return (
    <main className="size-screen flex justify-center">
      <div className="m-auto grid size-3/4 grid-cols-2 gap-y-11 pe-16 text-center">
        <SlantedEdgeRS classNames={slantedEdgeRSClasses}>
          <div className="fixed left-0 top-0 h-2 w-10 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white"></div>
          <div className="flex h-full place-items-center">
            <h3 className="w-full text-2xl font-semibold leading-10">
              React <br /> Specialization
            </h3>

            <img
              className="w-1/2 object-cover"
              src={reactLOGOcustom}
              alt="reactLOGOcustom"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-2 w-10 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white"></div>
        </SlantedEdgeRS>

        <SlantedEdgeLS classNames={slantedEdgeLSClasses}>
          <div className="fixed right-0 top-0 h-2 w-10 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white"></div>
          <div className="flex h-full flex-row-reverse place-items-center">
            <h3 className="w-full text-2xl font-semibold leading-10">
              Generative AI <br /> Integration
            </h3>
            <img
              className="w-1/2 object-cover"
              src={genaiIMG}
              alt="reactLOGOcustom"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-2 w-10 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white"></div>
        </SlantedEdgeLS>
        <SlantedEdgeRS classNames={slantedEdgeRSClasses}>
          <div className="fixed left-0 top-0 h-2 w-10 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white"></div>
          <div className="flex place-items-center">
            <h3 className="w-full text-2xl font-semibold leading-10">
              Full-Stack <br /> Experience
            </h3>
            <img
              className="w-1/2 object-cover"
              src={fullstackIMG3}
              alt="reactLOGOcustom"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-2 w-10 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white"></div>
        </SlantedEdgeRS>
        <SlantedEdgeLS classNames={slantedEdgeLSClasses}>
          <div className="fixed right-0 top-0 h-2 w-10 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white"></div>
          <div className="flex flex-row-reverse place-items-center">
            <h3 className="w-full text-2xl font-semibold leading-10">
              Projects <br /> With Purpose
            </h3>
            <img
              className="w-1/2 object-cover"
              src={problemsolveIMG}
              alt="reactLOGOcustom"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-2 w-10 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white"></div>
        </SlantedEdgeLS>
      </div>
    </main>
  )
}
