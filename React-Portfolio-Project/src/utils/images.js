// image exports for use in components

import reactLOGOcustom from '../assets/grid/reactLOGOcustom.png'
import genaiIMG from '../assets/grid/genaiIMG.png'
import fullstackIMG3 from '../assets/grid/fullstackIMG3.png'
import problemsolveIMG from '../assets/grid/problemsolveIMG.png'

import BrainteasersHomeIMG from '../assets/projects-assets/Brainteasers1800x900.png'
import ExploreLLM_IMG from '../assets/projects-assets/ExploreLLM_IMG1800x900.png'
import TADAmobile from '../assets/projects-assets/TADAmobile1800x900.png'
import WorkDashIMG from '../assets/projects-assets/WorkDashIMG1800x900.png'
import ProjPortfolioHero from '../assets/projects-assets/ProjPortfolioHero1800x900.png'

import ExploreLLMConcept from '../assets/projects-assets/ExploreLLMConcept.mp4'
import ExploreLLMcards from '../assets/projects-assets/ExploreLLMcards.png'

import BrainteasersWordleIMG from '../assets/projects-assets/BrainteasersWordleIMG.png'
import BrainteasersRegIMG from '../assets/projects-assets/BrainteasersRegIMG.png'
import BrainteasersAdmin from '../assets/projects-assets/BrainteasersAdmin.png'

import TADA_code_IMG from '../assets/projects-assets/TADA_code_IMG.png'
import TADAdesktop from '../assets/projects-assets/TADAdesktop.png'

import WorkDashCode1of2 from '../assets/projects-assets/WorkDashCode1of2.png'
import WorkDashCode2of2 from '../assets/projects-assets/WorkDashCode2of2.png'

// import ProjPortfolioFormCode from '../assets/projects-assets/ProjPortfolioFormCode.png'
import ProjPortfolioFullpageJSCode from '../assets/projects-assets/ProjPortfolioFullpageJSCode.png'
import ProjPortfolioMarqueeCode from '../assets/projects-assets/ProjPortfolioMarqueeCode.png'

export const projMainContent = [
  {
    src: ProjPortfolioHero,
    label: 'Portfolio V1',
    description:
      "Created to showcase my web dev accomplishments and connect with like-minded people. This site is built from scratch with React.js, Tailwind, and Fullpage.js, a JavaScript library that creates this beautiful full-page scrolling effect.\n\nHelp me see this website through your eyes: feedback, questions, and critiques can be submitted via the Contact section. I am eager to hear from you!",
    linkExternal: false,
    linkToSlide: 5,
  },
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM Concept',
    description:
      "A recreation of the app from 'Beyond ChatBots: ExploreLLM for Structured Thoughts and Personalized Model Responses'.\n\n This project demonstrates how ExploreLLM enhances AI interactions by integrating large language models (LLMs) with a tailor-made GUI for structured user experiences.",
    linkExternal: false,
    linkToSlide: 1,
  },
  {
    src: TADAmobile,
    label: 'TADA! Web App',
    description:
      "TADA! is a responsive web experience that puts a dynamic twist on the cliche TO-DO app. It takes user input and generates positive affirmations for the user's various achievements, both big and small.\n\nThe user input is combined into a server-side composite prompt and sent to the OpenAI API endpoint, ensuring each response is unique to the achievement.",
    linkExternal: 'https://tada-w0iq.onrender.com',
    linkToSlide: 3,
  },
  {
    src: BrainteasersHomeIMG,
    label: 'Brainteasers',
    description:
      'Brainteasers is a responsive, full-stack website developed with Vue.js and Django.\n\nIt features postgreSQL database integration, user authentication, email functionality, and 3 Vue.js game applications with score boards. Django provides client-side admin access for crucial data management operations.',
    linkExternal: 'https://brainteasers.herokuapp.com/',
    linkToSlide: 2,
  },
  {
    src: WorkDashIMG,
    label: 'Workflow Dashboard',
    description:
      'A web app built with the sole purpose of boosting my productivity by providing a central location for tools and resources used in my daily workflow.\n\nFrom my dashboard I can modify string data, compare differences in text, and even see the status of my test runs in my test case management tool. Several 3rd-party web apps are embedded directly into the page for quick access.',
    linkExternal: false,
    linkToSlide: 4,
  },
]

export const skillCardsContent = [
  {
    img: reactLOGOcustom,
    title: 'React\nSpecialization',
    firstHeader: 'React Fundamentals',
    firstPara: "My projects focus on fundamentals and best practices. when I am prepared for new concepts I refer to 'React - The Complete Guide 2024', a comprehensive and highly acclaimed React course on Udemy.\n\nI prefer learning from the ground up, and generally avoid pre-built components until it is something I am actually comfortable building from scratch.",
    secondHeader: 'Learning Roadmap',
    secondPara: "I'm also in the process of adding TypeScript to my skill-set, and revisiting raw Javascript. I am excited to experiment with Next.js for more robust applications; as my projects scale up I plan to embrace performance optimization and SEO best practices.",
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
    firstPara: "I've drawn inspiration from loved ones for projects like my Wordle clone with added features and TADA!, a mindful take on the traditional TO-DO list.\n\n In TADA!, users receive AI-generated affirmations for their accomplishments.",
    secondHeader: 'Practical Solutions',
    secondPara: "When I first discovered the power of Python scripting, I was motivated to automate everything. I've created scripts to streamline daily workflows, manage personal emails, and scrape web data using Selenium.\n\n One of my mid-term goals is to develop a Chrome Extension inspired by uBlock Origin's DOM filtering feature.",
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
      figcaption: 'ExploreLLM concept: task decomposition.',
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
    src: WorkDashCode1of2,
    label: 'Workflow Dashboard Code 1 of 2',
    description:
      'The code view of the Workflow Dashboard web app, highlighting the JavaScript code used to create the site.',
  },
  {
    src: WorkDashCode2of2,
    label: 'Workflow Dashboard Code 2 of 2',
    description:
      'The code view of the Workflow Dashboard web app, showcasing the JavaScript code used to create the site.',
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