// a contact me component with an avatar

import { FaGithub } from 'react-icons/fa'

export default function SideBar() {
  return (
    <div className="absolute top-0 -ms-64 h-0 w-0 cursor-pointer border-b-[440px] border-l-[380px] border-t-[140px] border-solid border-b-transparent border-l-[#fff] border-t-transparent opacity-90 transition-transform duration-1000 hover:translate-x-36">
      <p className="absolute right-9 text-xl font-semibold text-gray-800 hover:font-bold hover:text-black">
        Contact
      </p>
      <div
        className="absolute -ms-96 h-0 w-0 cursor-pointer border-b-[300px] border-l-[260px] border-t-[90px]
          border-solid border-b-transparent border-l-black border-t-transparent transition-transform duration-1000 hover:translate-x-28"
      >
        <p>
          <FaGithub className="absolute right-10 text-4xl text-white" />
        </p>
      </div>
      <div
        className="absolute -ms-96 mt-32 h-0 w-0 cursor-pointer border-b-[300px] border-l-[260px] border-t-[90px]
          border-solid border-b-transparent border-l-gray-800 border-t-transparent transition-transform duration-1000 hover:translate-x-28"
      ></div>
      <div
        className="absolute -ms-96 mt-64 h-0 w-0 cursor-pointer border-b-[300px] border-l-[260px] border-t-[90px]
          border-solid border-b-transparent border-l-gray-500 border-t-transparent transition-transform duration-1000 hover:translate-x-28"
      ></div>
    </div>
  )
}
