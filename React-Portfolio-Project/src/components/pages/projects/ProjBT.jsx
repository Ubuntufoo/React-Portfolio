//
import Carousel from "../../features/Carousel"
import Tabs from "../../features/Tabs"
import { projBTContent } from '../../../utils/images'
import { tabsBrainteasers } from "../../../utils/tabs"

export default function ProjBT() {

  return (
    <>
      <Carousel images={projBTContent}>
        <Tabs tabsContent={tabsBrainteasers} />
      </Carousel>
    </>
  )
}
