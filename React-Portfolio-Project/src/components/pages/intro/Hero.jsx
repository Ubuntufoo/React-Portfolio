// hero section of intro page

import Parallelogram from '../../shapes/Parallelogram'
import { useState } from 'react'
import Tim1_5 from '../../../assets/Tim1_5.jpg'
import BG1 from '../../../assets/BG1.png'

const parallelogramClasses =
  'bg-cyan-950 w-full h-full md:h-5/6 lg:w-3/4 lg:h-5/6'

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
        <Parallelogram parallelogramClasses={parallelogramClasses}>
          <section className="size-full">
            <img
              src={BG1}
              alt="work desk with laptop"
              className="absolute left-0 top-0 -z-10 size-full object-cover opacity-30 blur-[4px] brightness-50"
            />
            <img
              src={Tim1_5}
              alt="Tim's image"
              className="absolute -bottom-14 -right-20 scale-75 animate-fade sm:-bottom-8  md:-right-2 md:bottom-10 md:scale-100 lg:-bottom-20 lg:right-4 lg:scale-50 xl:-bottom-6 xl:right-24 xl:scale-75 2xl:bottom-6 2xl:right-72 2xl:scale-125"
            />
            <div className="relative z-10 mx-6 animate-fade space-y-5 pt-28 leading-tight text-orange-50 md:mx-8 md:pt-36 md:text-2xl lg:pt-24 lg:text-xl 2xl:mx-24 2xl:space-y-8 2xl:pt-32 2xl:text-2xl 2xl:leading-snug">
              <h1 className="text-2xl md:text-3xl xl:text-4xl">
                Welcome. I&apos;m Tim. <br />
              </h1>
              <p className="text-pretty">
                <span className="inline-flex flex-wrap gap-4">
                  {[
                    'Introvert.',
                    'Athlete.',
                    'Husband.',
                    'Father.',
                    <strong className="italic" key={4}>
                      Web Developer.
                    </strong>,
                  ].map((word, index) => (
                    <span key={index}>{word}</span>
                  ))}
                </span>
                <br />
                <br />
                I thrive on challenge and bring precision <br />
                and common sense to every project I innovate.
                <br />
                <br />
                As a team, we can bring your projects to new heights.
              </p>
            </div>
          </section>
        </Parallelogram>
      ) : (
        <div
          onAnimationEnd={handleAnimationEnd}
          onAnimationStart={handleAnimationStart}
          className={`${animationStarted ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100'} me-44 w-28 2xl:w-40 animate-waving text-8xl 2xl:text-[140px]`}
        >
          👋
        </div>
      )}
    </main>
  )
}
