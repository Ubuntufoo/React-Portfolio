// Intro and landing page child component

import KeyboardArrows from './KeyboardArrows'
// import SideBar from './SideBar'

export default function IntroPage({ keyClasses }) {
  // Define keyStyling object to pass to KeyboardArrows component
  const keyStyling = {
    up: keyClasses.keyInactiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyInactiveClass,
    right: keyClasses.keyInactiveClass,
  }

  return (
    <div className="section h-screen">
      {/* <div
        className="absolute top-0 -ms-64 h-0 w-0 border-b-[540px] border-l-[385px] border-t-[140px]
border-solid border-b-transparent border-l-[#fff] border-t-transparent opacity-90"
      ></div> */}
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
