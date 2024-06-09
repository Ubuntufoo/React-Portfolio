//
import Carousel from "../../features/Carousel"
import Tabs from "../../features/Tabs"
import { projWDContent } from '../../../utils/images'


export default function ProjWD() {

  return (
    <>
      <Carousel images={projWDContent}>
        <Tabs />
      </Carousel>
    </>
  )
}