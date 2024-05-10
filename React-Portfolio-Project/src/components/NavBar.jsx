// navbar fixed to top of viewport

export default function NavBar() {
  return (
    <>
      <div id="NavBar" className="fixed top-0 flex h-0 w-screen justify-end">
        <div
          className=" absolute -me-64 2xl:-me-96 -mt-24 h-64
          w-2/3 rotate-[20deg] transform bg-white opacity-90"
        ></div>
      </div>
      <div id="NavBar" className="fixed right-0 top-0 z-20 bg-transparent">
        <div className="me-12 mt-8 grid grid-cols-4 w-96 gap-y-1.5 text-xl font-semibold text-gray-800">
          <div className="col-span-4 col-start-1 ms-1 tracking-wide hover:font-bold hover:text-black">
            <a href="#intro">Home</a>
          </div>
          <div className="col-span-4 col-start-2  hover:font-bold hover:text-black">
            <a href="#projects">Projects</a>
          </div>
          <div className="col-span-4 col-start-3 ms-3 tracking-wide hover:font-bold hover:text-black">
            <a href="#skills">Skills</a>
          </div>
          <div className="col-span-4 col-start-4 col-end-5 overflow-visible hover:font-bold hover:text-black">
            <a href="#roadmap">Roadmap</a>
          </div>
        </div>
      </div>
    </>
  );
}
