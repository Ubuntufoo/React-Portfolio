// an image marquee that is pausable on hover. Images can be clicked to toggle fullscreen mode.

// import { useState } from 'react'

export default function ImgMarquee({ images }) {

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            className="w-full h-full object-cover"
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}