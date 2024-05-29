// a contact me component with an avatar

import { FaGithub } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { IoInformation } from 'react-icons/io5'
import { GrDocumentUser } from 'react-icons/gr'

// import Tim1noBG from '../assets/Tim1noBG.png/'

export default function SideBar() {
  return (
    <div className="group absolute bottom-0 left-0 -ms-72 flex size-0 hover:translate-x-28 cursor-pointer flex-col items-end justify-end border-b-[1px] border-l-[391px] border-t-[600px] border-solid border-b-transparent border-l-[#fff] border-t-transparent font-mono transition-transform duration-500">
      <div className="-mb-48 me-28 h-0 w-0 cursor-pointer border-b-[290px] border-l-[325px] border-t-[1px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-500 hover:translate-x-44">
        <div className="absolute -ms-[251px] mt-2 flex items-center space-x-4 text-white">
          <a
            href="https://github.com/Ubuntufoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nowrap leading-relaxed"
          >
            Github Repository
          </a>
          <FaGithub className="text-3xl" />
        </div>
      </div>
      <div className="-mb-48 me-28 h-0 w-0 cursor-pointer border-b-[290px] border-l-[350px] border-t-[1px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-500 hover:translate-x-60">
        <div className="absolute -ms-[331px] mt-2 flex items-center space-x-5 text-white">
          <a
            href="mailto:TimothyMurphy123@gmail.com"
            className="text-nowrap leading-relaxed"
          >
            TimothyMurphy123@gmail.com
          </a>
          <SiMinutemailer className="text-3xl" />
        </div>
      </div>
      <div className="-mb-48 me-28 h-0 w-0 cursor-pointer border-b-[290px] border-l-[325px] border-t-[1px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-500 hover:translate-x-40">
        <div className="absolute -ms-[242px] mt-2 flex items-center space-x-5 text-white">
          <a
            href="https://www.linkedin.com/in/timothy-murphy-19a702213/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nowrap"
          >
            LinkedIn Profile
          </a>
          <BiLogoLinkedinSquare className="text-3xl" />
        </div>
      </div>
      <div className="-mb-64 me-28 h-0 w-0 cursor-pointer border-b-[290px] border-l-[325px] border-t-[1px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-500 hover:translate-x-40">
        <div className="absolute -ms-[198px] mt-2 flex items-center space-x-6 text-white">
          <a
            href="https://docs.google.com/document/d/15K8jNlhiDEw9anGdRNiWMGWhdIbsLZinUbh73TV_LD8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nowrap"
          >
            View Resume
          </a>
          <GrDocumentUser className="text-2xl" />
        </div>
      </div>
      <div className="mb-8 mr-12">
        <IoInformation className="text-4xl text-gray-800 transition-all duration-700 group-hover:scale-150 group-hover:animate-pulse lg:text-4xl" />
      </div>
    </div>
  )
}
