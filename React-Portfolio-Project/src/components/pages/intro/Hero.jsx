// hero section of intro page

import Parallelogram from '../../shapes/Parallelogram'
import { useState } from 'react'
import Tim1_5 from '../../../assets/Tim1_5.jpg'

export default function Hero() {
  const [animationEnded, setAnimationEnded] = useState(false)
  const [animationStarted, setAnimationStarted] = useState(false)

  const handleAnimationEnd = () => {
    setAnimationEnded(true)
  }

  const handleAnimationStart = () => {
    setTimeout(() => {
      setAnimationStarted(true)
    }, 2000)
  }

  return (
    <main className="flex h-screen items-center justify-center">
      {animationEnded ? (
        <Parallelogram>
          <section className="h-full relative animate-fade gap-8">
            <div className="font-oswold z-50 space-y-4 text-sm text-white xl:text-lg">
              <h1 className="text-2xl md:text-3xl">
                Welcome. I&apos;m Tim. <br />
              </h1>
              <p className="text-pretty">
                Tempora odit, vero ad nobis, dolorum commodi quidem sunt, nulla
                earum veritatis pariatur? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Rem corporis mollitia voluptate.
                Sapiente ipsa, mollitia dolorum excepturi error quos. <br />
                <br /> atque dolores corrupti esse perspiciatis aliquam vel
                magnam assumenda inventore tenetur.
              </p>
            </div>
            <img
              src={Tim1_5}
              alt="Tim's avatar"
              className="absolute bottom-0 sm:right-36 md:-bottom-12 lg:-bottom-8 md:right-0 lg:right-1 2xl:right-24 xl:-bottom-7 2xl:bottom-4 md:scale-100 xl:scale-110 2xl:scale-150"
            />
          </section>
        </Parallelogram>
      ) : (
        <div
          onAnimationEnd={handleAnimationEnd}
          onAnimationStart={handleAnimationStart}
          className={`${animationStarted ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100'} me-32 w-20 animate-waving text-9xl`}
        >
          👋
        </div>
      )}
    </main>
  )
}
