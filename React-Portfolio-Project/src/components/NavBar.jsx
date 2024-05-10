// navbar fixed to top of viewport

export default function NavBar() {
  return (
    <div
      id="NavBar"
      className="fixed right-0 top-0 z-20 mt-6 bg-transparent"
    >
      <div className="grid grid-cols-4 text-2xl">
        <div className="col-span-4 col-start-1 w-fit rounded-md bg-cyan-500 p-2">
          <a href="#intro">Home</a>
        </div>
        <div className="col-span-4 col-start-2 w-fit rounded-md bg-cyan-500 p-2">
          <a href="#skills">Skills</a>
        </div>
        <div className="col-span-4 col-start-3 w-fit rounded-md bg-cyan-500 p-2">
          <a href="#projects">Projects</a>
        </div>
        <div className="col-span-4 col-start-4 w-fit rounded-md bg-cyan-500 p-2">
          <a href="#roadmap">Roadmap</a>
        </div>
      </div>
    </div>
  )
}
