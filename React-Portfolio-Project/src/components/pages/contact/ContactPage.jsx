// child component showing a contact form

import Form from "./Form";

import { useState } from 'react'

// import KeyboardArrows from '../../features/KeyboardArrows'

export default function ContactPage() {
   const [mapClicked, setMapClicked] = useState(false)

   const handleIframeClick = () => {
     if (!mapClicked) {
       setMapClicked(true)
     }
   }


  // const keyStyling = {
  //   up: keyClasses.keyActiveClass,
  //   down: keyClasses.keyActiveClass,
  //   left: keyClasses.keyInactiveClass,
  //   right: keyClasses.keyInactiveClass,
  // }

  return (
    <div className="section fp-auto-height-responsive bg-gradient-to-b from-cyan-500 to-cyan-900">
      <section className="h-svh w-full">
        <div
          onClick={handleIframeClick}
          className="absolute inset-x-0 bottom-0 h-1/2 2xl:inset-0 2xl:h-full 2xl:py-24"
        >
          <iframe
            className={`size-full ${mapClicked ? '' : 'pointer-events-none'} brightness-95`}
            title="Map of My Area"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d577535.4481921741!2d-70.57730647838702!3d41.746259274639996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1717389756189!5m2!1sen!2sus"
            allowFullScreen={false}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Form />
      </section>
      {/* <KeyboardArrows keyStyling={keyStyling} /> */}
    </div>
  )
}
