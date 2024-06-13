// a contact me component with an avatar

import { FaGithub } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
// import { IoInformation } from 'react-icons/io5'
import { GrDocumentUser } from 'react-icons/gr'

// import Tim1noBG from '../assets/Tim1noBG.png/'

export default function Drawer() {
  return (
    <div className="group absolute bottom-0 left-0 -ms-72 flex size-0 cursor-pointer flex-col items-end justify-end border-b-[1px] border-l-[430px] border-t-[560px] border-solid border-b-transparent border-l-[#fff] border-t-transparent font-mono transition-transform duration-500 hover:translate-x-28">
      <div className="-mb-24 me-36 h-0 w-0 cursor-pointer border-b-[120px] border-l-[290px] border-t-[120px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-500 hover:translate-x-44">
        <div className="absolute -ms-[268px] -mt-3.5 flex items-center space-x-8 text-white ">
          <a
            href="https://github.com/Ubuntufoo"
            target="_blank"
            rel="noopener noreferrer"
            className="origin-left text-nowrap transition-all duration-300 hover:scale-[1.08]"
          >
            Github Repository
          </a>
          <FaGithub className="text-3xl" />
        </div>
      </div>
      <div className="-mb-24 me-36 h-0 w-0 cursor-pointer border-b-[120px] border-l-[350px] border-t-[120px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-500 hover:translate-x-60">
        <div className="absolute -ms-[348px] -mt-3.5 flex items-center space-x-7 text-white">
          <a
            href="mailto:TimothyMurphy123@gmail.com"
            className="origin-left text-nowrap transition-all duration-300 hover:scale-[1.08]"
          >
            TimothyMurphy123@gmail.com
          </a>
          <SiMinutemailer className="text-3xl" />
        </div>
      </div>
      <div className=" -mb-24 me-36 h-0 w-0 cursor-pointer border-b-[120px] border-l-[290px] border-t-[120px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-500 hover:translate-x-40">
        <div className="absolute -ms-[259px] -mt-3.5 flex items-center space-x-7 text-white">
          <a
            href="https://www.linkedin.com/in/timothy-murphy-19a702213/"
            target="_blank"
            rel="noopener noreferrer"
            className="origin-left text-nowrap transition-all duration-300 hover:scale-[1.08]"
          >
            LinkedIn Profile
          </a>
          <BiLogoLinkedinSquare className="text-3xl" />
        </div>
      </div>
      <div className="-mb-10 me-36 h-0 w-0 cursor-pointer border-b-[120px] border-l-[290px] border-t-[120px] border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-500 hover:translate-x-40">
        <div className="absolute -ms-[216px] -mt-3.5 flex items-center space-x-7 text-white">
          <a
            href="https://docs.google.com/document/d/15K8jNlhiDEw9anGdRNiWMGWhdIbsLZinUbh73TV_LD8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="origin-left text-nowrap transition-all duration-300 hover:scale-[1.08]"
          >
            View Resume
          </a>
          <GrDocumentUser className="text-2xl" />
        </div>
      </div>
      <div className="mb-7 mr-16">
        {/* <IoInformation className="text-4xl text-gray-800 transition-all duration-700 group-hover:scale-150 lg:text-4xl" /> */}
        <div className="text-2xl text-gray-800 transition-all duration-700 group-hover:scale-[1.4] group-hover:text-black">
          Info
        </div>
      </div>
      <div className="absolute bottom-6 left-20 w-max cursor-none border-b border-black px-3 py-2 text-xl italic text-gray-800 opacity-0 hidden lg:block transition-all duration-700 group-hover:opacity-100">
        Keyboard Navigation Enabled
      </div>
    </div>
  )
}
