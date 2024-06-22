// a child component, full screen modal

import { useEffect, useState, useRef } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

export default function Modal({ children, modalState, handleClose }) {
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
      className="absolute right-8 isolate z-20 mx-auto h-fit w-5/6 max-w-[600px] overflow-hidden bg-current p-6 lg:inset-x-0 2xl:w-1/2"
    >
      <button
        onClick={handleClose}
        className="rotate group absolute left-4 top-4 cursor-pointer bg-transparent text-2xl font-bold text-white transition-all duration-1000 ease-out hover:rotate-180 hover:scale-75 md:text-3xl xl:text-5xl"
        aria-label="Close modal"
      >
        <IoCloseSharp />
      </button>
      <div id="modal-content">{children}</div>
    </div>
  )
}
