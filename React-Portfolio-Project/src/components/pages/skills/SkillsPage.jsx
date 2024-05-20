// child component detailing my web dev skills

import KeyboardArrows from '../../features/KeyboardArrows'
import CombinedSlantedEdge from '../../shapes/CombinedSlantedEdge'
import Marquee from './Marquee'


export default function SkillsPage({ keyClasses }) {
  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyInactiveClass,
    right: keyClasses.keyInactiveClass,
  }

  const slantedEdgeClasses =
    'h-full absolute left-0 top-0 w-1/7 sm:w-1/8 md:w-1/9 xl:w-1/11 2xl:w-1/12 bg-white'

  return (
    <div className="section h-screen">
      <CombinedSlantedEdge classNames={slantedEdgeClasses}>
        <Marquee />
      </CombinedSlantedEdge>
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
