//
import { projPortfolioContent } from '../../../utils/images'
import Carousel from '../../features/Carousel'
import Tabs from '../../features/Tabs'

export default function ProjPortfolio() {
  return (
    <>
      <Carousel images={projPortfolioContent}>
        <Tabs />
      </Carousel>
    </>
  )
}