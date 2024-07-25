// a hamburger toggle nav

import { useState } from 'react'
import KeyboardNoti from '../features/KeyboardNoti'
import logo3 from '../../assets/logo3.png'
import { FaGithub } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { GrDocumentUser } from 'react-icons/gr'

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      id="NavBarMobile"
      className={`fixed inset-x-0 top-0 z-50 flex flex-col bg-gray-500 text-center text-gray-950 transition-all duration-500 ${isOpen ? 'h-screen' : 'h-0'}`}
    >
      <div
        onClick={toggleNav}
        className="group absolute right-7 top-7 z-40 flex h-10 w-9 cursor-pointer flex-col items-center justify-center space-y-1.5 md:right-11 md:top-11 3xl:right-36 3xl:top-14"
      >
        <div
          className={`h-1.5 w-9 z-1 origin-right rounded bg-black transition-all duration-500 lg:h-2 lg:w-12 ${isOpen ? 'translate-y-[-5px] rotate-[-29deg] lg:translate-y-[-13px] lg:rotate-[-36deg]' : ''}`}
        ></div>
        <div
          className={`h-1.5 z-2 w-full origin-center rounded bg-gray-900 transition-all duration-500 lg:h-2 lg:w-14 ${isOpen ? 'translate-x-4 rotate-90 lg:translate-x-[21px]' : ''} `}
        ></div>
        <div
          className={`h-1.5 z-3 w-9 origin-right rounded bg-gray-800 transition-all duration-500 lg:h-2 lg:w-12 ${isOpen ? 'translate-y-[5px] rotate-[29deg] lg:translate-y-[13px] lg:rotate-[36deg]' : ''}`}
        ></div>
      </div>

      <div className={`transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} h-screen grid grid-cols-2 place-content-evenly place-items-center gap-y-6 transition-transform duration-300 relative text-xl`}>
        <div className='w-fit space-y-2 col-span-2'>
          <img
            src={logo3}
            alt="logo of computer monitor on easel"
            className="brightness-105 w-3/10 mx-auto"
          />
          <p><code>&lt;Tim&gt; &lt;Murphy/&gt;</code></p>
        </div>


        <ul
          id
          className={``}
        >
          <li className="">
            <a
              href="https://github.com/Ubuntufoo"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
            </a>
            <FaGithub className="text-4xl" />
          </li>
          <li className="">
            <a
              href="mailto:TimothyMurphy123@gmail.com"
              className=""
            >
            </a>
            <SiMinutemailer className="text-4xl" />
          </li>
        </ul>


        <ul
          id="myMenu"
          className={`space-y-10`}
        >
          {['Intro', 'Projects', 'Skills', 'Contact'].map((section) => (
            <li className="w-full neumorph px-4 mx-auto py-2 rounded-xl font-kreon hover:scale-110 hover:font-bold transition" key={section}>
              <a
                data-menuanchor={`${section}`}
                href={`#${section}`}
                onClick={toggleNav}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <KeyboardNoti />
      </div>

    </nav>
  )
}
