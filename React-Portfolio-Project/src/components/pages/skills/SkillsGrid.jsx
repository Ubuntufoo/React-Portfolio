// a grid of items discussing my coding skills

import SlantedEdgeRS from '../../shapes/SlantedEdgeRS'
import SlantedEdgeLS from '../../shapes/SlantedEdgeLS'

import reactLOGOcustom from '../../../assets/grid/reactLOGOcustom.png'
import genaiIMG from '../../../assets/grid/genaiIMG.png'
import fullstackIMG3 from '../../../assets/grid/fullstackIMG3.png'
import problemsolveIMG from '../../../assets/grid/problemsolveIMG.png'

const imgClasses = 'size-1/2 object-cover'

const gridContentClasses = 'flex h-full place-items-center'

const gridBorderAnimationClasses =
  'absolute h-1 w-10 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white'

const slantedEdgeClasses =
  'group relative bg-cyan-950 text-white transition-all duration-700 hover:scale-110 hover:bg-white hover:text-cyan-950 hover:z-50 border-t-2 border-b-2 border-white hover-shadow-2xl cursor-pointer m-auto'

export default function SkillsGrid() {
  return (
    <main className="flex my-auto size-full place-content-center">
      <div className="grid my-auto size-4/5 grid-cols-1 gap-y-2.5 text-sm text-center md:grid-cols-2 md:gap-y-10">
        <SlantedEdgeRS classNames={`${slantedEdgeClasses} border-l-2`}>
          <div className={`left-0 top-0 ${gridBorderAnimationClasses}`}></div>
          <div className={gridContentClasses}>
            <h3 className="w-full font-semibold">
              React <br /> Specialization
            </h3>

            <img
              className={imgClasses}
              src={reactLOGOcustom}
              alt="reactLOGOcustom"
            />
          </div>
          <div
            className={`bottom-0 left-0 ${gridBorderAnimationClasses}`}
          ></div>
        </SlantedEdgeRS>

        <SlantedEdgeLS classNames={`${slantedEdgeClasses} border-r-2`}>
          <div className={`right-0 top-0 ${gridBorderAnimationClasses}`}></div>
          <div className={`flex-row-reverse ${gridContentClasses}`}>
            <h3 className="w-full font-semibold">
              Generative AI <br /> Integration
            </h3>
            <img className={imgClasses} src={genaiIMG} alt="reactLOGOcustom" />
          </div>
          <div
            className={`bottom-0 right-0 ${gridBorderAnimationClasses}`}
          ></div>
        </SlantedEdgeLS>
        <SlantedEdgeRS classNames={`${slantedEdgeClasses} border-l-2`}>
          <div className={`left-0 top-0 ${gridBorderAnimationClasses}`}></div>
          <div className={gridContentClasses}>
            <h3 className="w-full font-semibold">
              Full-Stack <br /> Experience
            </h3>
            <img
              className={imgClasses}
              src={fullstackIMG3}
              alt="reactLOGOcustom"
            />
          </div>
          <div
            className={`bottom-0 left-0 ${gridBorderAnimationClasses}`}
          ></div>
        </SlantedEdgeRS>
        <SlantedEdgeLS classNames={`${slantedEdgeClasses} border-r-2`}>
          <div className={`right-0 top-0 ${gridBorderAnimationClasses}`}></div>
          <div className={`flex-row-reverse ${gridContentClasses}`}>
            <h3 className="w-full font-semibold">
              Projects <br /> With Purpose
            </h3>
            <img
              className={imgClasses}
              src={problemsolveIMG}
              alt="reactLOGOcustom"
            />
          </div>
          <div
            className={`bottom-0 right-0 ${gridBorderAnimationClasses}`}
          ></div>
        </SlantedEdgeLS>
      </div>
    </main>
  )
}
