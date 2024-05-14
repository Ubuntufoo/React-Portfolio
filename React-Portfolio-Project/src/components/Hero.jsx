// hero section of intro page

import Parallelogram from './shapes/Parallelogram'
import { useState } from 'react'
import Tim1noBG from '../assets/Tim1noBG.png'

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
    <main className="flex h-screen flex-col items-center justify-center">
      {animationEnded ? (
        <Parallelogram>
          <div className="animate-fade flex size-full  items-center">
            <img
              src={Tim1noBG}
              alt="Tim's avatar"
              className="-ms-10 mt-10 2xl:-ms-0 2xl:mt-0 2xl:scale-125"
            />
            <div className="font-oswold z-10 text-pretty pe-6 text-lg leading-8">
              <span className="text-3xl">
                Welcome. I&apos;m Tim. <br />
              </span>
              Tempora odit, vero ad nobis, dolorum commodi quidem sunt, nulla
              earum veritatis pariatur? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Rem corporis mollitia voluptate. Sapiente ipsa,
              mollitia dolorum excepturi error quos, atque dolores corrupti esse
              perspiciatis aliquam vel magnam assumenda inventore tenetur. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </Parallelogram>
      ) : (
        <div
          onAnimationEnd={handleAnimationEnd}
          onAnimationStart={handleAnimationStart}
          className={`${animationStarted ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100'} animate-waving me-32 w-20 text-9xl`}
        >
          👋
        </div>
      )}
    </main>
  )
}
