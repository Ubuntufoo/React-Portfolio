// a vertical marquee component that displays my web dev tech stack

import JS_no_BG from '../../../assets/marquee/JS_no_BG.png'
import NODEJS_no_BG from '../../../assets/marquee/NODEJS_no_BG.png'
import REACT_no_BG from '../../../assets/marquee/REACT_no_BG.png'
import VUE_no_BG from '../../../assets/marquee/VUE_no_BG.png'
import BS_no_BG from '../../../assets/marquee/BS_no_BG.png'
import DJANGO_no_BG from '../../../assets/marquee/DJANGO_no_BG.png'
import PYTHON_no_BG from '../../../assets/marquee/PYTHON_no_BG.png'
import SQL_no_BG from '../../../assets/marquee/SQL_no_BG.png'
import tailwindIMG from '../../../assets/marquee/tailwindIMG.png'

const logos = [
  { src: SQL_no_BG, alt: 'SQL Logo', additionalClass: 'my-4' },
  { src: PYTHON_no_BG, alt: 'Python Logo', additionalClass: '' },
  { src: DJANGO_no_BG, alt: 'Django Logo', additionalClass: 'my-3' },
  { src: NODEJS_no_BG, alt: 'NodeJS Logo', additionalClass: 'scale-90' },
  { src: REACT_no_BG, alt: 'React Logo', additionalClass: 'scale-90 my-3' },
  { src: VUE_no_BG, alt: 'Vue Logo', additionalClass: 'mt-1' },
  { src: BS_no_BG, alt: 'Bootstrap Logo', additionalClass: 'scale-125 my-2' },
  { src: JS_no_BG, alt: 'JavaScript Logo', additionalClass: '' },
  {
    src: tailwindIMG,
    alt: 'Tailwind CSS Logo',
    additionalClass: 'scale-90 mb-7 mt-3',
  },
]

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

export default function Marquee() {
  return (
    <div className="relative ms-1 w-1/10 overflow-hidden lg:w-1/12 xl:w-1/14 2xl:w-1/16">
      <div className="relative flex h-screen flex-col overflow-y-hidden">
        <MarqueeRow className="absolute -z-10 flex grow animate-marquee flex-col gap-6 whitespace-nowrap" />
        <MarqueeRow className="absolute -z-10 flex animate-marquee2 flex-col gap-6 whitespace-nowrap" />
      </div>
    </div>
  )
}
