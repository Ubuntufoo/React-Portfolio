//
import BrainteasersHomeIMG from '../../../assets/projects-assets/BrainteasersHomeIMG.png'
import ExploreLLM_IMG from '../../../assets/projects-assets/ExploreLLM_IMG.png'
import TADAmobile from '../../../assets/projects-assets/TADAmobile.png'
import WorkDashIMG from '../../../assets/projects-assets/WorkDashIMG.png'
import Carousel from '../../features/Carousel'




const images = [
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM Concept Web App',
    description:
      "A recreation of the app from 'Beyond ChatBots: ExploreLLM for Structured Thoughts and Personalized Model Responses', this project demonstrates how ExploreLLM enhances AI interactions by integrating large language models (LLMs) with a tailor-made GUI for structured user experiences.",
    link: false,
  },
  {
    src: BrainteasersHomeIMG,
    label: 'Brainteasers Web Games',
    description:
      'Brainteasers is a responsive, full-stack website developed with Vue.js and Django. It features postgreSQL database integration, user authentication, email functionality, and 3 Vue.js game applications with score boards. Django provides client-side admin access for simple CRUD operations.',
    link: 'https://brainteasers.herokuapp.com/',
  },
  {
    src: TADAmobile,
    label: 'TADA! List',
    description:
      "TADA! is a responsive web app created using React.js and Express.js. It takes user input, combines it into a server-side composite prompt, and sends it to the OpenAI API. The Large Language Model (LLM) generates positive affirmations for the user's various achievements, both big and small.",
    link: 'https://tada-list.herokuapp.com/',
  },
  {
    src: WorkDashIMG,
    label: 'Workflow Dashboard',
    description:
      'A web app built with React and Flask, used to boost my productivity by providing a central location for several tools and resources used in my daily workflow. API calls to the server can automate web data retrieval with Selenium; PyAutoGUI automates point-and-click tasks on my desktop.',
  },
]

export default function ProjGallery() {

  return (
    <>
      <Carousel images={images} />
    </>
  )
}