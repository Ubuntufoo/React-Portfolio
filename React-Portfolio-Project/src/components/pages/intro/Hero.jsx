// hero section of intro page

import Parallelogram from '../../shapes/Parallelogram'
import { useState } from 'react'
import Tim2 from '../../../assets/Tim2.jpg'

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
          <section className="flex h-full animate-fade flex-col justify-center md:flex-row">
            <img
              src={Tim2}
              alt="Tim's avatar"
              className="mt-4"
            />
            <div className="font-oswold order-1 self-center px-4 text-slate-200 md:order-2  md:pe-10 xl:text-lg">
              <h1 className="mb-10 block xl:text-3xl">
                Welcome. I&apos;m Tim. <br />
              </h1>
              <p className="text-pretty">
                Tempora odit, vero ad nobis, dolorum commodi quidem sunt, nulla
                earum veritatis pariatur? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Rem corporis mollitia voluptate.
                Sapiente ipsa, mollitia dolorum excepturi error quos, atque
                dolores corrupti esse perspiciatis aliquam vel magnam assumenda
                inventore tenetur. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
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
