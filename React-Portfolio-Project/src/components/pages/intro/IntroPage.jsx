// Intro and landing page

// import { useEffect } from 'react'
import Hero from './Hero'

export default function IntroPage() {
  // useEffect(() => {
  //   // Make an API call to wake up the server
  //   fetch('https://tada-w0iq.onrender.com')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }
  //       console.log('Server wake-up call successful')
  //     })
  //     .catch((error) => {
  //       console.error('There was a problem with the fetch operation:', error)
  //     })
  // }, []) // Empty dependency array ensures this runs once on component mount

  return (
    <div className="section fp-noscroll fp-auto-height-responsive h-screen">
      <Hero />
    </div>
  )
}
