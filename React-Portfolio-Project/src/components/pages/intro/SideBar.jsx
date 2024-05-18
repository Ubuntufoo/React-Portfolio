// a contact me component with an avatar

import { FaGithub } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { IoInformation } from 'react-icons/io5'

// import Tim1noBG from '../assets/Tim1noBG.png/'

export default function SideBar() {
  return (
    <div className="absolute -bottom-80 -ms-96 flex h-0 w-0 cursor-pointer flex-col justify-center border-b-[410px] border-l-[440px] border-t-[1px] border-solid border-b-transparent border-l-[#fff] border-t-transparent transition-transform duration-700 hover:translate-x-24 lg:-ms-[360px]">
      <div className="absolute -ms-[72px] mt-11">
        <IoInformation className="text-4xl text-gray-800 lg:text-4xl" />
      </div>
      <div className="relative -ms-[420px] h-0 w-0 cursor-pointer border-b-[290px] border-l-[325px] border-t-[1px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-700 hover:translate-x-44">
        <div className="absolute -ms-[231px] mt-1 flex items-center space-x-3.5 text-white">
          <a
            href="https://github.com/Ubuntufoo"
            className="text-nowrap font-mono leading-relaxed"
          >
            Github Repository
          </a>
          <FaGithub className="text-3xl" />
        </div>
      </div>
      <div className="absolute -ms-[420px] h-0 w-0 cursor-pointer border-b-[290px] border-l-[325px] border-t-[1px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-700 hover:translate-x-60">
        <div className="absolute -ms-[310px] mt-0.5 flex items-center space-x-3.5 text-white">
          <p className="font-mono">TimothyMurphy123@gmail.com</p>
          <SiMinutemailer className="text-3xl" />
        </div>
      </div>
      <div className="relative -ms-[420px] mb-1 h-0 w-0 cursor-pointer border-b-[290px] border-l-[325px] border-t-[1px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-700 hover:translate-x-40">
        <div className="absolute -ms-[222px] mt-0.5 flex items-center space-x-4 text-white">
          <p className="text-nowrap font-mono">LinkedIn Profile</p>
          <BiLogoLinkedinSquare className="text-3xl" />
        </div>
      </div>
    </div>
  )
}
