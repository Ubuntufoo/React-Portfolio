// a tabs component that takes an array of objects each having a key of id and content

import { useState } from 'react'
import { PiMouseScroll } from 'react-icons/pi'

export default function Tabs({ tabsContent }) {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const tabAlignments = () => {
    switch (activeTab) {
      case 0:
        return 'left-0'
      case 1:
        return 'left-1/4'
      case 2:
        return 'left-1/2'
      case 3:
        return 'left-3/4'
      default:
        return 'left-0'
    }
  }

  if (!tabsContent || !Array.isArray(tabsContent)) {
    return null
  }

  return (
    <div className="relative top-[12.5%] mx-auto flex h-[7%] w-[92%] flex-col justify-between md:w-3/4 lg:top-[10%] lg:w-6/10 2xl:top-[18%] 2xl:w-1/2 3xl:top-[14%] 3xl:w-[657px]">
      <div
        role="tablist"
        aria-label="tabs"
        className="relative mx-auto grid h-11 w-[344px] grid-cols-4 overflow-hidden rounded-full border bg-gray-100 shadow-xl transition xl:w-[400px]"
      >
        {tabsContent.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index + 1}`}
            id={`tab-${index + 1}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => handleTabClick(index)}
            className={`${activeTab === index ? 'text-gray-50' : 'text-gray-950'} z-10 flex w-[86px] items-center rounded-full text-center font-semibold transition-all duration-500 xl:w-[100px] xl:text-lg`}
          >
            <span className="mx-auto block text-center font-roboto ">
              {tab.title}
            </span>
          </button>
        ))}
        <div
          className={`absolute bottom-0 top-0 my-auto h-10 w-[86px] scale-95 rounded-3xl bg-gray-700 shadow-lg transition-all duration-300 xl:w-[101px] ${tabAlignments()}`}
        ></div>
      </div>
      <div className="tab relative">
        {tabsContent.map((tab, index) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${index + 1}`}
            className={`group absolute z-50 shadow-xl transition-all duration-500 ${
              activeTab === index
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            <div className="group mx-auto h-fit rounded-xl bg-gray-100 px-7 py-4 shadow-xl md:px-9 md:py-5 xl:px-9 2xl:py-4 3xl:space-y-6 3xl:px-12 3xl:py-8">
              <div className=" inline-flex w-full place-items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 md:text-xl xl:text-2xl">
                  {tab.title}
                </h2>
                <PiMouseScroll className="text-xl opacity-100 transition group-hover:opacity-0 sm:text-2xl md:text-2xl 3xl:text-3xl" />
              </div>
              <p className="tab-content bottom-10 mt-2 line-clamp-3 hyphens-auto whitespace-break-spaces text-pretty indent-4 text-gray-900 group-hover:line-clamp-none md:text-lg 2xl:text-base 3xl:text-xl">
                {tab.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
