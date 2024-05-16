// a contact me component with an avatar

import { FaGithub } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { IoInformation } from 'react-icons/io5'

// import Tim1noBG from '../assets/Tim1noBG.png/'

export default function SideBar() {
  return (
    <div className="absolute top-1 -ms-[370px] -mt-14 h-0 w-0 hover:translate-x-24 cursor-pointer border-b-[410px] border-l-[440px] border-t-[90px] border-solid border-b-transparent border-l-[#fff] border-t-transparent transition-transform duration-700 lg:-ms-[360px]">
      <div className="absolute -ms-16 -mt-2">
        <IoInformation className="text-4xl text-gray-800 lg:text-4xl" />
      </div>
      <div
        className="absolute -ms-[427px] mt-9 h-0 w-0 cursor-pointer border-b-[290px] border-l-[315px] border-t-[70px]
          border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-700 hover:translate-x-44"
      >
        <div className="absolute -ms-[220px] -mt-[4px] flex items-center space-x-3.5 text-white">
          <a
            href="https://github.com/Ubuntufoo"
            className="text-nowrap font-mono leading-relaxed"
          >
            Github Repository
          </a>
          <FaGithub className="text-3xl" />
        </div>
      </div>
      <div
        className="absolute -ms-[427px] top-32 h-0 w-0 cursor-pointer border-b-[290px] border-l-[315px] border-t-[70px]
          border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-700 hover:translate-x-60"
      >
        <div className="absolute -ms-[278px] -mt-[5px] flex items-center space-x-3.5 text-white">
          <p className="font-mono tracking-tighter">TimothyMurphy123@gmail.com</p>
          <SiMinutemailer className="text-3xl" />
        </div>
      </div>
      <div
        className="absolute -ms-[427px] mt-56 h-0 w-0 cursor-pointer border-b-[290px] border-l-[315px] border-t-[70px]
          border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-700 hover:translate-x-40"
      >
        <div className="absolute -ms-[211px] -mt-[6px] flex items-center space-x-3.5 text-white">
          <p className="text-nowrap font-mono">LinkedIn Profile</p>
          <BiLogoLinkedinSquare className="text-3xl" />
        </div>
      </div>
    </div>
  )
}
