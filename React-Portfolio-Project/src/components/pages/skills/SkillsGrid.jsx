// a grid of items each focusing on a different skill, with modal popups on click

import React, { useState } from 'react';
import SlantedEdgeRS from '../../shapes/SlantedEdgeRS';
import SlantedEdgeLS from '../../shapes/SlantedEdgeLS';
import Modal from '../../features/Modal';
import { skillCardsContent } from '../../../utils/images';

// classes lifted up for reuse in multiple components
const imgClasses =
  'size-1/2 object-cover group-hover:brightness-125 transition-all duration-700 ';
const gridContentClasses = 'flex h-full place-items-center xl:leading-relaxed';
const gridBorderAnimationClasses =
  'absolute h-full -z-50 w-1/12 bg-cyan-950 transition-all duration-1000 group-hover:w-1/2 group-hover:bg-white';
const slantedEdgeClasses =
  'group relative h-fit bg-cyan-950 text-gray-50 transition-all duration-700 hover:bg-white hover:text-cyan-900 border-t-2 border-b-2 border-slate-800 hover:[text-shadow:6px_4px_4px_var(--tw-shadow-color)] shadow-cyan-600 cursor-pointer size-fit whitespace-pre';

export default function SkillsGrid() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    contentIndex: null,
  });

  const handleOpenModal = (img, index) => {
    setModalState({ isOpen: true, image: img, contentIndex: index });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, image: '', contentIndex: null });
  };

  return (
    <main className="flex size-full place-content-center place-items-center py-5">
      <div
        className="grid h-full w-2/3 gap-y-6 grid-cols-1 content-evenly text-center text-xs sm:text-base md:w-6/10 md:text-lg lg:w-6/7 lg:grid-cols-2 lg:content-center lg:gap-y-12 lg:text-xl 2xl:text-2xl xl:w-13/20 2xl:me-14"
        role="grid"
      >
        {/* React.Fragment used to avoid unnecessary wrapper tags cluttering DOM */}
        {skillCardsContent.map((content, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <SlantedEdgeRS
                onClick={() => handleOpenModal(content.img, index)}
                classNames={`${slantedEdgeClasses} border-l-2`}
                role="button"
                tabIndex={0}
              >
                <div
                  className={`left-0 top-0 ${gridBorderAnimationClasses}`}
                  aria-hidden="true"
                ></div>
                <div className={gridContentClasses}>
                  <h3 className="w-full font-roboto font-semibold">
                    {content.title}
                  </h3>
                  <img
                    className={imgClasses}
                    src={content.img}
                    alt={content.title}
                  />
                </div>
                <div
                  className={`bottom-0 left-0 ${gridBorderAnimationClasses}`}
                  aria-hidden="true"
                ></div>
              </SlantedEdgeRS>
            ) : (
              <SlantedEdgeLS
                onClick={() => handleOpenModal(content.img, index)}
                classNames={`${slantedEdgeClasses} border-r-2`}
                role="button"
                tabIndex={0}
              >
                <div
                  className={`right-0 top-0 ${gridBorderAnimationClasses}`}
                  aria-hidden="true"
                ></div>
                <div
                  className={`flex-row-reverse ${gridContentClasses}`}
                  role="gridcell"
                >
                  <h3 className="w-full font-roboto font-semibold">
                    {content.title}
                  </h3>
                  <img
                    className={imgClasses}
                    src={content.img}
                    alt={content.title}
                  />
                </div>
                <div
                  className={`bottom-0 right-0 ${gridBorderAnimationClasses}`}
                  aria-hidden="true"
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
              <h2 className="py-3 font-roboto text-lg font-semibold underline underline-offset-8 xl:text-2xl">
                {skillCardsContent[modalState.contentIndex].firstHeader}
              </h2>
              <p className="text-pretty py-3">
                {skillCardsContent[modalState.contentIndex].firstPara}
              </p>
              <hr className="my-6" />
              <h2 className="py-3 font-roboto text-lg font-semibold underline underline-offset-8 xl:text-2xl">
                {skillCardsContent[modalState.contentIndex].secondHeader}
              </h2>
              <p className="text-pretty py-3">
                {skillCardsContent[modalState.contentIndex].secondPara}
              </p>
            </div>
          )}
          <img
            className="absolute right-1 top-0 -z-10 size-full object-contain opacity-25 blur-sm"
            src={skillCardsContent[modalState.contentIndex].img}
            alt="Modal Image"
          />
        </Modal>
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
  );
}
