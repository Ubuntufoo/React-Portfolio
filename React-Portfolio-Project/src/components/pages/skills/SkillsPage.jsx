// child component detailing my web dev skills

import KeyboardArrows from '../../features/KeyboardArrows'
import CombinedSlantedEdge from '../../shapes/CombinedSlantedEdge'
import Marquee from './Marquee'
import SkillsGrid from './SkillsGrid'


export default function SkillsPage({ keyClasses }) {
  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyInactiveClass,
    right: keyClasses.keyInactiveClass,
  }

  const combinedSlantedEdgeClasses =
    'shrink-0 relative w-1/10 md:w-1/11 lg:w-1/12 xl:w-1/14 2xl:w-1/16 bg-white'

  return (
    <div className="section">
      <div className="flex size-full">
        <CombinedSlantedEdge classNames={combinedSlantedEdgeClasses}>
          <Marquee />
        </CombinedSlantedEdge>
        <SkillsGrid />
      </div>
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
