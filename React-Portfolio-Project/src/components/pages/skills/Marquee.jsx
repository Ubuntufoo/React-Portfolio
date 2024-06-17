// A vertical marquee component that displays my web dev tech stack

import { logos } from '../../../utils/images'

function MarqueeRow({ className }) {
  return (
    <div className={className}>
      {logos.map((logo, index) => (
        <span
          key={index}
          className={`${logo.additionalClass} mx-1 sm:mx-3 2xl:mx-4`}
        >
          <img src={logo.src} alt={logo.alt} />
        </span>
      ))}
    </div>
  )
}

// Marquee uses 2 absolutely positioned columns of logos inside a relative container.
// Column animation begins on 0% and -100% screen innerHeight, overflow is hidden
// on y-axis.
export default function Marquee() {
  return (
    <div className="z-10 ms-1 w-1/10 lg:w-1/12 xl:w-1/14 2xl:w-1/16">
      <div className="relative flex h-svh flex-col overflow-y-hidden">
        <MarqueeRow className="absolute -z-10 flex grow animate-marquee flex-col gap-8" />
        <MarqueeRow className="absolute -z-10 flex animate-marquee2 flex-col gap-8" />
      </div>
    </div>
  )
}
