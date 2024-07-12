// child component showcasing several web dev projects

import ProjGallery from './ProjGallery'
import ProjExploreLLM from './ProjExploreLLM'
import ProjBT from './ProjBT'
import ProjTADA from './ProjTADA'
import ProjWD from './ProjWD'
import ProjPortfolioV1 from './ProjPortfolioV1'

export default function ProjectsPage() {

  return (
    <div className="section fp-noscroll fp-auto-height-responsive h-screen">
      <div className="slide">
        <ProjGallery />
      </div>
      <div className="slide">
        <ProjPortfolioV1 />
      </div>
      <div className="slide">
        <ProjTADA />
      </div>
      <div className="slide">
        <ProjExploreLLM />
      </div>
      <div className="slide">
        <ProjBT />
      </div>
      <div className="slide">
        <ProjWD />
      </div>
    </div>
  )
}
