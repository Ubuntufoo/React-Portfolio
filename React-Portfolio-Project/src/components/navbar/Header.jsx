// header component to house the navigation bar

import NavBarFull from './NavBarFull'
import NavBarMobile from './NavBarMobile'
// import KeyboardArrows from '../features/KeyboardArrows'

export default function Header({ activePage }) {
  return (
    <header className="fixed top-0 z-50 w-screen font-roboto">
      {/* <KeyboardArrows /> */}
      <NavBarFull activePage={activePage} />
      <NavBarMobile />
    </header>
  )
}
