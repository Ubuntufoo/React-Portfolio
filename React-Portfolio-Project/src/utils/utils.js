// utils

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
    title: 'React Specialization',
    firstHeader: 'React v18',
    firstPara: "My focus is on modern React, utilizing functional components, hooks, and the latest features.\n\nI prefer learning from the ground up, and therefore, I generally do not depend on component libraries.",
    secondHeader: 'Learning Roadmap',
    secondPara: "Can a developer maintain enterprise-level code quality while preserving their curiosity and joy of experimentation? That is my goal. \n\nAside from React-specific features such as router libraries, I am also in the process of adding TypeScript to my skill-set, and a revisit to raw Javascript.",
  },
  {
    title: 'React Specialization',
    firstHeader: 'Generative AI',
    firstPara: "lorem xxxxxxxxxxx.",
    secondHeader: 'More Generative AI',
    secondPara: "lorem yyyyyyyyyy.",
  },
  {
    title: 'React Specialization',
    firstHeader: 'Generative AI',
    firstPara: "lorem xxxxxxxxxxx.",
    secondHeader: 'More Generative AI',
    secondPara: "lorem yyyyyyyyyy.",
  },
  {
    title: 'React Specialization',
    firstHeader: 'Generative AI',
    firstPara: "lorem xxxxxxxxxxx.",
    secondHeader: 'More Generative AI',
    secondPara: "lorem yyyyyyyyyy.",
  },
]