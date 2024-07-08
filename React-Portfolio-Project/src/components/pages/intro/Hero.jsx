// hero section of intro page

import { useState } from 'react'
import Design1 from '../../../assets/Design1.png'
import Design2 from '../../../assets/Design2.png'

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(Design1)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [isTextHovered, setIsTextHovered] = useState(false)

  const handleButtonMouseEnter = () => {
    setImageSrc(Design2)
    setIsButtonHovered(true)
  }

  const handleButtonMouseLeave = () => {
    setImageSrc(Design1)
    setIsButtonHovered(false)
  }

  const handleTextMouseEnter = () => {
    setIsTextHovered(true)
  }

  const handleTextMouseLeave = () => {
    setIsTextHovered(false)
  }

  return (
    <main className="">
      <section className="isolate flex h-screen flex-col place-content-evenly place-items-center sm:gap-20 sm:text-lg md:gap-24 md:text-xl lg:flex-row lg:flex-wrap lg:place-content-center lg:gap-x-36 lg:ps-6 lg:pt-0 lg:text-2xl xl:gap-x-52 xl:ps-8 3xl:ps-12">
        <div className="relative flex w-1/2 cursor-pointer flex-col gap-3 rounded-lg border border-gray-950 bg-gray-950 pt-4 tracking-wide sm:w-2/5 sm:gap-7 sm:pt-8 md:w-1/3 md:gap-9 md:pt-10 lg:ms-12 lg:w-1/4 lg:gap-10 lg:pt-12">
          <div className="absolute inset-0 -z-10 h-full w-full rotate-[33deg] rounded-xl border border-gray-950 bg-gray-900"></div>
          <div className="absolute inset-0 -z-20 h-full w-full rotate-[60deg] rounded-xl border border-gray-950 bg-gray-600"></div>
          <div className="absolute inset-0 -z-30 h-full w-full rotate-[90deg] rounded-xl border border-gray-950 bg-gray-300"></div>
          <h1 className="whitespace-pre text-center text-gray-50">
            Hi, I&apos;m Tim.
          </h1>
          <img
            src={imageSrc}
            alt="Tim's image as a cross hatch illustration"
            className="brightness-95"
            onMouseEnter={() => setImageSrc(Design2)}
            onMouseLeave={() => setImageSrc(Design1)}
          />
        </div>
        <div className="-z-10 mt-4 flex h-1/4 w-full flex-col justify-center gap-4 bg-gray-300 text-center lg:basis-1/3 lg:space-y-24 lg:bg-inherit">
          <h2 className="whitespace-break-spaces">
            Husband. Father.
            <br />
            <span
              className={`highlight mt-4 cursor-pointer font-semibold italic lg:mt-6 ${isButtonHovered || isTextHovered ? 'highlight-hover' : ''}`}
              onMouseEnter={handleTextMouseEnter}
              onMouseLeave={handleTextMouseLeave}
            >
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
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-black px-7 py-3 text-gray-50 duration-500 hover:bg-blue-600"
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            <span className="z-40 font-roboto font-semibold tracking-wider">
              Explore
            </span>
            <div className="absolute inset-0 z-20 h-[90%] w-[100%] translate-x-[-95%] rotate-45 bg-gray-400 transition-all duration-500 group-hover:translate-x-[90%] group-hover:scale-100"></div>
          </a>
        </div>
      </section>
    </main>
  )
}
