// a shape component

import Marquee from "../pages/skills/Marquee";

export default function CombinedSlantedEdge({ children }) {

  return (
    <div className="combined-slanted-edge h-full absolute left-0 top-0 w-1/7 sm:w-1/8 md:w-1/9 xl:w-1/11 2xl:w-1/12 bg-white">
      <Marquee  />
      {children}
    </div>
  )
}