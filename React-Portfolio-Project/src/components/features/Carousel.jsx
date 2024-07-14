//an image carousel

import { useState, useRef, useEffect } from 'react'

export default function Carousel({ images }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const slidesContainerRef = useRef(null)
  const videoRefs = useRef([])

  const screenWidth = window.innerWidth

  const buttonClasses = 'size-4 md:size-7 bg-white cursor-pointer rounded-full'
  const slidesClasses =
    'w-full h-fit shrink-0 snap-center snap-always cursor-grab 2xl:cursor-auto first:ms-0 me-6 last:me-0 bg-gray-400 origin-center transition-all relative flex'
  const activeSlideClasses = ''

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber)
    const slidesContainer = slidesContainerRef.current
    // width of each slide
    const slideWidth = screenWidth
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

  // Toggle fullscreen mode on image click event
  const handleImageClick = (event) => {
    const imageElement = event.target

    if (!isFullscreen) {
      if (imageElement.requestFullscreen) {
        imageElement.requestFullscreen()
      } else if (imageElement.mozRequestFullScreen) {
        imageElement.mozRequestFullScreen()
      } else if (imageElement.webkitRequestFullscreen) {
        imageElement.webkitRequestFullscreen()
      } else if (imageElement.msRequestFullscreen) {
        imageElement.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }

    setIsFullscreen(!isFullscreen)
  }

  // Handle ESC key press to exit fullscreen mode
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        setIsFullscreen(false)
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [isFullscreen])



  return (
    <div className="absolute bottom-[11%] overflow-hidden text-center">
      <div
        ref={slidesContainerRef}
        className="slides mb-2 flex snap-x snap-mandatory overflow-x-auto scroll-smooth xl:py-2"
      >
        {images.map((media, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className={`${slidesClasses} ${activeSlide === index ? activeSlideClasses : ''}`}
          >
            {/* Conditional rendering based on media type */}
            {media.type === 'image' && (
              <img
                src={media.src}
                alt={`Slide ${index}`}
                className={`mx-auto max-w-screen max-h-52 object-contain`}
                onClick={handleImageClick}
              />
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
