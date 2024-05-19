// an element that looks like up/down/left/right keyboard arrows to
// direct the user to navigate fullpage.js with their keyboard

import React from 'react'

import {
  PiArrowSquareDownFill,
  PiArrowSquareUpFill,
  PiArrowSquareLeftFill,
  PiArrowSquareRightFill,
} from 'react-icons/pi'

export default function KeyboardArrows({ keyStyling }) {
  const { up, down, left, right } = keyStyling

  // Define an array of icon components
  const icons = [
    {
      icon: <PiArrowSquareUpFill />,
      className: up,
      gridStyle: 'col-span-3 col-start-2',
    },
    { icon: <PiArrowSquareLeftFill />, className: left },
    { icon: <PiArrowSquareDownFill />, className: down },
    { icon: <PiArrowSquareRightFill />, className: right },
  ]

  return (
    <div className="hidden lg:block absolute bottom-2 right-0">
      <div className="grid scale-75 grid-cols-3 gap-2">
        {/* Map over the icons array to render each icon */}
        {icons.map((item, index) => (
          <div
            key={index}
            className={`flex size-12 place-content-center rounded-md bg-gray-800 shadow-lg ${item.gridStyle}`}
          >
            {/* Apply the className dynamically based on keyStyling */}
            {React.cloneElement(item.icon, { className: item.className })}
          </div>
        ))}
      </div>
    </div>
  )
}


