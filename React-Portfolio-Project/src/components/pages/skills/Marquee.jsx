// a vertical marquee component that displays the skills of the user

import nodeJSIMG from '../../../assets/nodeJSIMG.jpg'
import reactIMG from '../../../assets/reactIMG.png'
import tailwindIMG from '../../../assets/tailwindIMG.png'

export default function Marquee() {

  return (
    <div className="relative flex h-full flex-col overflow-y-hidden">
      <div className="animate-marquee absolute flex grow flex-col gap-12 whitespace-nowrap">
        <span className="mx-16 mt-9">
          <img src={nodeJSIMG} alt="NodeJS Logo" />
        </span>
        <span className="mx-16">
          <img src={reactIMG} alt="React Logo" />
        </span>
        <span className="mx-16 ">
          <img src={tailwindIMG} alt="Tailwind CSS Logo" />
        </span>
      </div>
      <div className="animate-marquee2 absolute top-0 flex flex-col gap-11 whitespace-nowrap">
        <span className="mx-16  mt-7">
          <img src={nodeJSIMG} alt="NodeJS Logo" />
        </span>
        <span className="mx-16 ">
          <img src={reactIMG} alt="React Logo" />
        </span>
        <span className="mx-16 ">
          <img src={tailwindIMG} alt="Tailwind CSS Logo" />
        </span>
      </div>
    </div>
  )
}