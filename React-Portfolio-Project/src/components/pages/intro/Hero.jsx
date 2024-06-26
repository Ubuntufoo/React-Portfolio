// hero section of intro page

import Parallelogram from '../../shapes/Parallelogram'
import { useState } from 'react'
import Tim1_5 from '../../../assets/Tim1_5.jpg'
import BG1 from '../../../assets/BG1.png'

const parallelogramClasses =
  'bg-cyan-950 w-full h-full md:h-5/6 lg:w-4/5 lg:h-5/6 bg-gradient-to-b md:bg-gradient-to-r from-cyan-100 to-cyan-950 from-30% to-80%'

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
    <main className="flex h-svh items-center justify-center">
      {animationEnded ? (
        <Parallelogram parallelogramClasses={parallelogramClasses}>
          <section className="grid h-full grid-cols-1 grid-rows-6">
            <img
              src={BG1}
              alt="work desk with laptop"
              className="absolute left-0 top-0 -z-10 size-full object-cover opacity-20 blur-[3px] brightness-50"
            />
            <img
              src={Tim1_5}
              alt="Tim's image"
              className="absolute -bottom-20 -right-20 scale-[0.7] animate-fade sm:-bottom-8  md:-right-2 md:bottom-10 md:scale-100 lg:-bottom-20 lg:right-4 lg:scale-50 xl:-bottom-6 xl:right-24 xl:scale-75 2xl:bottom-0 2xl:right-60 2xl:scale-110 3xl:bottom-16 3xl:right-96 3xl:scale-[1.35]"
            />
            <div className="relative z-10 row-start-2 mx-5 h-fit animate-fade p-2 ps-4 leading-snug text-black md:text-2xl lg:ps-4 lg:text-xl xl:ps-10 xl:pt-6 2xl:space-y-9 2xl:ps-20 2xl:pt-8 2xl:text-2xl 3xl:ps-28 3xl:pt-14">
              <h1 className="pb-4 text-2xl md:text-3xl xl:text-4xl 2xl:max-3xl:pb-0 3xl:pb-4">
                Welcome. I&apos;m Tim. <br />
              </h1>
              <p className="text-pretty">
                <span className="inline-flex flex-wrap gap-2.5">
                  {[
                    'Husband.',
                    'Father.',
                    <strong className="font-semibold italic" key={4}>
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
          className={`${animationStarted ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100'} me-44 w-28 animate-waving text-8xl 2xl:w-40 2xl:text-[140px]`}
          aria-hidden={!animationStarted}
        >
          👋
        </div>
      )}
    </main>
  )
}
