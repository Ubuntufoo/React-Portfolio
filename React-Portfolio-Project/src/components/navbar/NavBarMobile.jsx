// a hamburger toggle nav

import { useState } from 'react'
import TimLogoDraft2 from '../../assets/TimLogoDraft2.png'

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      id="NavBarMobile"
      className={`fixed inset-x-0 top-0 z-50 flex flex-col bg-gray-600 text-center text-gray-50 transition-all duration-500 ${isOpen ? 'h-screen' : 'h-0'}`}
    >
      <div
        onClick={toggleNav}
        className="group absolute right-7 top-7 z-40 flex h-10 w-9 cursor-pointer flex-col items-center justify-center space-y-1.5 md:right-11 md:top-11 3xl:right-36 3xl:top-14"
      >
        <div
          className={`h-1.5 w-9 z-1 origin-right rounded bg-black transition-all duration-500 lg:h-2 lg:w-12 ${isOpen ? 'translate-y-[-5px] rotate-[-30deg] lg:translate-y-[-13px] lg:rotate-[-36deg]' : ''}`}
        ></div>
        <div
          className={`h-1.5 z-2 w-full origin-center rounded bg-gray-900 transition-all duration-500 lg:h-2 lg:w-14 ${isOpen ? 'translate-x-4 rotate-90 lg:translate-x-5' : ''} `}
        ></div>
        <div
          className={`h-1.5 z-3 w-9 origin-right rounded bg-gray-800 transition-all duration-500 lg:h-2 lg:w-12 ${isOpen ? 'translate-y-[5px] rotate-[30deg] lg:translate-y-[13px] lg:rotate-[36deg]' : ''}`}
        ></div>
      </div>

      <ul
        id="myMenu"
        className={`transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} flex h-screen flex-col items-center  space-y-8 py-20 text-lg tracking-wide opacity-[.98] transition-transform duration-300 sm:text-xl md:text-2xl`}
      >
        <div>
          <img
            src={TimLogoDraft2}
            alt=""
            className="absolute left-4 top-3 z-40 w-6/10 invert sm:w-2/5 md:left-6 md:top-5 lg:left-14 lg:top-6 lg:w-3/10"
          />
        </div>
        {['Intro', 'Projects', 'Skills', 'Contact'].map((section) => (
          <li className="w-fit hover:scale-110 hover:font-bold" key={section}>
            <a
              data-menuanchor={`${section}`}
              href={`#${section}`}
              className=""
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
