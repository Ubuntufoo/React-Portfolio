// layered cards each detailing a skill

import { useState } from 'react'
import Modal from '../../features/Modal'
import { skillCardsContent } from '../../../utils/images'
import { IoIosExpand } from 'react-icons/io'

export default function SkillsGrid() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    contentIndex: null,
  })

  const handleOpenModal = (index) => {
    setModalState({ isOpen: true, contentIndex: index })
  }

  const handleCloseModal = () => {
    setModalState({ isOpen: false, contentIndex: null })
  }

  return (
    <main className="mx-auto flex h-screen flex-col justify-evenly">
      <div>
        <div className="flex w-full mx-auto flex-wrap place-content-center place-items-center gap-2 pt-8 md:gap-4">
          {skillCardsContent.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(index)}
              className={`
                  group relative size-40 sm:size-48 md:size-56 lg:size-68 xl:size-72 2xl:size-72 cursor-pointer overflow-hidden rounded-lg border border-gray-300 font-roboto
                  shadow-lg shadow-gray-600 transition-all duration-200 active:shadow-none
                 `}
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="absolute size-fit object-cover transition-all duration-500 group-hover:opacity-10"
              />
              <h2 className="absolute flex size-full select-none flex-col place-content-center text-center text-lg font-semibold text-gray-950 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:text-2xl md:text-3xl p-3">
                {skill.title}
                <IoIosExpand className=" mx-auto mt-3 lg:mt-5 animate-pulse text-center text-2xl md:text-3xl font-bold text-gray-950" />
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="neumorph relative mx-auto flex w-fit cursor-default flex-col justify-center p-5 md:p-6 xl:p-8">
        <div className="neumorph absolute inset-x-2/3 -top-3 -z-50 size-8 lg:size-20 skew-x-12 rotate-45 bg-transparent"></div>
        <h1 className="mx-auto bg-gradient-to-br from-gray-950 to-gray-600 bg-clip-text text-center font-roboto text-lg md:text-2xl xl:text-3xl font-bold tracking-wide text-transparent">
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
      {modalState.isOpen && (
        <div
          onClick={handleCloseModal}
          className="absolute left-0 top-0 z-10 h-full w-screen bg-black opacity-75"
          role="button"
          tabIndex={0}
        ></div>
      )}
    </main>
  )
}
