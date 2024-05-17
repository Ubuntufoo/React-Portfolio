// child component showcasing several web dev projects

import KeyboardArrows from '../../features/KeyboardArrows'
import Cards from './Cards'

export default function ProjectsPage({ keyClasses }) {
  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyActiveClass,
    right: keyClasses.keyActiveClass,
  }

  return (
    <div className="section h-screen">
      <Cards numCards={4}/>
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
