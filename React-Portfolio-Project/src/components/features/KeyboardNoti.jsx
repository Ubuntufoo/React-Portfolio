// an alert for keyboard users that goes invisible after 3 seconds

import { useEffect, useState } from 'react'

export default function KeyboardNoti() {
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`${
        fade ? 'opacity-100' : ' transition-display opacity-0 duration-1000'
      } absolute bottom-3 right-7 hidden w-1/2 lg:w-1/3 2xl:w-1/4 cursor-default border-b-2 border-white pb-2 text-lg text-white ease-in lg:block`}
    >
      Keyboard Navigation Enabled
    </div>
  )
}
