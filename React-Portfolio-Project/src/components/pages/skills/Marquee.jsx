// a vertical marquee component that displays my web dev tech stack

import nodeJSIMG from '../../../assets/marquee/nodeJSIMG.jpg'
import reactIMG from '../../../assets/marquee/reactIMG.png'
import tailwindIMG from '../../../assets/marquee/tailwindIMG.png'
import bootstrapIMG from '../../../assets/marquee/bootstrapIMG.webp'
import djangoIMG from '../../../assets/marquee/djangoIMG.png'
import htmlandcssIMG from '../../../assets/marquee/htmlandcssIMG.jpg'
import jsIMG from '../../../assets/marquee/jsIMG.jpg'
import pythonIMG from '../../../assets/marquee/pythonIMG.png'
import vueIMG from '../../../assets/marquee/vueIMG.jpg'
import sqlIMG from '../../../assets/marquee/sqlIMG.png'

const logos = [
  { src: sqlIMG, alt: "SQL Logo", additionalClass: "" },
  { src: djangoIMG, alt: "Django Logo", additionalClass: "" },
  { src: pythonIMG, alt: "Python Logo", additionalClass: "" },
  { src: bootstrapIMG, alt: "Bootstrap Logo", additionalClass: "scale-125" },
  { src: tailwindIMG, alt: "Tailwind CSS Logo", additionalClass: "scale-90" },
  { src: vueIMG, alt: "Vue Logo", additionalClass: "" },
  { src: reactIMG, alt: "React Logo", additionalClass: "" },
  { src: nodeJSIMG, alt: "NodeJS Logo", additionalClass: "scale-90" },
  { src: jsIMG, alt: "JavaScript Logo", additionalClass: "" },
  { src: htmlandcssIMG, alt: "HTML and CSS Logo", additionalClass: "mb-8 scale-150" },
];

function MarqueeRow({ className }) {
  return (
    <div className={className}>
      {logos.map((logo, index) => (
        <span key={index} className={`mx-2  md:mx-3 lg:mx-5 ${logo.additionalClass}`}>
          <img src={logo.src} alt={logo.alt} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="flex relative h-screen flex-col overflow-y-hidden">
      <MarqueeRow className="animate-marquee absolute flex grow flex-col gap-8 whitespace-nowrap" />
      <MarqueeRow className="animate-marquee2 absolute top-0 flex flex-col gap-8 whitespace-nowrap" />
    </div>
  );
}