// a generic full screen modal component

import { useEffect, useState } from 'react'

export default function Modal({ children, modalState, handleClose }) {
  const [isOpen, setIsOpen] = useState(modalState.isOpen)

  useEffect(() => {
    setIsOpen(modalState.isOpen)
  }, [modalState])

  if (!isOpen) return null
  return (
    <div
      onClick={handleClose}
      className="absolute isolate z-20 h-fit w-4/5 max-w-[600px] overflow-hidden bg-current p-4 2xl:w-1/2"
    >
      <button
        onClick={handleClose}
        className=" group absolute left-6 top-6 cursor-pointer bg-transparent text-2xl font-bold text-white shadow-2xl transition hover:scale-110 md:text-3xl xl:text-4xl"
      >
        <span className="shadow-white group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)]">
          𝕏
        </span>
      </button>
      {children}
    </div>
  )
}
