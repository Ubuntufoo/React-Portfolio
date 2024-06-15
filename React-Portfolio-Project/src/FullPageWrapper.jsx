// Entry point for Fullpage.js

import { useEffect } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import IntroPage from './components/pages/intro/IntroPage'
import ProjectsPage from './components/pages/projects/ProjectsPage'
import SkillsPage from './components/pages/skills/SkillsPage'
import ContactPage from './components/pages/contact/ContactPage'
import { anchors } from './utils/utils'

const FullpageWrapper = ({ afterLoad, activePage }) => {
  useEffect(() => {
    // Function to update the CSS variable
    const updateVh = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // Initial update
    updateVh()

    // Update on resize
    window.addEventListener('resize', updateVh)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateVh)
    }
  }, [])

  return (
    <ReactFullpage
      licenseKey={import.meta.env.VITE_FULLPAGEJS_LICENSE_KEY}
      scrollingSpeed={1000}
      keyboardScrolling={true} // not working, I've forced this with utils.js/setupKeydownHandler
      anchors={anchors}
      navigation={false}
      navigationTooltips={anchors}
      loopBottom={true}
      fixedElements="#NavBar"
      controlArrowsHTML={[
        // exposed for visibility and optional modification
        '<div class="fp-arrow"></div>',
        '<div class="fp-arrow"></div>',
      ]}
      afterLoad={afterLoad} // Callback function to update active page state
      render={() => (
        <>
          <IntroPage />
          <ProjectsPage activePage={activePage} />
          <SkillsPage />
          <ContactPage />
        </>
      )}
    />
  )
}

export default FullpageWrapper
