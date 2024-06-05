// child component showcasing several web dev projects

// import KeyboardArrows from '../../features/KeyboardArrows'
import ProjGallery from './ProjGallery'

export default function ProjectsPage({ activePage }) {
  // const keyStyling = {
  //   up: keyClasses.keyActiveClass,
  //   down: keyClasses.keyActiveClass,
  //   left: keyClasses.keyActiveClass,
  //   right: keyClasses.keyActiveClass,
  // }

  return (
    <div className="section h-screen bg-gradient-to-b from-cyan-500 to-cyan-900">
      <div className="absolute text-center text-7xl"></div>

      <div className="slide">
        <ProjGallery activePage={activePage} />
      </div>
      <div className="slide">bbbbbbbbbbbbbbbbbbb</div>
      <div className="slide">ccccccccccccccccc</div>
      <div className="slide">dddddddddddddddddd</div>
      {/* <KeyboardArrows keyStyling={keyStyling} /> */}
    </div>
  )
}
