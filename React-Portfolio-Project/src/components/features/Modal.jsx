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
      className="absolute isolate z-20 h-fit w-4/5 max-w-[500px] overflow-hidden bg-current p-6 2xl:w-1/2"
    >
      <button
        onClick={handleClose}
        className=" group absolute left-4 top-4 cursor-pointer bg-transparent text-2xl font-bold text-cyan-500 shadow-2xl transition hover:scale-110 md:text-3xl xl:text-4xl"
      >
        <span className="shadow-white group-hover:[text-shadow:4px_4px_6px_var(--tw-shadow-color)]">
          𝕏
        </span>
      </button>
      {children}
    </div>
  )
}
