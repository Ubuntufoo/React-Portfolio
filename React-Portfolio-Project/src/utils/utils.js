// utils

import reactLOGOcustom from '../assets/grid/reactLOGOcustom.png'
import genaiIMG from '../assets/grid/genaiIMG.png'
import fullstackIMG3 from '../assets/grid/fullstackIMG3.png'
import problemsolveIMG from '../assets/grid/problemsolveIMG.png'

export const keyClasses = {
  keyActiveClass: 'text-white text-4xl animate-[pulse_2s_ease-in-out_2]',
  keyInactiveClass: 'hidden',
}
export const anchors = ['Intro', 'Projects', 'Skills', 'Contact']

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
