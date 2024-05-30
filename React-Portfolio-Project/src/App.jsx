// App.jsx
import { useState, useEffect } from 'react'
import FullpageWrapper from './FullPageWrapper'
import Header from './components/navbar/Header'
import { setupKeydownHandler } from './utils/utils'
import './index.css'

const App = () => {
  const [activePage, setActivePage] = useState('intro')

 useEffect(() => {
   const handler = setupKeydownHandler()
   document.addEventListener('keydown', handler)

   return () => {
     document.removeEventListener('keydown', handler)
   }
 }, [])

  const afterLoad = () => {
    setActivePage(window.fullpage_api.getActiveSection().anchor)
  }

  return (
    <>
      <Header activePage={activePage} />
      <FullpageWrapper afterLoad={afterLoad} activePage={activePage} />
    </>
  )
}

export default App
