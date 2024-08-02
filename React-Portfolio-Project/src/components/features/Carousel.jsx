//an image carousel

import { useState, useRef, useEffect } from 'react'
import { toggleFullscreen, exitFullscreenOnEscape } from '../../utils/utils'

export default function Carousel({ images }) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const slidesContainerRef = useRef(null)
  const videoRefs = useRef([])

  const carouselWidth =
    window.innerWidth >= 1920 ? window.innerWidth / 1.5 : window.innerWidth

  const handleImageClick = (event) => {
    toggleFullscreen(event.target, isFullscreen)
    setIsFullscreen(prevFullscreen => !prevFullscreen);
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        exitFullscreenOnEscape()
        setIsFullscreen(false)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [isFullscreen])

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber)
    const slidesContainer = slidesContainerRef.current
    const slideWidth = carouselWidth
    const slideMargin = 24
    slidesContainer.scrollTo({
      left: slideNumber * (slideWidth + slideMargin),
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const slidesContainer = slidesContainerRef.current

    const onScroll = () => {
      const { scrollLeft } = slidesContainer
      const slideWidth = carouselWidth + 24 // Including margin
      const newActiveSlide = Math.round(scrollLeft / slideWidth)
      setActiveSlide(newActiveSlide)
    }

    slidesContainer.addEventListener('scroll', onScroll)

    return () => {
      slidesContainer.removeEventListener('scroll', onScroll)
    }
  }, [carouselWidth])

  const slidesClasses =
    'w-full h-fit mt-auto shrink-0 snap-center snap-always cursor-grab 2xl:cursor-auto first:ms-0 me-6 last:me-0 bg-gray-400 origin-center transition-all relative flex'
  const activeSlideClasses = ''

  return (
    <div className="absolute inset-x-0 bottom-[14%] overflow-hidden text-center md:bottom-[7.7%] 2xl:bottom-[3%] 3xl:bottom-[6%]">
      <div
        ref={slidesContainerRef}
        className="slides mx-auto mb-2.5 flex snap-x snap-mandatory overflow-x-auto scroll-smooth xl:py-2"
      >
        {images.map((media, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className={`${slidesClasses} ${activeSlide === index ? activeSlideClasses : ''}`}
          >
            {media.type === 'image' && (
              <img
                src={media.src}
                alt={`Slide ${index}`}
                className={`max-w-screen mx-auto max-h-52 ${isFullscreen ? 'cursor-zoom-out' : 'cursor-zoom-in'} object-contain sm:rounded md:max-h-96 md:max-w-[460px] lg:max-h-80 xl:max-h-80 xl:max-w-[550px] 2xl:max-h-[230px] 3xl:max-h-[250px] 3xl:max-w-[657px]`}
                onClick={handleImageClick}
              />
            )}
            {media.type === 'video' && (
              <video
                ref={(ref) => (videoRefs.current[index] = ref)}
                controls
                className="max-w-screen mx-auto max-h-52 object-contain sm:rounded md:max-h-96 md:max-w-[460px] lg:max-h-80 xl:max-h-80 xl:max-w-[550px] 2xl:max-h-[230px] 3xl:max-h-[250px] 3xl:max-w-[657px]"
              >
                <source src={media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
      <menu className="mx-auto space-x-8">
        {images.map((media, index) => (
          <button
            aria-label="button"
            key={index}
            className={`size-4 cursor-pointer rounded-full md:size-5 xl:size-6 ${
              activeSlide === index ? 'bg-gray-950' : 'bg-gray-50'
            }`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </menu>
    </div>
  )
}

