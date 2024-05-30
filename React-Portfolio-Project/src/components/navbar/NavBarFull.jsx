// navbar for lg+ screens

const links = [
  { text: 'Intro', className: 'col-span-4 col-start-1 ms-3' },
  { text: 'Projects', className: 'col-span-4 col-start-2' },
  { text: 'Skills', className: 'col-span-4 col-start-3 ms-3' },
  { text: 'Contact', className: 'col-span-4 col-start-4 col-end-5' },
]

export default function NavBarFull({ activePage }) {
  return (
    <nav
      id="NavBarFull"
      className="ms-auto hidden w-fit bg-transparent lg:block"
    >
      <div className="me-7 mt-4 grid w-72 grid-cols-4 tracking-wide text-gray-800 lg:gap-y-2 lg:text-xl">
        {links.map((link, index) => (
          <div key={index} className={link.className}>
            <a
              href={`#${link.text}`}
              className={`${activePage == link.text ? '[text-shadow:6px_6px_3px_var(--tw-shadow-color)] font-semibold' : ''} inline-block shadow-gray-400 transition-all duration-500 ease-in-out origin-bottom hover:font-semibold hover:scale-110  hover:text-black hover:[text-shadow:6px_6px_3px_var(--tw-shadow-color)]`}
            >
              {link.text}
            </a>
          </div>
        ))}
      </div>
      <div className="absolute right-2 top-2 -z-10 -me-44 -mt-24 h-52 w-[640px] rotate-[28deg] transform bg-white opacity-90"></div>
    </nav>
  )
}

