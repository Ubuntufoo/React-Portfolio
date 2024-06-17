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
      className="fixed inset-x-0 top-0 z-20 flex flex-col bg-transparent text-center text-white lg:hidden lg:text-gray-800"
    >
      <div
        onClick={toggleNav}
        className="absolute right-5 top-5 z-40 flex h-10 w-9 cursor-pointer flex-col items-center justify-center space-y-1.5"
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

      <ul id="myMenu"
        className={`transform ${isOpen ? 'translate-y-60' : ''} -mt-60 flex w-screen flex-col items-center space-y-6 bg-gray-800 py-6 text-lg transition-transform duration-500`}
      >
        {['Intro', 'Projects', 'Skills', 'Contact'].map((section) => (
          <li className="w-fit hover:font-bold" key={section}>
            <a
              data-menuanchor={`${section}`}
              href={`#${section}`}
              className="hover:scale-110"
              onClick={toggleNav}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
