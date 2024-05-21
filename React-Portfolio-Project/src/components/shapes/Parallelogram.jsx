// a generic parallelogram shape component

import BG1 from '../../assets/BG1.png'

export default function Parallelogram({ children }) {
  return (
    <div className="h-full w-full bg-cyan-950 parallelogram md:h-3/4 md:w-4/5 lg:h-5/6">
      {children}
      <img
        src={BG1}
        alt="background"
        className="absolute left-0 top-0 -z-10 size-full object-cover opacity-10"
      />
    </div>
  )
}