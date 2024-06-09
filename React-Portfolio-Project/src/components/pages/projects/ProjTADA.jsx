//
import { projTADAContent } from '../../../utils/images'
import Carousel from "../../features/Carousel"
import Tabs from "../../features/Tabs"

export default function ProjTADA() {

  return (
    <>
      <Carousel images={projTADAContent}>
        <Tabs />
      </Carousel>
    </>
  )
}