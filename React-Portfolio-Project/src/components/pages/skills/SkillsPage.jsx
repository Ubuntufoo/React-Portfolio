// child component detailing my web dev skills

import KeyboardArrows from '../../features/KeyboardArrows'
import CombinedSlantedEdge from '../../shapes/CombinedSlantedEdge'

export default function SkillsPage({ keyClasses }) {
  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyInactiveClass,
    right: keyClasses.keyInactiveClass,
  }

  return (
    <div className="section h-screen">
      <CombinedSlantedEdge/>
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
