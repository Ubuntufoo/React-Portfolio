// a tabs component that takes an array of objects each having a key of id and content

import { useState } from 'react'
import { PiMouseScroll } from 'react-icons/pi'

export default function Tabs({ tabsContent }) {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const activeTabLeftOffset = () => {
    switch (activeTab) {
      case 0:
        return 'left-1'
      case 1:
        return 'left-[27.5%]'
      case 2:
        return 'left-[52.8%]'
      case 3:
        return 'left-[76%]'
      default:
        return 'left-1' // Default to first tab
    }
  }

  if (!tabsContent || !Array.isArray(tabsContent)) {
    return null
  }

  return (
    <div className="relative top-[12.5%] lg:top-[10%] 2xl:top-[13%] mx-auto flex h-[8%] w-[92%] flex-col justify-between md:w-3/4 lg:w-6/10">
      <div
        role="tablist"
        aria-label="tabs"
        className="relative mx-auto grid h-11 lg:h-14 max-w-max grid-cols-4 items-center overflow-hidden rounded-full bg-gray-50 pe-1 text-sm shadow-2xl transition md:h-12 md:text-base lg:text-lg"
      >
        <div
          className={`absolute bottom-0 top-0 my-auto h-9 w-20 lg:w-24 rounded-3xl bg-gray-400 shadow-2xl transition-all duration-300 md:h-10 lg:h-12 ${activeTabLeftOffset()}`}
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
            className={`group absolute z-50 shadow-2xl transition-opacity duration-500 ${
              activeTab === index
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            <div className="group mx-auto rounded-xl bg-gray-50 px-7 py-4 md:px-9 md:py-6 shadow-xl">
              <div className=" inline-flex w-full place-items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 md:text-xl">
                  {tab.title}
                </h2>
                <PiMouseScroll className="text-xl opacity-100 transition group-hover:opacity-0 sm:text-2xl md:text-3xl" />
              </div>
              <p className="tab-content bottom-10 mt-2 line-clamp-3 h-fit hyphens-auto whitespace-break-spaces text-pretty indent-5 text-gray-900 group-hover:line-clamp-none md:text-lg lg:text-xl">
                {tab.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
