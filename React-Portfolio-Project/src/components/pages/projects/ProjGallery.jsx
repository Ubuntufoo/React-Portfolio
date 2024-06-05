//
import BrainteasersHomeIMG from '../../../assets/projects-assets/BrainteasersHomeIMG.png'
import ExploreLLM_IMG from '../../../assets/projects-assets/ExploreLLM_IMG.png'
import TADAmobile from '../../../assets/projects-assets/TADAmobile.png'
import WorkDashIMG from '../../../assets/projects-assets/WorkDashIMG.png'
import Carousel from '../../features/Carousel'




const images = [
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM Web App',
    description:
      "Recreating the app from 'Beyond ChatBots: ExploreLLM for Structured Thoughts and Personalized Model Responses', this project demonstrates how ExploreLLM enhances AI interactions by integrating large language models (LLMs) with a tailor-made GUI for structured and personalized user experiences.",
  },
  {
    src: BrainteasersHomeIMG,
    label: 'Brainteasers',
    description:
      "Brainteasers is a full-stack website developed with Vue.js and Django. It features postgreSQL database integration, user authentication, email functionality, and 3 Vue.js game applications with score boards.",
  },
  {
    src: TADAmobile,
    label: 'TADA!',
    description:
      "TADA! is a responsive web app built with React and Express. It's hosted live with Render Web Services. I've designed a server-side composite prompt which includes the user's input to make custom API calls to the OpenAI API, the same architecture that ChatGPT is built upon.",
  },
  {
    src: WorkDashIMG,
    label: 'Workflow Dashboard',
    description:
      'A bunch of text about Braintesers. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum lorem nec, ultricies nunc. Nulla facilisi. more lorem here:  https://www.brainteasers.com/',
  },
]

export default function ProjGallery() {

  return (
    <>
      <Carousel images={images} />
    </>
  )
}