// Intro and landing page child component

// import KeyboardArrows from '../../features/KeyboardArrows'
import Drawer from './Drawer'
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
    <div className="section fp-auto-height bg-gradient-to-b from-cyan-900 to-cyan-500">
      <Hero />
      <Drawer />
      {/* <KeyboardArrows keyStyling={keyStyling} /> */}
      <KeyboardNoti />
    </div>
  )
}
