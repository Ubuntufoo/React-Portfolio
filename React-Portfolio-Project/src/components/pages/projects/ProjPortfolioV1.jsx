// Portfolio project slide

import Carousel from '../../features/Carousel'
import Tabs from '../../features/Tabs'
import Button from '../../features/Button'
import { projPortfolioContent } from '../../../utils/images'
import { tabsPortfolio } from '../../../utils/tabs'
import { projMainContent } from '../../../utils/images'

export default function ProjPortfolioV1() {
  return (
    <div className="relative h-screen">
      <h1 className="absolute left-6 top-7 min-w-max rounded-lg border-2 border-black p-1.5 text-center font-mono font-semibold tracking-wider text-gray-950 sm:text-lg md:left-8 md:top-11 2xl:inset-x-0 2xl:top-12 w-fit mx-auto 2xl:text-2xl">
        <code>&lt;PortfolioV1/&gt;</code>
      </h1>
      <Tabs tabsContent={tabsPortfolio} />
      <Carousel images={projPortfolioContent} />
      <Button styles="absolute" link={projMainContent[0].linkExternal} />
    </div>
  )
}
