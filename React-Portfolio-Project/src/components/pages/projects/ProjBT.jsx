//
import Carousel from "../../features/Carousel"
import Tabs from "../../features/Tabs"
import { projBTContent } from '../../../utils/images'

export default function ProjBT() {

  return (
    <>
      <Carousel images={projBTContent}>
        <Tabs />
      </Carousel>
    </>
  )
}
