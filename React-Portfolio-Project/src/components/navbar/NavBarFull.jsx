// navbar for lg+ screens

const links = [
  { text: 'Intro', className: 'col-span-4 col-start-1 ms-3' },
  { text: 'Projects', className: 'col-span-4 col-start-2 ms-0.5' },
  { text: 'Skills', className: 'col-span-4 col-start-3 ms-3' },
  { text: 'Contact', className: 'col-span-4 col-start-4 col-end-5' },
]

export default function NavBarFull({ activePage }) {
  return (
    <nav
      id="NavBarFull"
      className="ms-auto hidden w-fit select-none bg-transparent lg:block"
    >
      <ul className="me-7 mt-4 grid w-72 grid-cols-4 tracking-wide text-gray-800 lg:gap-y-2 lg:text-xl">
        {links.map((link, index) => (
          <li key={index} className={link.className}>
            <a
              href={`#${link.text}`}
              className={`${activePage == link.text ? 'font-semibold [text-shadow:6px_6px_3px_var(--tw-shadow-color)]' : ''} inline-block origin-bottom shadow-gray-400 transition-all duration-700 ease-in-out hover:scale-110 hover:font-semibold  hover:text-black hover:[text-shadow:6px_6px_3px_var(--tw-shadow-color)]`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="absolute right-2 top-2 -z-10 -me-44 -mt-24 h-52 w-[640px] rotate-[28deg] transform bg-white opacity-90"></div>
    </nav>
  )
}

