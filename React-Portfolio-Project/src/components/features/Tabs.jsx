// a tabs component that takes an array of objects each having a key of id and content

import { useState } from 'react'
import { PiMouseScroll } from 'react-icons/pi'

export default function Tabs({ tabsContent }) {
  const [activeTab, setActiveTab] = useState(0)
  const [isLineClamped, setIsLineClamped] = useState(true)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const handleContentClick = () => {
    setIsLineClamped(!isLineClamped)
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
    <div
      className="relative top-[12.5%] mx-auto flex h-[7%] w-full flex-col justify-between md:w-4/5 lg:top-[10%]
    lg:w-[55%] xl:top-[12%] xl:w-1/2 2xl:top-[20%] 2xl:h-[7%] 2xl:w-[500px] 3xl:top-[16%] 3xl:h-[5%] 3xl:w-[620px]"
    >
      <div
        role="tablist"
        aria-label="tabs"
        className="relative mx-auto grid h-11 w-[344px] grid-cols-4 overflow-hidden transition xl:w-[400px]"
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
            className={`${activeTab === index ? 'text-gray-50' : 'text-gray-950'} z-10 flex w-[86px] items-center
            rounded-full text-center font-semibold transition-all duration-500 xl:w-[100px] xl:text-lg`}
          >
            <span className="mx-auto block text-center">{tab.title}</span>
          </button>
        ))}
        <div
          className={`absolute bottom-0 top-0 my-auto h-10 w-[86px] rounded-3xl bg-gray-950 shadow-xl transition-all
            duration-300 xl:w-[101px] ${tabAlignments()}`}
        ></div>
      </div>
      <div className="relative">
        {tabsContent.map((tab, index) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${index + 1}`}
            className={`group absolute z-50 ${
              activeTab === index
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            <div className="group z-50 mx-auto h-fit rounded-xl bg-gray-400 px-16 py-4 md:px-9 md:py-4 xl:px-8 2xl:group-hover:shadow-[0px_30px_30px_0px_rgba(0,0,0,0.4)] 3xl:space-y-6 3xl:px-12 3xl:py-8">
              <div className=" z-50 inline-flex w-full place-items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 md:text-xl xl:text-2xl">
                  {tab.title}
                </h2>
              </div>
              <p
                onClick={handleContentClick}
                className={`${
                  isLineClamped
                    ? 'tab-content line-clamp-3 h-fit'
                    : 'line-clamp-none h-screen'
                }  mt-2 hyphens-auto whitespace-break-spaces indent-6
                  text-gray-900
                    md:mt-4 md:text-lg
                    xl:mt-5 xl:text-xl 2xl:group-hover:line-clamp-none
                2xl:group-hover:h-fit`}
              >
                {tab.content}
              </p>
              <PiMouseScroll
                className="absolute bottom-5 right-10 text-2xl sm:text-2xl md:right-1 max-md:top-5
                md:text-3xl 3xl:text-4xl 3xl:bottom-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
