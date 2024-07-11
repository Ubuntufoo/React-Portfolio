// ExploreLLM Project slide

import ImgMarquee from "../../features/ImgMarquee"
import Tabs from "../../features/Tabs"
import { projExploreLLMImages } from '../../../utils/images'
import { tabsExploreLLM } from "../../../utils/tabs"

export default function ProjExploreLLM() {

  return (
    <>
      <ImgMarquee images={projExploreLLMImages}>
        <Tabs tabsContent={tabsExploreLLM} />
      </ImgMarquee>
    </>
  )
}