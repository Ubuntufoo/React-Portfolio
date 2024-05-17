// child component showcasing several web dev projects

import KeyboardArrows from '../../features/KeyboardArrows'
import Cards from './Cards'

export default function ProjectsPage({ keyClasses, activePage }) {

  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyActiveClass,
    right: keyClasses.keyActiveClass,
  }

  return (
    <div className="section h-screen">
      <div className="slide">
        <Cards numCards={4} activePage={activePage} />
      </div>
      <div className="slide"></div>
      <div className="slide"></div>
      <div className="slide"></div>
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}

