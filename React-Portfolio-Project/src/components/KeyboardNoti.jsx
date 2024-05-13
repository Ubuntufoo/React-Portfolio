// an alert for keyboard users that goes invisible after 3 seconds

import { useEffect, useState } from 'react'

export default function KeyboardNoti() {
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`${
        fade ? 'opacity-100' : 'opacity-0'
      } invisible lg:visible absolute bottom-5 right-10 w-1/4 cursor-pointer border-b-2 border-white pb-2 text-xl text-white transition-opacity duration-500 ease-in`}
    >
      Keyboard Navigation Enabled
    </div>
  )
}
