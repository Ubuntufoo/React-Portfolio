// navbar for lg+ screens

export default function NavBarFull() {
  return (
    <nav
      id="NavBarFull"
      className="ms-auto hidden w-fit bg-transparent lg:block"
    >
      <div className="me-1 mt-3 grid w-72 grid-cols-4 tracking-wide text-gray-800 lg:gap-y-2 lg:text-xl">
        <div className="col-span-4 col-start-1 ms-3 ">
          <a
            href="#intro"
            className="inline-block hover:scale-110 hover:animate-pulse hover:text-black"
          >
            Intro
          </a>
        </div>
        <div className="col-span-4 col-start-2">
          <a
            href="#projects"
            className="inline-block hover:scale-110 hover:animate-pulse hover:text-black"
          >
            Projects
          </a>
        </div>
        <div className="col-span-4 col-start-3 ms-3">
          <a
            href="#skills"
            className="inline-block hover:scale-110 hover:animate-pulse hover:text-black"
          >
            Skills
          </a>
        </div>
        <div className="col-span-4 col-start-4 col-end-5">
          <a
            href="#contact-me"
            className="inline-block hover:scale-110 hover:animate-pulse hover:text-black"
          >
            Contact
          </a>
        </div>
      </div>
      <div
        className=" absolute right-0 top-0 -z-10 -me-44 -mt-24 h-52 w-[640px]
          rotate-[28deg] transform bg-white opacity-90"
      ></div>
    </nav>
  )
}
