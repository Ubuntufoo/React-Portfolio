// hero section of intro page

// import { useState } from 'react'
import TimHero1 from '../../../assets/TimHero1.png'
// import BG1 from '../../../assets/BG1.png'

export default function Hero() {
  return (
    <main className="container mx-auto max-w-[1280px] bg-gray-400">
      <section className="isolate flex h-screen flex-col place-content-evenly lg:place-content-center place-items-center pt-12 sm:gap-20 sm:text-lg md:gap-24 md:text-xl lg:flex-row lg:flex-wrap lg:gap-x-36 lg:ps-6 lg:pt-0 lg:text-2xl xl:gap-x-52 xl:ps-8 3xl:ps-12">
        <div
          className="relative flex w-1/2 flex-col gap-5 rounded-lg border border-gray-950 bg-gray-950 pt-5
          tracking-wide sm:w-2/5 sm:gap-7  sm:pt-8 md:w-1/3 md:gap-9 md:pt-10 lg:ms-12 lg:w-3/10 lg:gap-10 lg:pt-12"
        >
          <div className="absolute inset-0 -z-10 h-full w-full rotate-[33deg] rounded-xl border border-gray-950 bg-gray-900"></div>
          <div className="absolute inset-0 -z-20 h-full w-full rotate-[60deg] rounded-xl border border-gray-950 bg-gray-600"></div>
          <div className="absolute inset-0 -z-30 h-full w-full rotate-[90deg] rounded-xl border border-gray-950 bg-gray-300"></div>
          <h1 className="whitespace-pre text-center text-gray-50">
            Hi, I&apos;m Tim.
          </h1>
          <img
            src={TimHero1}
            alt="Tim's image as a cross hatch illustration"
            className="mx-auto brightness-95"
          />
        </div>
        <div className="space-y-4 mt-4 text-center bg-gray-300 lg:bg-inherit w-full lg:basis-1/3 -z-10 py-5 lg:space-y-24">
          <h2 className="whitespace-break-spaces">
            Husband. Father.
            <br />
            <span className="highlight mt-4 cursor-pointer font-semibold italic lg:mt-6">
              Web Developer.
            </span>
          </h2>
          <p className="whitespace-pre-wrap">
            I thrive on challenge
            <br />
            and bring common sense
            <br />
            to the table.
          </p>
        </div>
        <div className="mx-auto shadow-lg shadow-white">
          <a
            href=""
            target="_blank"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-black px-7 py-3 text-white focus:ring-4 focus:ring-blue-300"
          >
            <span className="z-40">Explore</span>
            <div className="absolute inset-0 z-20 h-[90%] w-[100%] translate-x-[-90%] rotate-45 bg-white/30 transition-all duration-1000 group-hover:translate-x-[90%] group-hover:scale-100"></div>
          </a>
        </div>
      </section>
    </main>
  )
}
