// navbar for lg+ screens

export default function NavBarFull() {
  return (
    <div id="NavBar">
      <div className="fixed top-0 flex h-0 w-screen justify-end">
        <div
          className=" absolute top-0 -me-36 -mt-24 h-52 w-[640px]
          rotate-[26deg] transform bg-white opacity-90"
        ></div>
      </div>
      <div className="font-bebas-neue fixed right-0 top-0 z-20 bg-transparent">
        <div className="mt-3 me-5 grid w-72 grid-cols-4 font-semibold text-gray-700 lg:gap-y-2 lg:text-xl">
          <div className="col-span-4 col-start-1 ms-2 tracking-wide">
            <a
              href="#intro"
              className="inline-block hover:scale-110 hover:text-black"
            >
              Intro
            </a>
          </div>
          <div className="col-span-4 col-start-2 hover:font-bold">
            <a
              href="#projects"
              className="inline-block hover:scale-110 hover:text-black"
            >
              Projects
            </a>
          </div>
          <div className="col-span-4 col-start-3 ms-3 tracking-wide hover:font-bold">
            <a
              href="#skills"
              className="inline-block hover:scale-110 hover:text-black"
            >
              Skills
            </a>
          </div>
          <div className="col-span-4 col-start-4 col-end-5 overflow-visible hover:font-bold">
            <a
              href="#roadmap"
              className="inline-block hover:scale-110 hover:text-black"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
