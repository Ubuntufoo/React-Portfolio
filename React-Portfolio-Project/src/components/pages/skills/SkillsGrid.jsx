// a grid of items discussing my coding skills

import React, { useState } from 'react'
import SlantedEdgeRS from '../../shapes/SlantedEdgeRS'
import SlantedEdgeLS from '../../shapes/SlantedEdgeLS'
import Modal from '../../features/Modal'
import { skillCardsContent } from '../../../utils/utils'

const imgClasses =
  'size-1/2 object-cover group-hover:brightness-125 transition-all duration-700 '
const gridContentClasses = 'flex h-full place-items-center xl:leading-10'
const gridBorderAnimationClasses =
  'absolute h-full -z-50 w-1/12 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white'
const slantedEdgeClasses =
  'group relative h-fit bg-cyan-950 text-gray-50 transition-all duration-700 hover:bg-white hover:text-cyan-900 border-t-2 border-b-2 border-gray-900 hover:[text-shadow:6px_4px_4px_var(--tw-shadow-color)] shadow-cyan-600 cursor-pointer size-fit whitespace-pre'

export default function SkillsGrid() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    contentIndex: null,
  })

  const handleOpenModal = (img, index) => {
    setModalState({ isOpen: true, image: img, contentIndex: index })
  }

  const handleCloseModal = () => {
    setModalState({ isOpen: false, image: '', contentIndex: null })
  }

  return (
    <main className="flex size-full place-content-center place-items-center py-5">
      <div className="grid h-full w-2/3 grid-cols-1 content-evenly text-center text-xs sm:text-base md:w-6/10 md:text-xl lg:w-6/7 lg:grid-cols-2 lg:content-center lg:gap-y-12 lg:text-2xl xl:w-6/10 2xl:me-4">
        {skillCardsContent.map((content, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <SlantedEdgeRS
                onClick={() => handleOpenModal(content.img, index)}
                classNames={`${slantedEdgeClasses} border-l-2`}
              >
                <div
                  className={`left-0 top-0 ${gridBorderAnimationClasses}`}
                ></div>
                <div className={gridContentClasses}>
                  <h3 className="w-full font-semibold">{content.title}</h3>
                  <img
                    className={imgClasses}
                    src={content.img}
                    alt={content.title}
                  />
                </div>
                <div
                  className={`bottom-0 left-0 ${gridBorderAnimationClasses}`}
                ></div>
              </SlantedEdgeRS>
            ) : (
              <SlantedEdgeLS
                onClick={() => handleOpenModal(content.img, index)}
                classNames={`${slantedEdgeClasses} border-r-2`}
              >
                <div
                  className={`right-0 top-0 ${gridBorderAnimationClasses}`}
                ></div>
                <div className={`flex-row-reverse ${gridContentClasses}`}>
                  <h3 className="w-full font-semibold">{content.title}</h3>
                  <img
                    className={imgClasses}
                    src={content.img}
                    alt={content.title}
                  />
                </div>
                <div
                  className={`bottom-0 right-0 ${gridBorderAnimationClasses}`}
                ></div>
              </SlantedEdgeLS>
            )}
          </React.Fragment>
        ))}
      </div>
      {modalState.isOpen && (
        <Modal modalState={modalState} handleClose={handleCloseModal}>
          {modalState.contentIndex !== null && (
            <div className="z-50 flex h-fit flex-col items-stretch justify-between whitespace-pre-line text-center text-sm text-white md:px-5 md:text-lg xl:text-xl">
              <h2 className="py-3 text-lg font-semibold underline underline-offset-8 xl:text-2xl">
                {skillCardsContent[modalState.contentIndex].firstHeader}
              </h2>
              <p className="text-pretty py-3">
                {skillCardsContent[modalState.contentIndex].firstPara}
              </p>
              <hr className="my-2" />
              <h2 className="py-3 text-lg font-semibold underline underline-offset-8 xl:text-2xl">
                {skillCardsContent[modalState.contentIndex].secondHeader}
              </h2>
              <p className="text-pretty py-3">
                {skillCardsContent[modalState.contentIndex].secondPara}
              </p>
            </div>
          )}
          <img
            className="absolute right-1 top-0 -z-10 size-full object-contain opacity-35 blur-sm"
            src={skillCardsContent[modalState.contentIndex].img}
            alt="Modal Image"
          />
        </Modal>

      )}
      {modalState.isOpen && (
        <div
          onClick={handleCloseModal}
          className="absolute left-0 top-0 z-10 h-screen w-screen bg-black opacity-75"></div>
      )}
    </main>
  )
}
