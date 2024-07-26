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
      className={`fixed inset-x-0 top-0 z-50 flex flex-col bg-gray-500 text-center text-gray-950 transition-all ease-in-out duration-300 ${isOpen ? 'h-screen' : 'h-0'}`}
    >
      <div
        onClick={toggleNav}
        className="group absolute right-7 top-7 z-40 flex h-10 w-9 cursor-pointer flex-col items-center justify-center space-y-1.5 md:right-12 md:top-11 3xl:right-36 3xl:top-14"
      >
        <div
          className={`z-1 h-1.5 w-9 origin-right rounded bg-black transition-all duration-500 lg:h-2 lg:w-12 ${isOpen ? 'translate-y-[-5px] rotate-[-29deg] lg:translate-y-[-13px] lg:rotate-[-36deg]' : ''}`}
        ></div>
        <div
          className={`z-2 h-1.5 w-full origin-center rounded bg-gray-900 transition-all duration-500 lg:h-2 lg:w-14 ${isOpen ? 'translate-x-4 rotate-90 lg:translate-x-[21px]' : ''} `}
        ></div>
        <div
          className={`z-3 h-1.5 w-9 origin-right rounded bg-gray-800 transition-all duration-500 lg:h-2 lg:w-12 ${isOpen ? 'translate-y-[5px] rotate-[29deg] lg:translate-y-[13px] lg:rotate-[36deg]' : ''}`}
        ></div>
      </div>

      <div
        className={` ${isOpen ? 'translate-y-0' : '-translate-y-full'} relative mb-10 grid h-screen grid-cols-2 place-content-evenly place-items-center text-xl transition-all duration-300 md:mb-0 md:text-2xl lg:text-3xl`}
      >
        <div className="col-span-2 w-fit space-y-2 3xl:space-y-4">
          <img
            src={logo3}
            alt="logo of computer monitor on easel"
            className="mx-auto w-3/10 brightness-105 xl:w-2/5 2xl:w-1/4 3xl:w-2/5"
          />
          <p>
            <code>&lt;Tim&gt; &lt;Murphy/&gt;</code>
          </p>
        </div>

        <ul
          className={`flex w-[98%] flex-col gap-9 border-r-2 border-gray-600 lg:gap-10 3xl:gap-16`}
        >
          <li className="mx-auto scale-105 cursor-pointer">
            <a
              href="mailto:TimothyMurphy123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <SiMinutemailer className="text-5xl xl:text-6xl" />
            </a>
          </li>
          <li className="mx-auto cursor-pointer">
            <a
              href="https://github.com/Ubuntufoo"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaGithub className="text-5xl  xl:text-6xl" />
            </a>
          </li>
          <li className="mx-auto scale-110 cursor-pointer ps-0.5">
            <a
              href="https://www.linkedin.com/in/timothy-murphy-19a702213/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <BiLogoLinkedinSquare className="text-5xl  xl:text-6xl" />
            </a>
          </li>
          <li className="mx-auto cursor-pointer">
            <a
              href="https://docs.google.com/document/d/15K8jNlhiDEw9anGdRNiWMGWhdIbsLZinUbh73TV_LD8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <GrDocumentUser className="text-5xl  xl:text-6xl" />
            </a>
          </li>
        </ul>

        <ul id="myMenu" className={`mx-auto w-full space-y-10 `}>
          {['Intro', 'Projects', 'Skills', 'Contact'].map((section) => (
            <li className="" key={section}>
              <a
                data-menuanchor={`${section}`}
                href={`#${section}`}
                onClick={toggleNav}
                className="neumorph mx-auto block w-1/2 cursor-pointer rounded-xl py-2 font-kreon transition hover:scale-110 hover:font-semibold md:w-2/5 lg:py-3 xl:w-1/3 xl:py-3 2xl:w-1/4 3xl:py-5"
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
