// Portfolio project slide

import { projPortfolioContent } from '../../../utils/images'
import { tabsPortfolio } from '../../../utils/tabs'
import Carousel from '../../features/Carousel'
import Tabs from '../../features/Tabs'

export default function ProjPortfolio() {
  return (
    <>
      <Carousel images={projPortfolioContent}>
        <Tabs tabsContent={tabsPortfolio} />
      </Carousel>
    </>
  )
}