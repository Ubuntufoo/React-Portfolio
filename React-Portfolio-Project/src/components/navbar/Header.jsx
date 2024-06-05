// header component to house the navigation bar

import NavBarFull from './NavBarFull'
import NavBarMobile from './NavBarMobile'
// import KeyboardArrows from '../features/KeyboardArrows'

export default function Header({ activePage}) {
  // const keyStyling = {
  //   up: keyClasses.keyActiveClass,
  //   down: keyClasses.keyActiveClass,
  //   left: keyClasses.keyInactiveClass,
  //   right: keyClasses.keyInactiveClass,
  // }
  return (
    <header className="fixed h-0 top-0 z-40 w-screen font-roboto">
      {/* <KeyboardArrows keyStyling={keyStyling} /> */}
      <NavBarFull activePage={activePage} />
      <NavBarMobile />
    </header>
  )
}
