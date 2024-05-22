// a grid of items discussing my coding skills

import { useState } from 'react'
import SlantedEdgeRS from '../../shapes/SlantedEdgeRS'
import SlantedEdgeLS from '../../shapes/SlantedEdgeLS'
import Modal from '../../features/Modal'

import reactLOGOcustom from '../../../assets/grid/reactLOGOcustom.png'
import genaiIMG from '../../../assets/grid/genaiIMG.png'
import fullstackIMG3 from '../../../assets/grid/fullstackIMG3.png'
import problemsolveIMG from '../../../assets/grid/problemsolveIMG.png'

const imgClasses = 'size-1/2 object-cover'

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
      <div className="md:w-6/10 lg:w-6/7 grid h-full w-2/3 grid-cols-1 content-evenly text-center text-sm md:text-2xl lg:grid-cols-2 lg:content-center lg:gap-y-8 xl:w-2/3 2xl:text-3xl">
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
        <div className='z-50 text-white h-full flex flex-col justify-evenly text-center text-4xl'>
          <h2 className="text-6xl">Modal Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            cum nihil provident recusandae tenetur, ipsa unde esse consequatur
            voluptas! Corrupti voluptatum error facere placeat nemo dolores
            laudantium alias voluptate sapiente? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima magni ipsum est maiores itaque, voluptates nihil debitis assumenda ullam expedita asperiores possimus aspernatur velit, quos, numquam amet deleniti? Error, pariatur.
          </p>
        </div>
      </Modal>
    </main>
  )
}
