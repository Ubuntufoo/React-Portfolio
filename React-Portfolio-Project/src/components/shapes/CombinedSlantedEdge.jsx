// a shape component

import Marquee from "../pages/skills/Marquee";

export default function CombinedSlantedEdge({ children }) {

  return (
    <div className="combined-slanted-edge h-full absolute left-0 top-0 w-60 bg-white">
      <Marquee  />
      {children}
    </div>
  )
}