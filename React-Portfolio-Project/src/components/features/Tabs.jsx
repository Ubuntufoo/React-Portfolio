// a tabs component that takes an array of objects each having a key of id and content

import { useState } from 'react'

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
    <div className="h-1/3 w-9/10 overflow-hidden">
      <div
        role="tablist"
        aria-label="tabs"
        className="relative mx-auto grid h-12 max-w-max grid-cols-4 items-center overflow-hidden rounded-full bg-gray-50 pe-1 text-sm shadow-2xl transition"
      >
        <div
          className={`slider absolute bottom-0 top-0 my-auto h-10 w-20 rounded-3xl bg-gray-400 shadow-md transition-all duration-300 ${sliderLeftOffset()}`}
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
            className="tab relative block h-10 rounded-full px-6 opacity-100"
          >
            <span className="font-roboto tracking-wide text-gray-900">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      {tabsContent.map((tab, index) => (
        <div
          key={tab.id}
          className={`mt-3 shadow-2xl ${activeTab === index ? '' : 'hidden'}`}
        >
          <div
            role="tabpanel"
            id={`panel-${index + 1}`}
            className={`tab-panel top-0 overflow-scroll rounded-3xl bg-white p-4  transition duration-300 ${
              activeTab === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="font-bold text-gray-900">{tab.title}</h2>
            <p className="mt-2.5 line-clamp-3 text-pretty text-sm text-gray-700">
              {tab.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
