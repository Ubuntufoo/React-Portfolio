// an element that looks like up/down/left/right keyboard arrows to
// direct the user to navigate fullpage.js with their keyboard
import {
  PiArrowSquareDownFill,
  PiArrowSquareUpFill,
  PiArrowSquareLeftFill,
  PiArrowSquareRightFill,
} from 'react-icons/pi'

const upDownArrowStyle =
  'text-white text-5xl animate-[pulse_2s_ease-in-out_2] cursor-pointer'

const leftRightArrowStyle = 'text-white cursor-pointer text-5xl '
// const allArrowStyle =
//   "text-white text-5xl animate-[pulse_1s_ease-in-out_3] cursor-pointer";

export default function KeyboardArrows() {
  return (
    <div className="fixed bottom-8 right-8 z-10">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-3 col-start-2">
          <div className="arrow-container">
            <PiArrowSquareUpFill className={upDownArrowStyle} />
          </div>
        </div>
        <div className="arrow-container">
          <PiArrowSquareLeftFill className={leftRightArrowStyle} />
        </div>
        <div className="arrow-container">
          <PiArrowSquareDownFill className={upDownArrowStyle} />
        </div>
        <div className="arrow-container">
          <PiArrowSquareRightFill className={leftRightArrowStyle} />
        </div>
      </div>
    </div>
  )
}
