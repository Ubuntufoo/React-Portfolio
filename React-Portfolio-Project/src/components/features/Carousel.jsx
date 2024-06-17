//
import { useState } from 'react'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (event) => {
    setIsClicked(!isClicked)
    requestFullscreen(event.target)
  }

  const requestFullscreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
      /* Firefox */
      element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
      /* IE/Edge */
      element.msRequestFullscreen()
    }
  }

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  return (
    <div className="carousel">
      {images[currentIndex].type === 'video' ? (
        <video
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
      <div className="relative flex w-10 shrink flex-col gap-y-2 md:w-10 xl:w-16">
        <button
          onClick={handlePrevClick}
          className=" inline-block  bg-gradient-to-b from-white to-cyan-950 text-white transition-all duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
        ></button>
        <button
          onClick={handleNextClick}
          className=" rotate-180 bg-gradient-to-t from-cyan-950 to-white text-white transition-all duration-150 trapezoid-button hover:scale-110 hover:bg-teal-950 active:-skew-x-6 active:scale-90"
        ></button>
      </div>
    </div>
  )
}

export default Carousel
