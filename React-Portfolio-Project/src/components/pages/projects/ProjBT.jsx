// Brainteasers project slide

import Carousel from "../../features/Carousel"
import Tabs from "../../features/Tabs"
import { projBTContent } from '../../../utils/images'
import { tabsBrainteasers } from "../../../utils/tabs"

export default function ProjBT() {

  return (
    <>
      <Carousel images={projBTContent} tabsType="tabsBrainteasers">
        <Tabs tabsContent={tabsBrainteasers} />
      </Carousel>
    </>
  )
}
