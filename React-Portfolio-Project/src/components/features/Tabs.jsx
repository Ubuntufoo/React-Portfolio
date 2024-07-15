// a tabs component that takes an array of objects each having a key of id and content

import { useState } from 'react'
import { PiMouseScroll } from 'react-icons/pi'

export default function Tabs({ tabsContent }) {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const sliderLeftOffset = () => {
    switch (activeTab) {
      case 0:
        return 'left-1'
      case 1:
        return 'left-[27.5%]'
      case 2:
        return 'left-[52.8%]'
      case 3:
        return 'left-[75%]'
      default:
        return 'left-0.5' // Default to first tab
    }
  }

  if (!tabsContent || !Array.isArray(tabsContent)) {
    return null
  }

  return (
    <div className="relative top-[12.5%] mx-auto flex h-[8%] w-[92%] md:w-3/4 flex-col justify-between">
      <div
        role="tablist"
        aria-label="tabs"
        className="relative mx-auto grid h-11 md:h-12 md:text-base max-w-max grid-cols-4 items-center overflow-hidden rounded-full bg-gray-50 pe-1 text-sm shadow-2xl transition"
      >
        <div
          className={`slider absolute bottom-0 top-0 my-auto h-9 md:h-10 w-20 rounded-3xl bg-gray-400 shadow-2xl transition-all duration-300 ${sliderLeftOffset()}`}
        ></div>
        {tabsContent.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index + 1}`}
            id={`tab-${index + 1}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => handleTabClick(index)}
            className="relative block rounded-full px-6"
          >
            <span className="font-roboto tracking-wide text-gray-900">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div className="tab relative">
        {tabsContent.map((tab, index) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${index + 1}`}
            className={`group absolute shadow-2xl z-50 transition-opacity duration-500 ${
              activeTab === index
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            <div className="group mx-auto rounded-xl bg-gray-50 px-7 py-4 shadow-xl">
              <div className=" inline-flex w-full place-items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-gray-900">{tab.title}</h2>
                <PiMouseScroll className="text-xl sm:text-2xl md:text-3xl opacity-100 transition group-hover:opacity-0" />
              </div>
              <p className="tab-content whitespace-break-spaces text-pretty bottom-10 mt-2 line-clamp-3 h-fit text-gray-900 group-hover:line-clamp-none md:text-lg hyphens-auto indent-5">
                {tab.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
