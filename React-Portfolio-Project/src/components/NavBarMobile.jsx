// a simple hamburger toggle for mobile screens

export default function NavBarMobile() {
  return (
    <div id="NavBar">
      <div className="fixed top-0 z-20 bg-transparent">
        <div className="font-bebas-neue text-gray-700 ">
          <div className="">
            <a
              href="#intro"
              className="hover:scale-110 hover:text-black"
            >
              Intro
            </a>
          </div>
          <div className=" hover:font-bold">
            <a
              href="#projects"
              className="hover:scale-110 hover:text-black"
            >
              Projects
            </a>
          </div>
          <div className="hover:font-bold">
            <a
              href="#skills"
              className="hover:scale-110 hover:text-black"
            >
              Skills
            </a>
          </div>
          <div className=" hover:font-bold">
            <a
              href="#roadmap"
              className="hover:scale-110 hover:text-black"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
