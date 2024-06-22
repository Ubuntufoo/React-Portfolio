// Intro and landing page child component

import Drawer from './Drawer'
import Hero from './Hero'

export default function IntroPage() {

  return (
    <div className="section fp-auto-height-responsive bg-gradient-to-b from-cyan-900 to-cyan-500">
      <Hero />
      <Drawer />
    </div>
  )
}
