// FullpageWrapper.jsx

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
      keyboardScrolling={true}
      anchors={anchors}
      navigation={false}
      navigationTooltips={anchors}
      fixedElements="#NavBar"
      lazyLoading={true}
      responsiveWidth={640}
      afterResponsive={(isResponsive) => {
        if (isResponsive) {
          window.fullpage_api.setAutoScrolling(true)
        }
      }}
      afterLoad={afterLoad}
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
