//
import Carousel from "../../features/Carousel"
import { projExploreLLMImages } from '../../../utils/images'
import Tabs from "../../features/Tabs"

export default function ProjExploreLLM() {

  return (
    <>
      <Carousel images={projExploreLLMImages}>
        <Tabs />
      </Carousel>
    </>
  )
}