// Work Dashboard project slide

import Carousel from '../../features/Carousel'
import Tabs from '../../features/Tabs'
import { projWDContent } from '../../../utils/images'
import { tabsWorkDash } from '../../../utils/tabs'

export default function ProjPortfolioV1() {
  return (
    <div className="relative h-screen">
      <h1 className="absolute left-6 top-7 mx-auto w-fit min-w-max rounded-lg border-2 border-black p-1.5 text-center font-mono font-semibold tracking-wider text-gray-950 sm:text-lg md:left-8 md:top-11 2xl:inset-x-0 2xl:top-12 2xl:text-2xl">
        <code>&lt;Work Dashboard/&gt;</code>
      </h1>
      <Tabs tabsContent={tabsWorkDash} />
      <Carousel images={projWDContent} />
    </div>
  )
}
