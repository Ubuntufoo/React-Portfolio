// App.jsx using Fullpage.js and Tailwind for the UI

import {  useState } from 'react'

import ReactFullpage from '@fullpage/react-fullpage'
import IntroPage from './components/pages/intro/IntroPage'
import ProjectsPage from './components/pages/projects/ProjectsPage'
import SkillsPage from './components/pages/skills/SkillsPage'
import ContactPage from './components/pages/contact/ContactPage'
import Header from './components/navbar/Header'
import { keyClasses, anchors, setupKeydownHandler } from './utils/utils'
import './index.css'

setupKeydownHandler()

const App = () => {
  const [activePage, setActivePage] = useState('intro')
  const afterLoad = () => {
    setActivePage(window.fullpage_api.getActiveSection().anchor)
    console.log(window.fullpage_api.getActiveSection().anchor)
  }

  return (
    <>
      <Header />
      <ReactFullpage
        licenseKey={'A65MK-M52I6-641KK-JE4PH-ZPSWP'}
        scrollingSpeed={1000}
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
        render={() => {
          return (
            <>
              <IntroPage keyClasses={keyClasses} />
              <ProjectsPage keyClasses={keyClasses} activePage={activePage} />
              <SkillsPage keyClasses={keyClasses} />
              <ContactPage keyClasses={keyClasses} />
            </>
          )
        }}
      />
    </>
  )
}

export default App
