//
import { projTADAContent } from '../../../utils/images'
import { tabsTADA } from "../../../utils/tabs"
import Carousel from "../../features/Carousel"
import Tabs from "../../features/Tabs"

export default function ProjTADA() {

  return (
    <>
      <Carousel images={projTADAContent}>
        <Tabs tabsContent={tabsTADA} />
      </Carousel>
    </>
  )
}