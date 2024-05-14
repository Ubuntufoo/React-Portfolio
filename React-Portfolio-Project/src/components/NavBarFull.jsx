// navbar for lg+ screens

export default function NavBarFull() {
  return (
    <div id="NavBar">
      <div
        className=" absolute top-0 right-0 -me-44 -mt-24 h-52 w-[640px]
          rotate-[27deg] transform bg-white opacity-90"
      ></div>

      <div className="fixed right-0 top-0 z-20 bg-transparent">
        <div className="font-bebas-neue me-2 mt-3 grid w-72 grid-cols-4 font-semibold tracking-wide text-gray-700 lg:gap-y-2 lg:text-xl">
          <div className="col-span-4 col-start-1 ms-2">
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
          <div className="col-span-4 col-start-3 ms-3 hover:font-bold">
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
