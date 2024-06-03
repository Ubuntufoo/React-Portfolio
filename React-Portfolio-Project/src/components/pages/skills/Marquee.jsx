// a vertical marquee component that displays my web dev tech stack

import JS_no_BG from "../../../assets/marquee/JS_no_BG.png";
import NODEJS_no_BG from "../../../assets/marquee/NODEJS_no_BG.png";
import REACT_no_BG from "../../../assets/marquee/REACT_no_BG.png";
import VUE_no_BG from "../../../assets/marquee/VUE_no_BG.png";
import BS_no_BG from "../../../assets/marquee/BS_no_BG.png";
import DJANGO_no_BG from "../../../assets/marquee/DJANGO_no_BG.png";
import PYTHON_no_BG from "../../../assets/marquee/PYTHON_no_BG.png";
import SQL_no_BG from "../../../assets/marquee/SQL_no_BG.png";
import tailwindIMG from '../../../assets/marquee/tailwindIMG.png';

const logos = [
  { src: SQL_no_BG, alt: 'SQL Logo', additionalClass: '' },
  { src: PYTHON_no_BG, alt: 'Python Logo', additionalClass: '' },
  { src: DJANGO_no_BG, alt: 'Django Logo', additionalClass: '' },
  { src: NODEJS_no_BG, alt: 'NodeJS Logo', additionalClass: 'scale-90' },
  { src: REACT_no_BG, alt: 'React Logo', additionalClass: 'scale-90' },
  { src: VUE_no_BG, alt: 'Vue Logo', additionalClass: '' },
  { src: BS_no_BG, alt: 'Bootstrap Logo', additionalClass: 'scale-125' },
  { src: JS_no_BG, alt: 'JavaScript Logo', additionalClass: '' },
  { src: tailwindIMG, alt: 'Tailwind CSS Logo', additionalClass: 'scale-90' }
]

function MarqueeRow({ className }) {
  return (
    <div className={className}>
      {logos.map((logo, index) => (
        <span key={index} className={`${logo.additionalClass}`}>
          <img src={logo.src} alt={logo.alt} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className=" relative w-1/10 md:w-1/11 lg:w-1/12 xl:w-1/14 2xl:w-1/18">
      <div className="relative flex h-screen flex-col overflow-y-hidden">
        <MarqueeRow className="absolute flex grow animate-marquee gap-5 flex-col whitespace-nowrap" />
        <MarqueeRow className="absolute top-0 flex animate-marquee2 gap-5 flex-col whitespace-nowrap" />
      </div>
    </div>
  )
}