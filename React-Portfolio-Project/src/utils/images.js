// image handling for project pages

import reactLOGOcustom from '../assets/grid/reactLOGOcustom.png'
import genaiIMG from '../assets/grid/genaiIMG.png'
import fullstackIMG3 from '../assets/grid/fullstackIMG3.png'
import problemsolveIMG from '../assets/grid/problemsolveIMG.png'

import BrainteasersHomeIMG from '../assets/projects-assets/BrainteasersHomeIMG.png'
import ExploreLLM_IMG from '../assets/projects-assets/ExploreLLM_IMG.png'
import TADAmobile from '../assets/projects-assets/TADAmobile.png'
import WorkDashIMG from '../assets/projects-assets/WorkDashIMG.png'

import ExploreLLMConcept from '../assets/projects-assets/ExploreLLMConcept.mp4'
import ExploreLLMcards from '../assets/projects-assets/ExploreLLMcards.png'


export const skillCardsContent = [
  {
    img: reactLOGOcustom,
    title: 'React\nSpecialization',
    firstHeader: 'React v18',
    firstPara: "My projects focus on fundamentals and best practices. when I am prepared for new concepts I refer to 'React - The Complete Guide 2024', a comprehensive React course on Udemy.\n\nI prefer learning from the ground up, and generally avoid pre-built components until it is something I am comfortable building from scratch.",
    secondHeader: 'Learning Roadmap',
    secondPara: "I'm also in the process of adding TypeScript to my skill-set, and revisiting raw Javascript. I am excited to dip into Next.js for more robust applications.",
  },
  {
    img: genaiIMG,
    title: 'Generative AI \nIntegration',
    firstHeader: 'UI/UX Optimization',
    firstPara: "User-driven content generation is flawed due to the sub-optimal UI's of AI tools.\n\nI envision ways to improve UX with creative solutions that take into account the translation gap between AI and human users.",
    secondHeader: 'Opening Creative Doors',
    secondPara: "Generative AI helps me tap into a creative side that I am working to express more. I believe it holds that potential for just about everyone.\n\nThe buzz around this technology offers a chance to engage those who might not usually explore their creativity, fostering new ideas and innovation.",
  },
  {
    img: fullstackIMG3,
    title: 'Full-Stack \nExperience',
    firstHeader: 'FE-BE Challenges',
    firstPara: "Unraveling the complexity of the front-end/back-end relationship was ultimately the most rewarding part of my journey thus far.\n\nThe first major challenge I encountered was integrating a Vue FE with a Django BE. This pivotal moment almost made me quit, but instead I turned my frustration into fuel.\n\nAside from Django, I have also deployed server-side code using Express.js and Flask. SQL is a part of my daily workflow; I use Microsoft SQL Server Management Studio extensively.",
  },
  {
    img: problemsolveIMG,
    title: 'Projects \nWith Purpose',
    firstHeader: 'Inspiration At Home',
    firstPara: "I've drawn inspiration from loved ones for projects like my Wordle clone with added features and TADA, a serene take on the traditional To-Do list.\n\n In TADA, users receive AI-generated affirmations for their accomplishments.",
    secondHeader: 'Practical Solutions',
    secondPara: "When I first discovered the power of Python scripting, I was motivated to automate everything. I've created scripts to streamline daily workflows, manage personal emails, and scrape web data using Selenium.\n\n One of my mid-term goals is to develop a Chrome Extension inspired by uBlock Origin's DOM filtering feature.",
  },
]

export const imagesProjMain = [
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM Concept Web App',
    description:
      "A recreation of the app from 'Beyond ChatBots: ExploreLLM for Structured Thoughts and Personalized Model Responses', this project demonstrates how ExploreLLM enhances AI interactions by integrating large language models (LLMs) with a tailor-made GUI for structured user experiences.",
    link: false,
  },
  {
    src: BrainteasersHomeIMG,
    label: 'Brainteasers',
    description:
      'Brainteasers is a responsive, full-stack website developed with Vue.js and Django. It features postgreSQL database integration, user authentication, email functionality, and 3 Vue.js game applications with score boards. Django provides client-side admin access for simple CRUD operations.',
    link: 'https://brainteasers.herokuapp.com/',
  },
  {
    src: TADAmobile,
    label: 'TADA! Web App',
    description:
      "TADA! is a responsive web app created using React.js and Express.js. It takes user input, combines it into a server-side composite prompt, and sends it to the OpenAI API. The Large Language Model (LLM) generates positive affirmations for the user's various achievements, both big and small.",
    link: 'https://tada-w0iq.onrender.com',
  },
  {
    src: WorkDashIMG,
    label: 'Workflow Dashboard',
    description:
      'A web app built with React and Flask, used to boost my productivity by providing a central location for tools and resources used in my daily workflow. API calls to the server automate web data retrieval with Selenium; PyAutoGUI automates point-and-click desktop tasks. Several 3rd-party web apps are embedded in iframe elements for quick access.',
  },
]

export const imagesProjExploreLLM = [
  {
    src: ExploreLLMConcept,
    label: 'ExploreLLM Concept Video',
    description:
    'A video showcasing the concept of ExploreLLM, a web app that enhances AI interactions by integrating large language models (LLMs) with a tailor-made GUI for structured user experiences.',
    link: false,
    type: 'video',
  },
  {
    src: ExploreLLMcards,
    label: 'ExploreLLM Concept Cards',
    description:
      'A visual representation of the ExploreLLM concept, showcasing the app’s user interface and features.',
    link: false,
  },
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM Concept Web App',
    description:
      "A recreation of the app from 'Beyond ChatBots: ExploreLLM for Structured Thoughts and Personalized Model Responses', this project demonstrates how ExploreLLM enhances AI interactions by integrating large language models (LLMs) with a tailor-made GUI for structured user experiences.",
    link: false,
  },
]