// layered cards each detailing a skill

import { useState, useEffect, useRef } from 'react'
import { skillCardsContent } from '../../../utils/images'

const translateClasses = [
  'z-50',
  'z-40 translate-x-2/3 3xl:translate-x-[110%]',
  'z-30 translate-x-[132%] 3xl:translate-x-[220%]',
  'z-20 translate-x-[201%] 3xl:translate-x-[330%]',
]

const getBreakpoint = (width) => {
  if (width >= 1920) return '3xl'
  if (width >= 1536) return '2xl'
  if (width >= 1280) return 'xl'
  if (width >= 1024) return 'lg'
  if (width >= 768) return 'md'
  if (width >= 640) return 'sm'
  return 'default'
}

export default function SkillsGrid() {
  const [activeCard, setActiveCard] = useState(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [breakpoint, setBreakpoint] = useState('default')
  const sampleElementRef = useRef(null)

  const handleClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null)
    } else {
      setActiveCard(index)
    }
  }

  const updateDimensions = () => {
    const element = sampleElementRef.current
    if (element) {
      setDimensions({
        width: element.offsetWidth,
        height: element.offsetHeight,
      })
      setBreakpoint(getBreakpoint(window.innerWidth))
    }
  }

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  const getTranslateYValue = () => {
    switch (breakpoint) {
      case '3xl':
        return (3.6 / 10) * dimensions.height
      case '2xl':
        return (5.5 / 10) * dimensions.height
      case 'xl':
        return (6 / 10) * dimensions.height
      case 'lg':
        return (6.5 / 10) * dimensions.height
      case 'md':
        return (5 / 10) * dimensions.height
      case 'sm':
        return (5 / 10) * dimensions.height
      default:
        return (3 / 10) * dimensions.height
    }
  }

  return (
    <main className="relative mx-auto h-screen flex-col place-content-center place-items-center 3xl:w-full">
      <p
        className={`absolute inset-x-0 bottom-1/3 mx-auto w-4/5 text-center font-roboto text-lg font-bold leading-8 tracking-wide transition duration-300 ${activeCard == null ? 'opacity-100' : 'opacity-0'}`}
      >
        Click a tile to learn more.
      </p>

      <div
        ref={sampleElementRef}
        className="relative top-[13%] mx-auto h-screen w-[90%]"
      >
        {skillCardsContent.map((skill, index) => (
          <div key={index}>
            <div
              onClick={() => handleClick(index)}
              style={{
                transform:
                  activeCard === index
                    ? `translateY(${getTranslateYValue()}px) translateX(100%)`
                    : undefined,
              }}
              className={`
                absolute h-fit w-1/3 cursor-pointer overflow-hidden rounded-lg border border-gray-400 bg-gray-300 font-roboto
                shadow-lg shadow-gray-600 transition-all duration-300 active:shadow-none 2xl:w-1/5 3xl:left-44 3xl:w-1/6
                ${activeCard !== index ? translateClasses[index] : 'z-50 opacity-0'}`}
            >
              <img src={skill.img} alt={skill.title} className="object-cover" />
            </div>
            <div
              className={`absolute bottom-0 h-4/5 space-y-6 text-sm transition-all duration-500 ${
                activeCard === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h1 className="text-center font-roboto text-xl font-bold underline underline-offset-8">
                {skill.title}
              </h1>
              <div className="space-y-4">
                <div className="space-y-1 rounded-lg bg-gray-50 p-2">
                  <h2 className="text-lg font-semibold">{skill.firstHeader}</h2>
                  <p className="text-pretty indent-4">{skill.firstPara}</p>
                </div>
                <div className="space-y-1 rounded-lg bg-gray-50 p-2">
                  <h3 className="text-lg font-semibold">
                    {skill.secondHeader}
                  </h3>
                  <p className="text-pretty indent-4">{skill.secondPara}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
