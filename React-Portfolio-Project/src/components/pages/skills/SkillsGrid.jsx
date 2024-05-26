// a grid of items discussing my coding skills

import { useState } from 'react'
import SlantedEdgeRS from '../../shapes/SlantedEdgeRS'
import SlantedEdgeLS from '../../shapes/SlantedEdgeLS'
import Modal from '../../features/Modal'

import reactLOGOcustom from '../../../assets/grid/reactLOGOcustom.png'
import genaiIMG from '../../../assets/grid/genaiIMG.png'
import fullstackIMG3 from '../../../assets/grid/fullstackIMG3.png'
import problemsolveIMG from '../../../assets/grid/problemsolveIMG.png'

const imgClasses =
  'size-1/2 object-cover group-hover:brightness-125 transition-all duration-700'

const gridContentClasses = 'flex h-full place-items-center'

const gridBorderAnimationClasses =
  'absolute h-full -z-50 w-1/12 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white'

const slantedEdgeClasses =
  'group relative h-fit bg-cyan-950 text-white transition-all duration-700 hover:bg-white hover:text-cyan-900 border-t-2 border-b-2 border-white hover:[text-shadow:3px_4px_5px_var(--tw-shadow-color)] shadow-cyan-600 cursor-pointer size-fit'

export default function SkillsGrid() {
  const [modalState, setModalState] = useState({ isOpen: false, image: '' })

  const handleOpenModal = (img) => {
    setModalState({ isOpen: true, image: img })
  }

  const handleCloseModal = () => {
    setModalState({ isOpen: false, image: '' })
  }

  return (
    <main className="flex size-full place-content-center place-items-center py-5">
      <div className="grid h-full w-2/3 grid-cols-1 content-evenly text-center text-xs sm:text-base md:w-6/10 md:text-xl lg:w-6/7 lg:grid-cols-2 lg:content-center lg:gap-y-8 lg:text-2xl xl:w-2/3 2xl:text-3xl">
        <SlantedEdgeRS
          onClick={() => handleOpenModal(reactLOGOcustom)}
          classNames={`${slantedEdgeClasses} border-l-2`}
        >
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

        <SlantedEdgeLS
          onClick={() => handleOpenModal(genaiIMG)}
          classNames={`${slantedEdgeClasses} border-r-2`}
        >
          <div className={`right-0 top-0 ${gridBorderAnimationClasses}`}></div>
          <div className={`flex-row-reverse ${gridContentClasses}`}>
            <h3 className="w-full font-semibold">
              Generative AI <br /> Integration
            </h3>
            <img className={imgClasses} src={genaiIMG} alt="genaiIMG" />
          </div>
          <div
            className={`bottom-0 right-0 ${gridBorderAnimationClasses}`}
          ></div>
        </SlantedEdgeLS>

        <SlantedEdgeRS
          onClick={() => handleOpenModal(fullstackIMG3)}
          classNames={`${slantedEdgeClasses} border-l-2`}
        >
          <div className={`left-0 top-0 ${gridBorderAnimationClasses}`}></div>
          <div className={gridContentClasses}>
            <h3 className="w-full font-semibold">
              Full-Stack <br /> Experience
            </h3>
            <img
              className={imgClasses}
              src={fullstackIMG3}
              alt="fullstackIMG3"
            />
          </div>
          <div
            className={`bottom-0 left-0 ${gridBorderAnimationClasses}`}
          ></div>
        </SlantedEdgeRS>

        <SlantedEdgeLS
          onClick={() => handleOpenModal(problemsolveIMG)}
          classNames={`${slantedEdgeClasses} border-r-2`}
        >
          <div className={`right-0 top-0 ${gridBorderAnimationClasses}`}></div>
          <div className={`flex-row-reverse ${gridContentClasses}`}>
            <h3 className="w-full font-semibold">
              Projects <br /> With Purpose
            </h3>
            <img
              className={imgClasses}
              src={problemsolveIMG}
              alt="problemsolveIMG"
            />
          </div>
          <div
            className={`bottom-0 right-0 ${gridBorderAnimationClasses}`}
          ></div>
        </SlantedEdgeLS>
      </div>
      <Modal modalState={modalState} handleClose={handleCloseModal}>
        <div className="z-50 mx-2 flex h-fit flex-col items-stretch justify-between text-center text-sm text-white">
          <h2 className="py-3 text-lg font-semibold">React v18</h2>
          <p className="whitespace-pre-wrap py-3">
            My focus is on modern React, utilizing functional components, hooks,
            and the latest features. <br /> <br /> I prefer learning from the
            ground up, and therefore, I do not depend on component libraries.
          </p>
          <hr className="my-1" />
          <h2 className="py-3 text-lg font-semibold">Learning Roadmap</h2>
          <p className="py-3">
            There is no end in sight on my learning path. <br /> <br />I am in
            the process of adding TypeScript to my skill-set. A revisit of raw Javascript is
            back on my radar as well.
          </p>
        </div>
      </Modal>
      {modalState.isOpen && (
        <div className="absolute left-0 top-0 z-10 h-screen w-screen bg-black opacity-75"></div>
      )}
    </main>
  )
}
