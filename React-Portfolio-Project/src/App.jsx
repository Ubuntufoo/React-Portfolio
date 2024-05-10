// App.jsx using Fullpage.js and Tailwind for the UI

import ReactFullpage from '@fullpage/react-fullpage'
import IntroPage from './components/IntroPage'
import ProjectsPage from './components/ProjectsPage'
import SkillsPage from './components/SkillsPage'
import RoadmapPage from './components/RoadmapPage'
import './index.css'

//enable keyboard scrolling for up, down, left, right
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    window.fullpage_api.moveSectionUp()
  } else if (e.key === 'ArrowDown') {
    window.fullpage_api.moveSectionDown()
  } else if (e.key === 'ArrowLeft') {
    window.fullpage_api.moveSlideLeft()
  } else if (e.key === 'ArrowRight') {
    window.fullpage_api.moveSlideRight()
  }
})

const keyClasses = {
  keyActiveClass: 'text-white text-5xl animate-[pulse_2s_ease-in-out_2]',
  keyInactiveClass: 'hidden',
}

const anchors = ['intro', 'projects', 'skills', 'roadmap']

const App = () => {
  return (
    <>
      <ReactFullpage
        licenseKey={'A65MK-M52I6-641KK-JE4PH-ZPSWP'}
        scrollingSpeed={1000}
        anchors={anchors}
        navigation={true}
        navigationTooltips={anchors}
        loopBottom={true}
        controlArrowsHTML={[
          '<div class="fp-arrow"></div>',
          '<div class="fp-arrow"></div>',
        ]}
        render={() => {
          return (
            <>
              <IntroPage keyClasses={keyClasses} />
              <ProjectsPage keyClasses={keyClasses} />
              <SkillsPage keyClasses={keyClasses} />
              <RoadmapPage keyClasses={keyClasses} />
            </>
          )
        }}
      />
    </>
  )
}

export default App
