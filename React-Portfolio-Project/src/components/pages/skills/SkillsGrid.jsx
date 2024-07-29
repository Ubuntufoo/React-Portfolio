// layered cards each detailing a skill

import { useState } from 'react'
import Modal from '../../features/Modal'
import { skillCardsContent } from '../../../utils/skillcards'
import { IoIosExpand } from 'react-icons/io'

export default function SkillsGrid() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    contentIndex: null,
  })
  const [isHovered, setIsHovered] = useState(false)

  const handleOpenModal = (index) => {
    setModalState({ isOpen: true, contentIndex: index })
  }

  const handleCloseModal = () => {
    setModalState({ isOpen: false, contentIndex: null })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const delayClasses = ['delay-0', 'delay-150', 'delay-300', 'delay-[450ms]']

  return (
    <main className="mx-auto flex h-screen flex-col justify-evenly 2xl:mt-12 3xl:mt-6">
      {modalState.isOpen && (
        <div
          onClick={handleCloseModal}
          className="absolute left-0 z-50 top-0 h-full w-full bg-black opacity-65"
          role="button"
          tabIndex={0}
        ></div>
      )}
      <div>
        <div className="mx-auto flex w-19/20 flex-wrap place-content-center place-items-center gap-2 md:gap-3 xl:w-full">
          {skillCardsContent.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(index)}
              className={`
                group relative size-40 cursor-pointer overflow-hidden rounded-lg border border-gray-300 shadow-lg shadow-gray-600 transition-all
                duration-200 active:shadow-none sm:size-48 md:size-60 3xl:size-72
              `}
            >
              <img
                src={skill.img}
                alt={skill.title}
                className={`
                  absolute inset-0 z-40 size-full object-cover transition-all duration-500 group-hover:opacity-10
                  ${isHovered ? `opacity-10 ${delayClasses[index % delayClasses.length]}` : ``}
                `}
              />
              <h2
                className={`
                absolute flex size-full select-none flex-col place-content-center p-3 text-center text-lg font-semibold text-gray-950 opacity-0 transition-all duration-500
                ${isHovered ? 'opacity-100' : 'group-hover:opacity-100'}
                sm:text-2xl md:text-3xl
              `}
              >
                {skill.title}
                <IoIosExpand className="mx-auto mt-3 animate-pulse text-center text-2xl font-bold text-gray-950 md:text-3xl lg:mt-5" />
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div
        className="neumorph relative bottom-2 mx-auto flex w-fit cursor-default flex-col justify-center rounded-xl p-5 md:p-6 xl:p-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="neumorph absolute inset-x-2/3 -top-3 -z-50 size-8 rotate-45 skew-x-12 bg-transparent md:size-16 lg:size-16 2xl:size-20"></div>
        <h1 className="mx-auto bg-gradient-to-br from-gray-950 to-gray-600 bg-clip-text text-center text-lg font-bold tracking-wide text-transparent md:text-2xl xl:text-3xl">
          Click a tile to learn more
        </h1>
      </div>
      {modalState.isOpen && (
        <Modal
          modalContent={skillCardsContent}
          modalState={modalState}
          handleClose={handleCloseModal}
        />
      )}
    </main>
  )
}
