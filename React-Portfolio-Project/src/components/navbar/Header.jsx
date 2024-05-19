// header component to house the navigation bar

import NavBarFull from './NavBarFull'
import NavBarMobile from './NavBarMobile'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-screen">
      <NavBarFull />
      <NavBarMobile />
    </header>
  )
}
