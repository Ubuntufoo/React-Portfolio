// Entry point for Fullpage.js

import ReactFullpage from '@fullpage/react-fullpage'
import IntroPage from './components/pages/intro/IntroPage'
import ProjectsPage from './components/pages/projects/ProjectsPage'
import SkillsPage from './components/pages/skills/SkillsPage'
import ContactPage from './components/pages/contact/ContactPage'
import { anchors } from './utils/utils'

const FullpageWrapper = ({ afterLoad, activePage }) => {
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
