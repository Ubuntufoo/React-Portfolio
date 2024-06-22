// ExploreLLM Project slide

import Carousel from "../../features/Carousel"
import Tabs from "../../features/Tabs"
import { projExploreLLMImages } from '../../../utils/images'
import { tabsExploreLLM } from "../../../utils/tabs"

export default function ProjExploreLLM() {

  return (
    <>
      <Carousel images={projExploreLLMImages}>
        <Tabs tabsContent={tabsExploreLLM} />
      </Carousel>
    </>
  )
}