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

  const handleCardClick = (index) => {
    setSelectedCard(index)
  }

  const cards = Object.keys(imageImports).map((imageName, index) => (
    <div
      key={index}
      className={`-ml-44 shadow-2xl transition-all duration-700 ${
        selectedCard === index
          ? 'absolute -translate-y-96 -translate-x-96 scale-150 animate-fade transition duration-700'
          : 'animate-fadeFast -skew-x-6 cursor-pointer'
      }`}
      onClick={() => handleCardClick(index)}
    >
      <img
        src={imageImports[imageName]}
        alt={imageName}
        className="max-w-62 max-h-56"
      />
    </div>
  ))

  return (
    <section className="slide">
      <div
        // ${activePage === 'projects' ? 'visible animate-fade' : 'invisible'}
        className={`
          mx-auto flex h-screen w-screen items-center justify-center ps-32 ${selectedCard !== null && ' translate-y-52 transition-all duration-500'}`}
      >
        {cards}
      </div>
    </section>
  )
}