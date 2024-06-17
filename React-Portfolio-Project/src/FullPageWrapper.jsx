// FullpageWrapper.jsx

import ReactFullpage from '@fullpage/react-fullpage'
import IntroPage from './components/pages/intro/IntroPage'
import ProjectsPage from './components/pages/projects/ProjectsPage'
import SkillsPage from './components/pages/skills/SkillsPage'
import ContactPage from './components/pages/contact/ContactPage'

import { anchors } from './utils/utils'

const isiPhoneWithiOS17 = () => {
  const userAgent = window.navigator.userAgent
  const iOS = !!userAgent.match(/iP(hone|od|ad)/i)
  const iOSVersion = userAgent.match(/OS (\d+)_/i)
  return iOS && iOSVersion && parseInt(iOSVersion[1], 10) === 17
}

const FullpageWrapper = ({ afterLoad, activePage }) => {
  const handleAfterLoad = (origin, destination) => {
    console.log('Navigated to:', destination.anchor) // Debugging
    afterLoad()
  }

  return (
    <ReactFullpage
      licenseKey={import.meta.env.VITE_FULLPAGEJS_LICENSE_KEY}
      scrollingSpeed={1000}
      keyboardScrolling={true}
      anchors={anchors}
      menu="#myMenu"
      fixedElements="#NavBar"
      lazyLoading={true}
      normalScrollElements="#map"
      loopBottom={true}
      afterLoad={handleAfterLoad}
      responsiveWidth={640}
      afterResponsive={(isResponsive) => {
        if (isResponsive && !isiPhoneWithiOS17()) {
          window.fullpage_api.setAutoScrolling(true)
        }
      }}
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
