//
import BrainteasersHomeIMG from '../../../assets/projects-assets/BrainteasersHomeIMG.png'
import ExploreLLM_IMG from '../../../assets/projects-assets/ExploreLLM_IMG.png'
import TADAmobile from '../../../assets/projects-assets/TADAmobile.png'
import WorkDashIMG from '../../../assets/projects-assets/WorkDashIMG.png'
import Carousel from '../../features/Carousel'




const images = [
  {
    src: BrainteasersHomeIMG,
    label: 'BrainteasersHomeIMG',
    description:
      'A bunch of text about Braintesers. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum lorem nec, ultricies nunc. Nulla facilisi. more lorem here:  https://www.brainteasers.com/',
  },
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM_IMG',
    description:
      'Some representative placeholder content for the second slide.',
  },
  {
    src: TADAmobile,
    label: 'TADAmobile',
    description: 'Some representative placeholder content for the third slide.',
  },
  {
    src: WorkDashIMG,
    label: 'WorkDashIMG',
    description:
      'Some representative placeholder content for the fourth slide.',
  },
]

export default function ProjGallery() {

  return (
    <>
      <Carousel images={images} />
    </>
  )
}