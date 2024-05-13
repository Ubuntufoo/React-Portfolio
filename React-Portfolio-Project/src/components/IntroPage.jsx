// Intro and landing page child component

import KeyboardArrows from './KeyboardArrows'
import SideBar from './SideBar'
import KeyboardNoti from './KeyboardNoti'

export default function IntroPage({ keyClasses }) {
  // Define keyStyling object to pass to KeyboardArrows component
  const keyStyling = {
    up: keyClasses.keyInactiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyInactiveClass,
    right: keyClasses.keyInactiveClass,
  }

  return (
    <div className="section h-screen font-bebas-neue">
      <SideBar />
      <KeyboardArrows keyStyling={keyStyling} />
      <KeyboardNoti />
    </div>
  )
}
