// Intro and landing page child component

import KeyboardArrows from './KeyboardArrows'

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
      <div className="fixed top-0 flex h-0 w-screen justify-end">
        <div
          className=" absolute -me-80 -mt-24 h-64
          w-2/3 rotate-[20deg] transform bg-white text-black"
        ></div>
      </div>
      {/* Pass keyStyling object as prop to KeyboardArrows component */}
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
