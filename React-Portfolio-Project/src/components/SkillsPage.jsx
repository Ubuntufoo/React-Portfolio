// child component detailing my web dev skills

import KeyboardArrows from './KeyboardArrows'

export default function SkillsPage({ keyClasses }) {
  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyInactiveClass,
    right: keyClasses.keyInactiveClass,
  }

  return (
    <div className="section h-screen">
      Skills
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
