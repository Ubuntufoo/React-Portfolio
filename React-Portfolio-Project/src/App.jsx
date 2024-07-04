// App.jsx
import { useState, useEffect } from 'react'
import FullpageWrapper from './FullPageWrapper'
// import Header from './components/navbar/Header'
import { setupKeydownHandler } from './utils/utils'
import './index.css'

import { anchors } from './utils/utils'

const App = () => {
  const [activePage, setActivePage] = useState('Intro')

  useEffect(() => {
    const handler = setupKeydownHandler()
    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  useEffect(() => {
    const initialHash = window.location.hash.replace('#', '')
    console.log('Initial URL hash:', initialHash) // Debugging
    if (anchors.includes(initialHash)) {
      setActivePage(initialHash)
    } else {
      setActivePage('Intro')
    }
  }, [])

  const afterLoad = () => {
    const activeSection = window.fullpage_api.getActiveSection().anchor
    console.log('Active section:', activeSection) // Debugging
    setActivePage(activeSection)
  }

  return (
    <>
      {/* <Header activePage={activePage} /> */}
      <FullpageWrapper afterLoad={afterLoad} activePage={activePage} />
    </>
  )
}

export default App
