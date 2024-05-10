// child component showcasing several web dev projects

import KeyboardArrows from './KeyboardArrows'

export default function ProjectsPage({ keyClasses }) {
  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyActiveClass,
    right: keyClasses.keyActiveClass,
  }

  return (
    <div className="section h-screen">
      Projects
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}