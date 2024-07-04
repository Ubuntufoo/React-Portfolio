// hero section of intro page

// import { useState } from 'react'
import TimHero1 from '../../../assets/TimHero1.png'
// import BG1 from '../../../assets/BG1.png'

export default function Hero() {
  return (
    <main className="container mx-auto max-w-[1024px] px-4">
      <section className=" flex h-screen flex-col place-content-center place-items-center gap-20">
        <div className="relative w-1/2  rounded-lg border border-black bg-gray-50 pt-16">
          <div className="absolute inset-0 -z-10 h-full w-full rotate-[20deg] rounded-lg  border border-black bg-gray-200"></div>
          <div className="absolute inset-0 -z-20 h-full w-full rotate-45 rounded-lg   border border-black bg-gray-600"></div>
          <div className="absolute inset-0 -z-30 h-full w-full rotate-[66deg] rounded-lg  border border-black bg-gray-900"></div>
          <div className="absolute inset-0 -z-40 h-full w-full rotate-90 rounded-lg  border border-black bg-black"></div>

          <img
            src={TimHero1}
            alt="Tim image in cross hatch style"
            className="mx-auto brightness-95"
          />
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          tempore, iure modi temporibus amet aspernatur Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </section>
    </main>
  )
}
