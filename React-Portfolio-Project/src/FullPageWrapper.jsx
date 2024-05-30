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
      licenseKey={'A65MK-M52I6-641KK-JE4PH-ZPSWP'}
      scrollingSpeed={1000}
      keyboardScrolling={true}
      anchors={anchors}
      navigation={false}
      navigationTooltips={anchors}
      loopBottom={true}
      fixedElements="#NavBar"
      controlArrowsHTML={[
        '<div class="fp-arrow"></div>',
        '<div class="fp-arrow"></div>',
      ]}
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
