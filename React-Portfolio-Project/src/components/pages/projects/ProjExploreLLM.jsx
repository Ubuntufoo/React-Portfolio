// ExploreLLM Project slide

import Carousel from '../../features/Carousel'
import Tabs from "../../features/Tabs"
import { projExploreLLMImages } from '../../../utils/images'
import { tabsExploreLLM } from "../../../utils/tabs"

export default function ProjExploreLLM() {
  return (
    <div className="relative h-screen">
      <h1 className="absolute left-6 top-7 min-w-max rounded-lg border-2 border-black p-1.5 text-center font-mono font-semibold tracking-wider text-gray-950 sm:text-lg md:left-8 md:top-11 2xl:inset-x-0 2xl:top-12 2xl:border-none 2xl:text-2xl">
        <code>&lt;ExploreLLM/&gt;</code>
      </h1>
      <Tabs tabsContent={tabsExploreLLM} />
      <Carousel images={projExploreLLMImages} />
    </div>
  )
}
