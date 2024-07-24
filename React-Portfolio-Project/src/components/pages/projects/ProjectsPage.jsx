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
      <div className="slide relative">
        <h1 className="absolute left-6 top-7 mx-auto w-fit min-w-max rounded-lg border-2 border-black p-1.5 text-center font-mono font-semibold tracking-wider text-gray-950 sm:text-lg md:left-8 md:top-11 2xl:inset-x-0 2xl:top-12 2xl:text-2xl">
          <code>&lt;Projects&gt;&lt;Gallery/&gt;</code>
        </h1>
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
