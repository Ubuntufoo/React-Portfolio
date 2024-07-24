// hero section of intro page

import { useState } from 'react'
import Button from '../../features/Button'
import Design1 from '../../../assets/Design1.png'
import Design2 from '../../../assets/Design2.png'

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(Design2)

  return (
    <main className="flex h-screen flex-col justify-center">
      <section className="isolate flex h-6/7 flex-col place-content-evenly place-items-center gap-10 pt-4 sm:gap-20 sm:text-lg md:gap-20 md:text-2xl lg:flex-row lg:place-content-center lg:gap-x-32 lg:ps-8 lg:pt-0 lg:text-2xl xl:gap-x-52 xl:ps-8 xl:text-3xl 3xl:ps-12">
        <div className="relative flex w-1/2 flex-col gap-4 rounded-lg border border-gray-950 bg-gray-950 pt-5 tracking-wide sm:w-1/4 sm:gap-0 sm:pt-8 md:w-2/5 md:gap-9 md:pt-10 lg:ms-12 lg:w-1/4 lg:gap-10 lg:pt-12 3xl:w-3/10">
          <div className="absolute inset-0 -z-10 h-full w-full rotate-[33deg] rounded-xl border border-gray-950 bg-gray-900"></div>
          <div className="absolute inset-0 -z-20 h-full w-full rotate-[60deg] rounded-xl border border-gray-950 bg-gray-600"></div>
          <div className="absolute inset-0 -z-30 h-full w-full rotate-[90deg] rounded-xl border border-gray-950 bg-gray-300"></div>
          <h1 className="whitespace-pre text-center italic text-gray-50">
            Hi, I&apos;m Tim
          </h1>
          <img
            src={imageSrc}
            alt="Tim's image as a cross hatch illustration"
            className="brightness-95"
            onMouseEnter={() => setImageSrc(Design1)}
            onMouseLeave={() => setImageSrc(Design2)}
          />
        </div>
        <div className="-z-10 flex h-2/5 w-full flex-col justify-around bg-gray-300 py-1 text-center lg:w-1/3 lg:gap-10 lg:bg-inherit lg:h-[55%] xl:h-6/10">
          <h2>
            Husband. <br /> Father.
          </h2>
          <h2
            className={`highlight mx-auto italic md:right-2 md:mb-0 md:ps-4 lg:ps-6 xl:ps-5`}
          >
            Web Developer
          </h2>
          <Button
            text="Explore"
            link="http://localhost:5173/#Projects"
            styles="md:px-10 md:py-5 lg:px-12 lg:py-8 px-8 py-4"
            isExternal={false}
          />
        </div>
      </section>
    </main>
  )
}
