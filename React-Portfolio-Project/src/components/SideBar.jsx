// a contact me component with an avatar

import { FaGithub } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { PiMailboxFill } from 'react-icons/pi'


export default function SideBar() {
  return (
    <div className="absolute top-0 -ms-80 h-0 w-0 cursor-pointer border-b-[410px] border-l-[440px] border-t-[200px] border-solid border-b-transparent border-l-[#fff] border-t-transparent opacity-90 transition-transform duration-1000 translate-x-56">
      <p className="absolute right-9 text-xl font-semibold text-gray-800 hover:font-bold hover:text-black">
        Contact
      </p>
      <div
        className="absolute -ms-[590px] h-0 w-0 cursor-pointer border-b-[300px] border-l-[320px] border-t-[90px]
          border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-1000 hover:translate-x-44"
      >
        <div className="absolute right-8 -mt-1 flex items-center space-x-3 text-white">
          <a href="https://github.com/Ubuntufoo" className="font-mono leading-relaxed text-nowrap">
            Github Repository
          </a>
          <FaGithub className="text-3xl" />
        </div>
      </div>
      <div
        className="absolute -ms-[590px] mt-36 h-0 w-0 cursor-pointer border-b-[300px] border-l-[320px] border-t-[90px]
          border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-1000 hover:translate-x-60"
      >
        <div className="absolute right-8 -mt-1 flex items-center space-x-3 text-white">
          <p className="font-mono">TimothyMurphy123@gmail.com</p>
          <SiMinutemailer className="text-3xl" />
        </div>
      </div>
      <div
        className="absolute -ms-[590px] mt-72 h-0 w-0 cursor-pointer border-b-[300px] border-l-[320px] border-t-[90px]
          border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-1000 hover:translate-x-44"
      >
        <div className="absolute right-8 -mt-1 flex items-center space-x-3 text-white">
          <p className="text-nowrap font-mono">Hyannis, MA, 02601</p>
          <PiMailboxFill className="text-3xl" />
        </div>
      </div>
    </div>
  )
}
