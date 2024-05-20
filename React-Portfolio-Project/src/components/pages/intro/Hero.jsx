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
          <section className="relative h-full animate-fadeFast gap-8">
            <div className="font-oswold relative z-50 animate-fade space-y-9 px-8 pt-28 leading-6 text-white sm:px-8 sm:text-base md:w-1/2 md:pt-20 lg:ms-16 lg:pt-28 xl:pt-24 2xl:ms-20 2xl:pt-36 2xl:text-xl 2xl:leading-8">
              <h1 className="text-2xl lg:text-4xl">
                Welcome. I&apos;m Tim. <br />
              </h1>
              <p className="text-pretty">
                <span className="inline-flex flex-wrap gap-3.5">
                  {[
                    'Introvert.',
                    'Athlete.',
                    'Husband.',
                    'Father.',
                    <strong key={4}>Web Developer.</strong>,
                  ].map((word, index) => (
                    <span key={index}>{word}</span>
                  ))}
                </span>
                <br />
                <br />
                I tackle my projects with enthusiasm and curiosity.
                <br />
                <br />
                The following pages will give you a sense of who I am as an
                author of code, the potential I possess, and what I can do for
                you.
              </p>
            </div>
            <img
              src={Tim1_5}
              alt="Tim's avatar"
              className="animate-fadeSlow absolute -bottom-12 right-4 scale-75 sm:bottom-0 sm:right-36 sm:scale-100 md:-bottom-12 md:right-0 lg:-bottom-8 lg:right-14 xl:-bottom-12 xl:scale-100 2xl:-bottom-2 2xl:right-28 2xl:scale-125"
            />
          </section>
        </Parallelogram>
      ) : (
        <div
          onAnimationEnd={handleAnimationEnd}
          onAnimationStart={handleAnimationStart}
          className={`${animationStarted ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100'} me-44 w-20 animate-waving text-9xl`}
        >
          👋
        </div>
      )}
    </main>
  )
}
