// a generic full screen modal component

import { useEffect, useState } from 'react'

export default function Modal({ children, modalState, handleClose }) {
  const [isOpen, setIsOpen] = useState(modalState.isOpen)
  const [image, setImage] = useState(modalState.image)

  useEffect(() => {
    setIsOpen(modalState.isOpen)
    setImage(modalState.image)
  }, [modalState])

  if (!isOpen) return null
  return (
    <div
      onClick={handleClose}
      className="absolute isolate h-3/4 w-2/3 overflow-hidden bg-current z-20"
    >
      <button
        onClick={handleClose}
        className=" group absolute right-10 top-4 cursor-pointer bg-transparent py-2 text-6xl font-bold text-white shadow-2xl transition hover:scale-110"
      >
        <span className="shadow-white group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)]">
          𝕏
        </span>
      </button>
      {children}
      <img
        className="absolute top-0 -z-10 size-full object-cover opacity-60 blur"
        src={image}
      />

    </div>
  )
}
