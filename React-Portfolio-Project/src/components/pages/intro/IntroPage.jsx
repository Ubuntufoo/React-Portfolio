// Intro and landing page child component

// import KeyboardArrows from '../../features/KeyboardArrows'
import SideBar from './SideBar'
import KeyboardNoti from '../../features/KeyboardNoti'
import Hero from './Hero'


export default function IntroPage() {
  // const keyStyling = {
  //   up: keyClasses.keyInactiveClass,
  //   down: keyClasses.keyActiveClass,
  //   left: keyClasses.keyInactiveClass,
  //   right: keyClasses.keyInactiveClass,
  // }

  return (
    <div className="section h-screen bg-gradient-to-b from-cyan-900 to-cyan-500">
      <Hero />
      <SideBar />
      {/* <KeyboardArrows keyStyling={keyStyling} /> */}
      <KeyboardNoti />
    </div>
  )
}
