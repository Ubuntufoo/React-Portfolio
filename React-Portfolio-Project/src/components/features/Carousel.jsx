//an image carousel

import { useState, useRef, useEffect } from 'react'

export default function Carousel({ images }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const slidesContainerRef = useRef(null)
  const videoRefs = useRef([])

  const buttonClasses = 'size-4 md:size-7 bg-white cursor-pointer rounded-full'
  const slidesClasses =
    'w-full h-fit shrink-0 snap-center snap-always cursor-grab 2xl:cursor-auto first:ms-0 me-6 last:me-0 bg-white origin-center transition-all relative flex'
  const activeSlideClasses = ''

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber)
    const slidesContainer = slidesContainerRef.current
    // width of each slide
    const slideWidth = window.innerWidth;
    const slideMargin = 24 // margin-inline-end of each slide
    slidesContainer.scrollTo({
      left: slideNumber * (slideWidth + slideMargin),
      behavior: 'smooth',
    })
  }

  // Pause all videos except the active slide
  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      if (index === activeSlide) {
        videoRef.play() // Play the video if it's the active slide
      } else {
        videoRef.pause() // Pause the video if it's not the active slide
      }
    })
  }, [activeSlide])

  return (
    <div className="absolute bottom-7 overflow-hidden text-center">
      <div
        ref={slidesContainerRef}
        className="slides flex snap-x snap-mandatory overflow-x-auto scroll-smooth mb-4 xl:py-2"
      >
        {images.map((media, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className={`${slidesClasses} ${activeSlide === index ? activeSlideClasses : ''}`}
          >
            {/* Conditional rendering based on media type */}
            {media.type === 'image' && (
              <img src={media.src} alt={`Slide ${index}`} className="" />
            )}
            {media.type === 'video' && (
              <video
                ref={(ref) => (videoRefs.current[index] = ref)} // Store video refs for each slide
                controls
                className="h-full w-full object-scale-down"
              >
                <source src={media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {/* Additional content if needed */}
          </div>
        ))}
      </div>
      <div className="mx-auto space-x-6">
        {images.map((media, index) => (
          <button
            key={index}
            className={buttonClasses}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}
