// child component showcasing several web dev projects

import ProjGallery from './ProjGallery'
import ProjExploreLLM from './ProjExploreLLM'
import ProjBT from './ProjBT'
import ProjTADA from './ProjTADA'
import ProjWD from './ProjWD'

export default function ProjectsPage() {

  return (
    <div className="section h-screen bg-gradient-to-b from-cyan-500 to-cyan-900">
      <div className="slide">
        <ProjGallery />
      </div>
      <div className="slide">
        <ProjExploreLLM />
      </div>
      <div className="slide">
        <ProjBT />
      </div>
      <div className="slide">
        <ProjTADA />
      </div>
      <div className="slide">
        <ProjWD />
      </div>
    </div>
  )
}
