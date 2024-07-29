// image exports for use in components

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
