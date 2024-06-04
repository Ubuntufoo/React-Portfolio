// smooth flex cards with images
import { useState } from 'react'

// import BrainteasersLogo from '../../../assets/projects/BrainteasersLogo.png'
import ExploreLLMscreenshot from '../../../assets/projects/ExploreLLMscreenshot.png'
import TADAapp from '../../../assets/projects/TADAapp.png'
// import WordlePlus from '../../../assets/projects/WordlePlus.png'
import workDashboardScreenshot from '../../../assets/projects/workDashboardScreenshot.png'

// Define an object to map image names to import paths
const imageImports = [
  // BrainteasersLogo,
  ExploreLLMscreenshot,
  TADAapp,
  // WordlePlus,
  workDashboardScreenshot,
];

export default function CardGallery() {
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (index) => {
    setSelectedCard(index)
  }

  const cards = imageImports.map((image, index) => (
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
        src={image}
        alt={`Image ${index}`}
        className="max-w-62 max-h-56"
      />
    </div>
  ))

  return (
    <section className="slide">
      <div
        className={`
          mx-auto flex h-screen w-screen items-center justify-center ps-32 ${selectedCard !== null && ' translate-y-52 transition-all duration-500'}`}
      >
        {cards}
      </div>
    </section>
  )
}
