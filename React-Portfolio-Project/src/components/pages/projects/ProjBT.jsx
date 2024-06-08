//
import Carousel from "../../features/Carousel"
import Tabs from "../../features/Tabs"
import { imagesProjBT } from '../../../utils/images'

export default function ProjBT() {

  return (
    <>
      <Carousel images={imagesProjBT}>
        <Tabs />
      </Carousel>
    </>
  )
}
