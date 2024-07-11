// TADA! project slide

import { projTADAContent } from '../../../utils/images'
import { tabsTADA } from '../../../utils/tabs'
import Carousel from '../../features/CarouselOLD'
import Tabs from '../../features/Tabs'

export default function ProjTADA() {
  return (
    <>
      <Carousel images={projTADAContent} tabsType="tabsTADA">
        <Tabs tabsContent={tabsTADA} />
      </Carousel>
    </>
  )
}
