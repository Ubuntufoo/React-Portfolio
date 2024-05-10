// child component showing my learning roadmap

import KeyboardArrows from './KeyboardArrows'

export default function RoadmapPage({ keyClasses }) {
  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyInactiveClass,
    left: keyClasses.keyInactiveClass,
    right: keyClasses.keyInactiveClass,
  }

  return (
    <div className="section h-screen">
      Roadmap
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
