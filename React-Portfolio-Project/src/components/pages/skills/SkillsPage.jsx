// a breakdown of some of my developer skills

import Marquee from './Marquee'
import SkillsGrid from './SkillsGrid'


export default function SkillsPage() {

  return (
    <div className="section fp-auto-height-responsive bg-gradient-to-b from-cyan-900 to-cyan-500 ">
      <div className="flex size-full place-items-center">
        <Marquee />
        <SkillsGrid />
      </div>
    </div>
  )
}
