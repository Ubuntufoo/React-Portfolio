//

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

export const toggleFullscreen = (element, isFullscreen) => {
  if (!isFullscreen) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
};

export const exitFullscreenOnEscape = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};
