// child component detailing my web dev skills

// import KeyboardArrows from '../../features/KeyboardArrows'
import Marquee from './Marquee'
import SkillsGrid from './SkillsGrid'


export default function SkillsPage() {
  // const keyStyling = {
  //   up: keyClasses.keyActiveClass,
  //   down: keyClasses.keyActiveClass,
  //   left: keyClasses.keyInactiveClass,
  //   right: keyClasses.keyInactiveClass,
  // }




  return (
    <div className="section fp-auto-height-responsive bg-gradient-to-b from-cyan-900 to-cyan-500 ">
      <div className="flex size-full place-items-center">
        <Marquee />
        <SkillsGrid />
      </div>
      {/* <KeyboardArrows keyStyling={keyStyling} /> */}
    </div>
  )
}
