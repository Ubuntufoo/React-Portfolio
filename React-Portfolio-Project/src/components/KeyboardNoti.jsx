// an alert for keyboard users that goes invisible after 3 seconds

import { useEffect, useState } from 'react'

export default function KeyboardNoti() {
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false)
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`${
        fade ? 'opacity-100' : ' transition-display opacity-0 duration-1000'
      } absolute bottom-5 right-10 hidden w-2/5 cursor-pointer border-b-2 border-white pb-2 text-lg text-white ease-in lg:block xl:w-1/4`}
    >
      Keyboard Navigation Enabled
    </div>
  )
}
