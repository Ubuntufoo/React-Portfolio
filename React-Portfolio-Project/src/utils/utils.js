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