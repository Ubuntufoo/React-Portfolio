// utils

import reactLOGOcustom from '../assets/grid/reactLOGOcustom.png'
import genaiIMG from '../assets/grid/genaiIMG.png'
import fullstackIMG3 from '../assets/grid/fullstackIMG3.png'
import problemsolveIMG from '../assets/grid/problemsolveIMG.png'

export const keyClasses = {
  keyActiveClass: 'text-white text-5xl animate-[pulse_2s_ease-in-out_2]',
  keyInactiveClass: 'hidden',
}

export const anchors = ['intro', 'projects', 'skills', 'contact-me']

export const setupKeydownHandler = () => {
  const handler = (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault()
    }

    if (e.key === 'ArrowUp') {
      window.fullpage_api.moveSectionUp()
    } else if (e.key === 'ArrowDown') {
      window.fullpage_api.moveSectionDown()
    } else if (e.key === 'ArrowLeft') {
      window.fullpage_api.moveSlideLeft()
    } else if (e.key === 'ArrowRight') {
      window.fullpage_api.moveSlideRight()
    }
  }

  document.addEventListener('keydown', handler)

  // Return the handler function for cleanup purpose
  return handler
}

export const skillCardsContent = [
  {
    img: reactLOGOcustom,
    title: 'React \n\n Specialization',
    firstHeader: 'React v18',
    firstPara: "My focus is on modern React, context management and routing libraries.\n\nI prefer learning from the ground up. I generally do not depend on pre-built components, especially if I'm not familiar with all of its inner-workings.",
    secondHeader: 'Learning Roadmap',
    secondPara: "Aside from MERN stack fundamentals I'm also in the process of adding TypeScript to my skill-set, and revisiting raw Javascript. I am excited to dip into Next.js for more robust applications.",
  },
  {
    img: genaiIMG,
    title: 'Generative AI \n\n Integration',
    firstHeader: 'UI/UX Optimization',
    firstPara: "User-driven content generation is flawed due to the sub-optimal UI's of AI tools.\n\nI envision ways to improve UX with creative solutions that take into account the translation gap between AI and human users.",
    secondHeader: 'Opening Creative Doors',
    secondPara: "I haven't often seen myself as creative in the artistic sense, but generative AI helps me tap into that under-utilized side. It holds that potential for many others.\n\nThe buzz around this technology offers a chance to engage those who might not usually explore their creativity, fostering new ideas and innovation.",
  },
  {
    img: fullstackIMG3,
    title: 'Full-Stack \n\n Experience',
    firstHeader: 'FE-BE Challenges',
    firstPara: "My early struggles with understanding the front-end/back-end relationship have ultimately been the most rewarding part of my journey.\n\nThe challenge I faced integrating a Vue font-end with a Django back-end was a pivotal moment that nearly caused me to quit. I turned that frustration into fuel.\n\nAside from Django, I have also deployed server-side code using Express.js and Flask. I use Microsoft SQL Server Management Studio extensively.",
  },
  {
    img: problemsolveIMG,
    title: 'Projects \n\n With Purpose',
    firstHeader: 'Inspiration At Home',
    firstPara: "I've drawn inspiration from loved ones for projects like my Wordle clone with added features and TADA, a serene take on the traditional To-Do list.\n\n In TADA, users receive AI-generated affirmations for simple tasks and encouragement for life's challenges.",
    secondHeader: 'Practical Solutions',
    secondPara: "When I first discovered automation with Python, I became obsessed with automating everything. I've created scripts to streamline daily workflows, manage personal emails, and scrape web data using Selenium.\n\n One mid-term goal is to develop a Chrome Extension inspired by uBlock Origin's DOM filtering feature.",
  },
]