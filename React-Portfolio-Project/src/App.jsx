// App.jsx
import { useState, useEffect } from 'react'
import FullpageWrapper from './FullPageWrapper'
import Header from './components/navbar/Header'
import { setupKeydownHandler } from './utils/utils'
import './index.css'

import { anchors } from './utils/utils'

// Incompatible Component
const Incompatible = () => (
  <div className="flex h-screen flex-col justify-center text-3xl">
    <h1 className="mx-auto w-4/5 text-center font-kreon">
      Your device is &lt;768 pixels wide. Please rotate your device to use this
      site.
    </h1>
  </div>
)

const App = () => {
  const [activePage, setActivePage] = useState('Intro')
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia('(orientation: portrait)').matches,
  )
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia('(max-width: 767px)').matches,
  )

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.matchMedia('(orientation: portrait)').matches)
      setIsSmallScreen(window.matchMedia('(max-width: 767px)').matches)
    }

    // Add event listeners for resize and orientation change
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    // Initial check
    handleResize()

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

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

  if (isSmallScreen && !isPortrait) {
    return <Incompatible />
  }

  return (
    <>
      <Header activePage={activePage} />
      <div className="container mx-auto max-w-[1280px] bg-gray-400">
        <FullpageWrapper afterLoad={afterLoad} activePage={activePage} />
      </div>
    </>
  )
}

export default App
