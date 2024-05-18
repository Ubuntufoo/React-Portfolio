# React + Vite + TailwindCSS + FullPage.js Portfolio Project

npm WARN deprecated @babel/polyfill@7.12.1: 🚨 This package has been deprecated in favor of separate inclusion of a polyfill and regenerator-runtime (when needed). See the @babel/polyfill docs (https://babeljs.io/docs/en/babel-polyfill) for more information.
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.

// smooth flex cards with images
import { useState } from 'react'

// import BrainteasersLogo from '../../../assets/BrainteasersLogo.png'
import ExploreLLMscreenshot from '../../../assets/ExploreLLMscreenshot.png'
import TADAapp from '../../../assets/TADAapp.png'
// import WordlePlus from '../../../assets/WordlePlus.png'
import workDashboardScreenshot from '../../../assets/workDashboardScreenshot.png'

// Define an object to map image names to import paths
const imageImports = {
  // BrainteasersLogo,
  ExploreLLMscreenshot,
  TADAapp,
  // WordlePlus,
  workDashboardScreenshot,
}

export default function CardGallery({ activePage }) {
  const [selectedCard, setSelectedCard] = useState(null)

  let addFade = false
  if (activePage === 'projects') {
    addFade = true
  }

  const handleCardClick = (index) => {
    setSelectedCard(index)
  }

  const cards = Object.keys(imageImports).map((imageName, index) => (
    <div
      key={index}
      className={`${
        addFade ? 'visible animate-fade' : 'invisible'
      } -ml-24 bg-cyan-900 shadow transition-all duration-700 ${
        selectedCard === index
          ? '-translate-y-72 content-center	self-center shadow-2xl transition duration-700	'
          : 'scale-90 -skew-x-6 cursor-pointer'
      }`}
      onClick={() => handleCardClick(index)}
    >
      <img
        src={imageImports[imageName]}
        alt={imageName}
        className="max-w-62 max-h-52"
      />
    </div>
  ))

  return (
    <section className="slide">
      <div
        className={`mx-auto ms-10 flex h-screen w-screen items-center justify-center px-8 ${selectedCard !== null && 'translate-y-40 transition-all duration-700'}`}
      >
        {cards}
      </div>
    </section>
  )
}

  return (
    <section className="slide">
      <div
        id="Gallery"
        className={`${addFade ? 'visible animate-fade' : 'invisible'} mx-auto grid h-screen w-5/6 grid-cols-5 grid-rows-2 place-items-center gap-2`}
      >
        {cards}
      </div>
    </section>
  )
}
