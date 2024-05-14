// hero section of intro page

import { useState } from 'react'

export default function Hero() {
  const [animationEnded, setAnimationEnded] = useState(false)

  const handleAnimationEnd = () => {
    // Set animationEnded state to true when the animation ends
    setAnimationEnded(true)
  }

  return (
    <main className="bg-hero-pattern flex h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat">
      <div
        onAnimationEnd={handleAnimationEnd}
        className={`animate-waving me-32 w-20 text-9xl ${animationEnded ? 'opacity-0 transition-opacity duration-500' : ''}`}
      >
        👋
      </div>
      <div></div>
    </main>
  )
}
