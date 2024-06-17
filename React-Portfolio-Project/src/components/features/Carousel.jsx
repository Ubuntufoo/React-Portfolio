//
import { useState } from 'react'
import ServerTooltip from './ServerTooltip'
import { FaLink } from 'react-icons/fa'
// import { PiArrowFatLinesDownFill, PiArrowFatLinesUpFill } from 'react-icons/pi'

export default function Carousel({
  images,
  currentIndex: propCurrentIndex,
  setCurrentIndex: propSetCurrentIndex,
  children,
  tabsType = '',
}) {
  // If props are not provided, manage state internally
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  const currentIndex =
    propCurrentIndex !== undefined ? propCurrentIndex : internalCurrentIndex
  const setCurrentIndex =
    propSetCurrentIndex !== undefined
      ? propSetCurrentIndex
      : setInternalCurrentIndex

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  if (!images[currentIndex]) {
    return null
  }

  const renderLink = (href, showTooltip) => (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="group absolute self-center top-full mt-4"
    >
      <FaLink className="cursor-pointer text-2xl text-black transition-all duration-500 hover:scale-[1.20] 2xl:text-5xl" />
      {showTooltip && <ServerTooltip />}
    </a>
  )

  return (
    <div className="flex h-screen flex-col gap-y-5">
      <div className="flex w-full basis-1/2 place-items-center justify-center gap-x-3 pt-16 lg:mt-6 lg:pt-0 3xl:basis-2/3">
        <div className=" w-4/5 sm:w-2/3 md:w-6/10 lg:w-1/2 xl:w-9/20">
          {images[currentIndex].type === 'video' ? (
            <video
              autoPlay
              muted
              src={images[currentIndex].src}
              alt={images[currentIndex].label}
              className={`relative z-40 mx-auto h-[500px] max-h-52 origin-top cursor-pointer rounded object-scale-down transition-all duration-300 sm:max-h-56 md:max-h-60 lg:max-h-64 xl:max-h-80 2xl:max-h-[360px] 3xl:max-h-[380px]`}
              controls
              onClick={handleClick}
            />
          ) : (
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].label}
              className={`lg:max-h-68 relative z-40 mx-auto h-[500px] max-h-52 origin-top cursor-pointer rounded object-scale-down transition-all duration-300 sm:max-h-56 md:max-h-64 xl:max-h-80 2xl:max-h-[360px] ${isClicked ? 'scale-x-[1.9] scale-y-[1.8]' : '3xl:scale-[1.05]'}`}
              onClick={handleClick}
            />
          )}
        </div>
        <div className="relative flex w-10 shrink flex-col gap-y-2 md:w-10 xl:w-16">
          <button
            onClick={handlePrevClick}
            className=" inline-block  bg-gradient-to-b from-white to-cyan-950 text-white transition-all duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
          ></button>
          <button
            onClick={handleNextClick}
            className=" rotate-180 bg-gradient-to-t from-cyan-950 to-white text-white transition-all duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
          ></button>
          {tabsType === 'tabsTADA' &&
            renderLink('https://tada-w0iq.onrender.com', true)}
          {tabsType === 'tabsBrainteasers' &&
            renderLink('https://brainteasers.herokuapp.com/', false)}
        </div>
      </div>
      <div className=" flex h-1/2 basis-1/2 flex-col place-content-start place-items-center bg-cyan-200 text-center lg:trapezoid">
        {children}
      </div>
    </div>
  )
}
