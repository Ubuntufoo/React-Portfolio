//
import Carousel from "../../features/Carousel"
import { projExploreLLMContent } from '../../../utils/images'
import Tabs from "../../features/Tabs"

export default function ProjExploreLLM() {

  return (
    <>
      <Carousel images={projExploreLLMContent}>
        <Tabs />
      </Carousel>
    </>
  )
}