// Work Dashboard project slide

import Carousel from '../../features/CarouselOLD'
import Tabs from '../../features/Tabs'
import { projWDContent } from '../../../utils/images'
import { tabsWorkDash } from '../../../utils/tabs'

export default function ProjWD() {
  return (
    <>
      <Carousel images={projWDContent}>
        <Tabs tabsContent={tabsWorkDash} />
      </Carousel>
    </>
  )
}
