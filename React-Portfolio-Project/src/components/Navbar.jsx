// Navbar child component

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 flex justify-end">
      <div className="absolute w-2/3 h-32 -me-40 bg-white transform rotate-[16deg] 2xl:-me-72"></div>
      <div className="absolute right-0 w-40 h-20 mt-10 bg-white"></div>
      <div className="bg-white w-fit pe-10 z-10">
        <ul className="flex space-x-12 text-2xl pt-10">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}