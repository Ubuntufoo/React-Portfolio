// child component showcasing several web dev projects

import KeyboardArrows from '../../features/KeyboardArrows'
import CardGallery from './CardGallery'

export default function ProjectsPage({ keyClasses, activePage }) {
  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyActiveClass,
    right: keyClasses.keyActiveClass,
  }

  return (
    <div className="section h-screen">
      <CardGallery activePage={activePage} />

      <div className="slide">aaaaaaaaaaaaaaaaa</div>
      <div className="slide">bbbbbbbbbbbbbbbbbbb</div>
      <div className="slide">ccccccccccccccccc</div>
      <div className="slide">dddddddddddddddddd</div>
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
