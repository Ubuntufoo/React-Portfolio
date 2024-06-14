// a generic full screen modal component

import { useEffect, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

export default function Modal({ children, modalState, handleClose }) {
  const [isOpen, setIsOpen] = useState(modalState.isOpen)

  useEffect(() => {
    setIsOpen(modalState.isOpen)
  }, [modalState])

  if (!isOpen) return null
  return (
    <div className="absolute isolate z-20 h-fit w-5/6 mx-auto right-8 lg:inset-x-0 max-w-[600px] overflow-hidden bg-current p-6 2xl:w-1/2">
      <button
        onClick={handleClose}
        className=" hover:rotate-180 hover:scale-75 transition-all duration-1000 ease-out left-4 group absolute top-4 cursor-pointer bg-transparent text-2xl font-bold text-white rotate  md:text-3xl xl:text-5xl"
      >
        <IoCloseSharp/>
      </button>
      {children}
    </div>
  )
}
