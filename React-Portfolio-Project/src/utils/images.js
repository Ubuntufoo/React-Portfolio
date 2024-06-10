// image handling for project pages

import JS_no_BG from '../assets/marquee-assets/JS_no_BG.png'
import NODEJS_no_BG from '../assets/marquee-assets/NODEJS_no_BG.png'
import REACT_no_BG from '../assets/marquee-assets/REACT_no_BG.png'
import VUE_no_BG from '../assets/marquee-assets/VUE_no_BG.png'
import BS_no_BG from '../assets/marquee-assets/BS_no_BG.png'
import DJANGO_no_BG from '../assets/marquee-assets/DJANGO_no_BG.png'
import PYTHON_no_BG from '../assets/marquee-assets/PYTHON_no_BG.png'
import SQL_no_BG from '../assets/marquee-assets/SQL_no_BG.png'
import tailwindIMG from '../assets/marquee-assets/tailwindIMG.png'

import reactLOGOcustom from '../assets/grid/reactLOGOcustom.png'
import genaiIMG from '../assets/grid/genaiIMG.png'
import fullstackIMG3 from '../assets/grid/fullstackIMG3.png'
import problemsolveIMG from '../assets/grid/problemsolveIMG.png'

import BrainteasersHomeIMG from '../assets/projects-assets/BrainteasersHomeIMG.png'
import ExploreLLM_IMG from '../assets/projects-assets/ExploreLLM_IMG.png'
import TADAmobile from '../assets/projects-assets/TADAmobile.png'
import WorkDashIMG from '../assets/projects-assets/WorkDashIMG.png'
import ProjPortfolioHero from '../assets/projects-assets/ProjPortfolioHero.png'

import ExploreLLMConcept from '../assets/projects-assets/ExploreLLMConcept.mp4'
import ExploreLLMcards from '../assets/projects-assets/ExploreLLMcards.png'

import BrainteasersWordleIMG from '../assets/projects-assets/BrainteasersWordleIMG.png'
import BrainteasersRegIMG from '../assets/projects-assets/BrainteasersRegIMG.png'
import BrainteasersAdmin from '../assets/projects-assets/BrainteasersAdmin.png'

import TADA_code_IMG from '../assets/projects-assets/TADA_code_IMG.png'
import TADAdesktop from '../assets/projects-assets/TADAdesktop.png'

import WorkDashCode from '../assets/projects-assets/WorkDashCode.png'

// import ProjPortfolioFormCode from '../assets/projects-assets/ProjPortfolioFormCode.png'
import ProjPortfolioFullpageJSCode from '../assets/projects-assets/ProjPortfolioFullpageJSCode.png'
import ProjPortfolioMarqueeCode from '../assets/projects-assets/ProjPortfolioMarqueeCode.png'

export const logos = [
  { src: SQL_no_BG, alt: 'SQL Logo', additionalClass: 'my-4' },
  { src: PYTHON_no_BG, alt: 'Python Logo', additionalClass: '' },
  { src: DJANGO_no_BG, alt: 'Django Logo', additionalClass: 'my-3' },
  { src: NODEJS_no_BG, alt: 'NodeJS Logo', additionalClass: 'scale-90' },
  { src: REACT_no_BG, alt: 'React Logo', additionalClass: 'scale-90 my-3' },
  { src: VUE_no_BG, alt: 'Vue Logo', additionalClass: 'mt-1' },
  { src: BS_no_BG, alt: 'Bootstrap Logo', additionalClass: 'scale-125 my-2' },
  { src: JS_no_BG, alt: 'JavaScript Logo', additionalClass: '' },
  {
    src: tailwindIMG,
    alt: 'Tailwind CSS Logo',
    additionalClass: 'scale-90 mb-7 mt-3',
  },
]


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

export const projMainContent = [
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM Concept Web App',
    description:
      "A recreation of the app from 'Beyond ChatBots: ExploreLLM for Structured Thoughts and Personalized Model Responses', this project demonstrates how ExploreLLM enhances AI interactions by integrating large language models (LLMs) with a tailor-made GUI for structured user experiences.",
    linkExternal: false,
    linkToSlide: 1,
  },
  {
    src: BrainteasersHomeIMG,
    label: 'Brainteasers',
    description:
      'Brainteasers is a responsive, full-stack website developed with Vue.js and Django. It features postgreSQL database integration, user authentication, email functionality, and 3 Vue.js game applications with score boards. Django provides client-side admin access for simple CRUD operations.',
    linkExternal: 'https://brainteasers.herokuapp.com/',
    linkToSlide: 2,
  },
  {
    src: TADAmobile,
    label: 'TADA! Web App',
    description:
      "TADA! is a responsive web app created using React.js and Express.js. It takes user input, combines it into a server-side composite prompt, and sends it to the OpenAI API. The Large Language Model (LLM) generates positive affirmations for the user's various achievements, both big and small.",
    linkExternal: 'https://tada-w0iq.onrender.com',
    linkToSlide: 3,
  },
  {
    src: WorkDashIMG,
    label: 'Workflow Dashboard',
    description:
      'A web app built with React and Flask, used to boost my productivity by providing a central location for tools and resources used in my daily workflow. API calls to the server automate web data retrieval with Selenium; PyAutoGUI automates point-and-click desktop tasks. Several 3rd-party web apps are embedded in iframe elements for quick access.',
    linkExternal: false,
    linkToSlide: 4,
  },
  {
    src: ProjPortfolioHero,
    label: 'React Portfolio',
    description:
      'A responsive website for showcasing my web dev accomplishments. It is built with React, Tailwind, and Fullpage.js, a JavaScript library that creates this beautiful full-page scrolling effect. No additional component libraries were incorporated. EmailJS provides light-weight email functionality. The site is hosted on _____ .',
    linkExternal: false,
    linkToSlide: 5,
  },
]

export const projExploreLLMImages = [
    {
      src: ExploreLLM_IMG,
      label: 'ExploreLLM Concept Web App IMG',
      figcaption: "ExplloreLLM concept: main interface'.",
      type: 'image',
    },
    {
      src: ExploreLLMConcept,
      label: 'ExploreLLM Concept Video',
      figcaption: 'A video showcasing the concept app for ExploreLLM.',
      type: 'video',
    },
    {
      src: ExploreLLMcards,
      label: 'ExploreLLM Concept Cards',
      figcaption: 'ExploreLLM concept: a task destructuring approach.',
      type: 'image',
    },
];

export const projBTContent = [
    {
    src: BrainteasersHomeIMG,
    label: 'Brainteasers Home',
    figcaption: 'ExploreLLM concept: a task destructuring approach.',
    type: 'image',
  },
  {
    src: BrainteasersWordleIMG,
    label: 'Brainteasers Wordle',
    figcaption: 'ExploreLLM concept: a task destructuring approach.',
    type: 'image',
  },
  {
    src: BrainteasersRegIMG,
    label: 'Brainteasers Registration',
    figcaption: 'ExploreLLM concept: a task destructuring approach.',
    type: 'image',
  },
  {
    src: BrainteasersAdmin,
    label: 'Brainteasers Admin',
    figcaption: 'ExploreLLM concept: a task destructuring approach.',
    type: 'image',
  },
]

export const projTADAContent = [
  {
    src: TADAmobile,
    label: 'TADA! Mobile View',
    description:
      'The mobile view of the TADA! web app, showcasing the site’s design and features.',
    link: 'https://tada-w0iq.onrender.com',
  },
  {
    src: TADA_code_IMG,
    label: 'TADA! Code View',
    description:
      'The code view of the TADA! web app, highlighting the React.js and Express.js code used to create the site.',
  },
  {
    src: TADAdesktop,
    label: 'TADA! Desktop View',
    description:
      'The desktop view of the TADA! web app, featuring the site’s design and user interface.',
  },
]

export const projWDContent = [
  {
    src: WorkDashIMG,
    label: 'Workflow Dashboard',
    description:
      'The Workflow Dashboard web app, showcasing the site’s design and features.',
  },
  {
    src: WorkDashCode,
    label: 'Workflow Dashboard Code',
    description:
      'The code view of the Workflow Dashboard web app, highlighting the React and Flask code used to create the site.',
  },
]

export const projPortfolioContent = [
  {
    src: ProjPortfolioFullpageJSCode,
    label: 'Fullpage.js Code',
    description:
      'The code view of the Fullpage.js library, highlighting the JavaScript code used to create the full-page scrolling effect.',
  },
  {
    src: ProjPortfolioMarqueeCode,
    label: 'Marquee Code',
    description:
      'The code view of the Marquee, showcasing the JavaScript code used to create the scrolling effect.',
  },
]