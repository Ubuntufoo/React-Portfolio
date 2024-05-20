// a simple hamburger toggle for mobile screens

import { useState } from 'react'

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      id="NavBarMobile"
      className="font-bebas-neue fixed inset-x-0 top-0 z-20 flex flex-col bg-transparent text-center text-white lg:hidden lg:text-gray-800"
    >
      <div
        onClick={toggleNav}
        className="absolute right-8 top-7 z-40 flex h-10 w-9 cursor-pointer flex-col items-center justify-center space-y-1.5"
      >
        <div
          className={`h-1.5 w-9 origin-right rounded-sm bg-white transition-all duration-300 ${isOpen ? 'translate-y-[-5px] rotate-[-30deg]' : ''}`}
        ></div>
        <div
          className={`h-1.5 w-full origin-center  rounded-sm bg-white transition-all duration-300 ${isOpen ? 'translate-x-4 rotate-90' : ''}`}
        ></div>
        <div
          className={`h-1.5 w-9 origin-right  rounded-sm bg-white transition-all duration-300 ${isOpen ? 'translate-y-[5px] rotate-[30deg]' : ''}`}
        ></div>
      </div>

      <div
        className={`transform ${isOpen ? 'translate-y-48' : ''} -mt-48 flex w-screen flex-col items-center space-y-4 bg-gray-800 py-4 text-lg transition-transform duration-500`}
      >
        <div className="w-fit hover:font-bold">
          <a href="#intro" className="hover:scale-110">
            Intro
          </a>
        </div>
        <div className="w-fit hover:font-bold">
          <a href="#projects" className="hover:scale-110">
            Projects
          </a>
        </div>
        <div className="w-fit hover:font-bold ">
          <a href="#skills" className="hover:scale-110">
            Skills
          </a>
        </div>
        <div className="w-fit hover:font-bold">
          <a href="#contact-me" className="hover:scale-110">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
