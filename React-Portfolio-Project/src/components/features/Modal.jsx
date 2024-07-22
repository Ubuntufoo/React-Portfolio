// a child component, full screen modal

import { useEffect, useState, useRef } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

export default function Modal({ modalContent, modalState, handleClose }) {
  const [isOpen, setIsOpen] = useState(modalState.isOpen)
  const modalRef = useRef(null)
  const previouslyFocusedElement = useRef(null)

  useEffect(() => {
    setIsOpen(modalState.isOpen)

    if (modalState.isOpen) {
      // Store the previously focused element
      previouslyFocusedElement.current = document.activeElement
      // Focus the modal when it opens
      modalRef.current?.focus()
    } else {
      // Return focus to the previously focused element when the modal closes
      previouslyFocusedElement.current?.focus()
    }
  }, [modalState])

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="Modal for Highlighted Skill"
      aria-describedby="A description of the highlighted skill."
      className="absolute -inset-x-20 z-50 mx-auto h-fit w-9/10 max-w-[650px] overflow-hidden rounded-3xl bg-current p-4 lg:inset-x-0 2xl:w-1/2"
    >
      <button
        onClick={handleClose}
        className="rotate group absolute right-[7%] top-[5%] cursor-pointer bg-transparent text-2xl font-bold text-white transition-all duration-1000 ease-out hover:rotate-180 hover:scale-75 md:text-3xl xl:text-5xl"
        aria-label="Close modal"
      >
        <IoCloseSharp className="bg-inherit" />
      </button>
      <div id="modal-content">
        <div className="z-50 mt-6 flex h-fit flex-col items-stretch justify-between whitespace-pre-line text-sm text-gray-50 sm:text-lg md:mt-12 md:px-5 md:text-xl xl:text-xl">
          <h2 className="py-1 font-roboto text-lg font-semibold underline underline-offset-8 md:py-5 md:text-2xl xl:text-3xl">
            {modalContent[modalState.contentIndex].firstHeader}
          </h2>
          <p className="text-pretty py-3">
            {modalContent[modalState.contentIndex].firstPara}
          </p>
          {modalContent[modalState.contentIndex].secondHeader && (
            <hr className="my-3 md:my-6" />
          )}
          <h2 className="py-1 text-right font-roboto text-lg font-semibold underline underline-offset-8 md:py-5 md:text-2xl xl:text-3xl">
            {modalContent[modalState.contentIndex].secondHeader}
          </h2>
          <p className="text-pretty py-3">
            {modalContent[modalState.contentIndex].secondPara}
          </p>
        </div>
        <img
          className="absolute right-1 top-0 -z-10 size-full object-contain opacity-30 blur-sm"
          src={modalContent[modalState.contentIndex].img}
          alt="Modal Image"
        />
      </div>
    </div>
  )
}
