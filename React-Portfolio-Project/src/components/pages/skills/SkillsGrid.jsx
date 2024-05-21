// a grid of items discussing my coding skills

import SlantedEdgeRight from '../../shapes/SlantedEdgeRight'
import SlantedEdgeLeft from '../../shapes/SlantedEdgeLeft'

export default function SkillsGrid() {
  const slantedEdgeClasses =
    'group relative bg-cyan-900 hover:shadow-2xl w-full h-full text-white transition-all duration-500 hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-white hover:text-cyan-800 hover:z-50'

  return (
    <main className="m-auto mt-12 flex h-5/6 w-2/3 flex-col space-y-10">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-4xl font-semibold shad uppercase tracking-widest">
          Skills
        </p>
        <p className=" group-hover:text-white">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className="grid h-full grid-cols-2  gap-y-12">
        <SlantedEdgeRight classNames={slantedEdgeClasses}>
          <div className="absolute left-0 top-0 h-1 w-10 bg-cyan-900 transition-all duration-700   group-hover:w-1/2 group-hover:bg-cyan-900"></div>
          <div className="w-1/2">
            <h3 className="text-lg font-semibold">Amet minim mollit</h3>
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" absolute bottom-0 right-0 h-2 w-10 bg-cyan-900 transition-all duration-700   group-hover:w-1/2 group-hover:bg-cyan-900"></div>
        </SlantedEdgeRight>
        <SlantedEdgeLeft classNames={slantedEdgeClasses}>
          <div className="absolute left-0 top-0 h-1 w-10 bg-cyan-900 transition-all duration-700   group-hover:w-1/2 group-hover:bg-cyan-900"></div>
          <div className="w-1/2">
            <h3 className="text-lg font-semibold">Amet minim mollit</h3>
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" absolute bottom-0 right-0 h-1 w-10 bg-cyan-900 transition-all duration-700   group-hover:w-1/2 group-hover:bg-cyan-900"></div>
        </SlantedEdgeLeft>
        <SlantedEdgeRight classNames={slantedEdgeClasses}>
          <div className="absolute left-0 top-0 h-1 w-10 bg-cyan-900 transition-all duration-700   group-hover:w-1/2 group-hover:bg-cyan-900"></div>
          <div className="w-1/2">
            <h3 className="text-lg font-semibold">Amet minim mollit</h3>
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" absolute bottom-0 right-0 h-1 w-10 bg-cyan-900 transition-all duration-700   group-hover:w-1/2 group-hover:bg-cyan-900"></div>
        </SlantedEdgeRight>
        <SlantedEdgeLeft classNames={slantedEdgeClasses}>
          <div className="absolute left-0 top-0 h-1 w-10 bg-cyan-900 transition-all duration-700  group-hover:w-1/2 group-hover:bg-cyan-900"></div>
          <div className="w-1/2">
            <h3 className="text-lg font-semibold">Amet minim mollit</h3>
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" absolute bottom-0 right-0 h-1 w-10 bg-cyan-900 transition-all duration-700  group-hover:w-1/2 group-hover:bg-cyan-900"></div>
        </SlantedEdgeLeft>
      </div>
    </main>
  )
}
