// an image carousel

// import { useState } from 'react'
// import { projMainContent } from '../../../utils/images'

export default function Carousel() {
  const anchorClasses =
    'inline-flex size-7 bg-white cursor-pointer no-underline place-content-evenly place-items-center rounded-full relative'
  const slidesClasses =
    'w-[300px] h-[300px] shrink-0 cursor-grab 2xl:cursor-auto snap-start me-6 rounded-2xl bg-white origin-center transition-all relative flex place-content-center place-items-center text-6xl'

  return (
    <div className="slider w-[300px] overflow-hidden text-center">
      <a href="#slide1" className={anchorClasses}>
        1
      </a>
      <a href="#slide2" className={anchorClasses}>
        2
      </a>
      <a href="#slide3" className={anchorClasses}>
        3
      </a>
      <a href="#slide4" className={anchorClasses}>
        4
      </a>
      <a href="#slide5" className={anchorClasses}>
        5
      </a>

      <div className="slides flex snap-mandatory overflow-x-auto scroll-smooth pt-4">
        <div id="slide1" className={slidesClasses}>
          1
        </div>
        <div id="slide2" className={slidesClasses}>
          2
        </div>
        <div id="slide3" className={slidesClasses}>
          3
        </div>
        <div id="slide4" className={slidesClasses}>
          4
        </div>
        <div id="slide5" className={slidesClasses}>
          5
        </div>
      </div>
    </div>
  )
}
