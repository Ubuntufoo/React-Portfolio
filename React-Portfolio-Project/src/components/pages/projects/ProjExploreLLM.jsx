//
import Carousel from "../../features/Carousel"
import { imagesProjExploreLLM } from '../../../utils/images'
import Tabs from "../../features/Tabs"

export default function ProjExploreLLM() {

  return (
    <>
      <Carousel images={imagesProjExploreLLM}>
        <Tabs />
      </Carousel>

    </>
  )
}