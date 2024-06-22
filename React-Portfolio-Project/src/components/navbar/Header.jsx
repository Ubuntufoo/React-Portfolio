// // Header component that includes the navigation bars for both desktop and mobile

import NavBarFull from './NavBarFull'
import NavBarMobile from './NavBarMobile'

export default function Header({ activePage}) {

  return (
    <header className="fixed h-0 top-0 z-40 w-screen font-roboto">
      {/* <KeyboardArrows keyStyling={keyStyling} /> */}
      <NavBarFull activePage={activePage} />
      <NavBarMobile />
    </header>
  )
}
