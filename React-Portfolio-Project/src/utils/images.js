// image exports for use in components

import reactLOGOcustom from '../assets/skill-cards/reactLOGOcustom.png'
import genaiIMG from '../assets/skill-cards/genaiIMG.png'
import fullstackIMG3 from '../assets/skill-cards/fullstackIMG3.png'
import problemsolveIMG from '../assets/skill-cards/problemsolveIMG.png'

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
import BrainteasersAccountIMG from '../assets/projects-assets/BrainteasersAccountIMG.png'

import TADA_code_IMG from '../assets/projects-assets/TADA_code_IMG.png'
import TADAdesktop from '../assets/projects-assets/TADAdesktop.png'

import WorkDashCode1of2 from '../assets/projects-assets/WorkDashCode1of2.png'
import WorkDashCode2of2 from '../assets/projects-assets/WorkDashCode2of2.png'

import ProjPortfolioFormCode from '../assets/projects-assets/ProjPortfolioFormCode1262x900.png'
import ProjPortfolioFullpageJSCode from '../assets/projects-assets/ProjPortfolioFullpageJSCode533x900.png'
import ProjPortfolioMarqueeCode from '../assets/projects-assets/ProjPortfolioMarqueeCode1284x900.png'

export const projMainContent = [
  {
    src: ProjPortfolioHero,
    label: 'Portfolio V1',
    description:
      "A previous version of my web developer portfolio site.",
    linkExternal: 'https://timmurphywebdev.netlify.app/',
    linkToSlide: 1,
  },
  {
    src: TADAmobile,
    label: 'TADA! Web App',
    description:
    "Generative AI produces positive affirmations for accomplishments.",
    linkExternal: 'https://tada-w0iq.onrender.com',
    linkToSlide: 2,
  },
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM Concept',
    description:
      "Custom GUI concept aimed at enhancing generative AI interaction.",
    linkExternal: false,
    linkToSlide: 3,
  },
  {
    src: BrainteasersHomeIMG,
    label: 'Brainteasers',
    description:
      'A responsive, full-stack website with user auth and admin capabilities.',
    linkExternal: 'https://brainteasers.herokuapp.com/',
    linkToSlide: 4,
  },
  {
    src: WorkDashIMG,
    label: 'Workflow Dashboard',
    description:
      'A personal web app for boosting my daily workflow.',
    linkExternal: false,
    linkToSlide: 5,
  },
]

export const projPortfolioContent = [
  {
    src: ProjPortfolioHero,
    label: 'Intro Page',
    type: 'image',
  },
  {
    src: ProjPortfolioFullpageJSCode,
    label: 'Fullpage.js Code',
    type: 'image',
  },
  {
    src: ProjPortfolioMarqueeCode,
    label: 'Marquee Code',
    type: 'image',
  },
  {
    src: ProjPortfolioFormCode,
    label: 'Form Code',
    type: 'image',
  },
]

export const projTADAContent = [
  {
    src: TADAmobile,
    label: 'TADA! Mobile View',
    type: 'image',
  },
  {
    src: TADA_code_IMG,
    label: 'TADA! Code View',
    type: 'image',
  },
  {
    src: TADAdesktop,
    label: 'TADA! Desktop View',
    type: 'image',
  },

]

export const projExploreLLMImages = [
  {
    src: ExploreLLM_IMG,
    label: 'ExploreLLM Concept Web App IMG',
    type: 'image',
  },
  {
    src: ExploreLLMConcept,
    label: 'ExploreLLM Concept Video',
    type: 'video',
  },
  {
    src: ExploreLLMcards,
    label: 'ExploreLLM Concept Cards',
    type: 'image',
  },
];

export const projBTContent = [
  {
  src: BrainteasersHomeIMG,
  label: 'Brainteasers Home',
  figcaption: 'Brainteasers Home page.',
  type: 'image',
  },
  {
    src: BrainteasersWordleIMG,
    label: 'Brainteasers Wordle',
    figcaption: 'Brainteasers Wordle game',
    type: 'image',
  },
  {
    src: BrainteasersRegIMG,
    label: 'Brainteasers Registration',
    figcaption: 'Brainteasers Registration page.',
    type: 'image',
  },
  {
    src: BrainteasersAccountIMG,
    label: 'Brainteasers Account',
    figcaption: 'Brainteasers Account page.',
    type: 'image',
  },
  {
    src: BrainteasersAdmin,
    label: 'Brainteasers Admin',
    figcaption: 'Brainteasers Admin page.',
    type: 'image',
  },
]

export const projWDContent = [
  {
    src: WorkDashIMG,
    label: 'Workflow Dashboard',
    type: 'image',
  },
  {
    src: WorkDashCode1of2,
    label: 'Workflow Dashboard Code 1 of 2',
    type: 'image',
  },
  {
    src: WorkDashCode2of2,
    label: 'Workflow Dashboard Code 2 of 2',
    type: 'image',
  },
]

export const skillCardsContent = [
  {
    img: reactLOGOcustom,
    title: 'React\nSpecialization',
    firstHeader: 'React Fundamentals',
    firstPara: "I follow a structured learning path of mindful progression. My projects focus on fundamentals and best practices.\n\nI prefer learning from the ground up, and generally avoid pre-built components until I can build it comfortably from scratch.",
    secondHeader: 'Learning Roadmap',
    secondPara: "I'm currently developing a robust application with Next.js and Typescript to improve my full stack competency.\n\nAs my projects scale up I plan to further embrace performance optimization and SEO best practices. To avoid becoming too specialized I make sure to revisit raw Javascript from time to time.",
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
    firstHeader: 'FE/BE Challenges',
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
