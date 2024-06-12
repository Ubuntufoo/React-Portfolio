//
import { useState } from 'react'

export default function Tabs({ tabsContent }) {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 0,
      title: `About\nProject`,
    },
    {
      id: 1,
      title: 'Project\nJourney',
    },
    {
      id: 2,
      title: 'Lessons\nLearned',
    },
    {
      id: 3,
      title: 'Techs\n& Specs',
    },
  ]

  const handleTabClick = (id) => {
    setActiveTab(id)
  }

  const getTabShift = () => {
    switch (activeTab) {
      case 0:
        return 'left-0 -ms-5'
      case 1:
        return 'left-1/4 -ms-7'
      case 2:
        return 'left-1/2 -ms-7'
      case 3:
        return 'left-3/4 -ms-6'
      default:
        return 'left-0 '
    }
  }

  if (!tabsContent || !Array.isArray(tabsContent)) {
    return null // or render a loading state
  }

  return (
    <>
      <div className="relative mt-8 grid h-1/4 w-full grid-cols-4 text-center text-black lg:h-1/3 xl:w-1/2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={` col-span-1 box-content flex h-fit cursor-pointer select-none flex-col justify-center justify-self-center whitespace-pre border-b-2 border-gray-600 bg-transparent pb-3 text-sm font-semibold transition-all duration-500 xl:text-base 3xl:text-xl ${activeTab === tab.id ? 'border-none text-cyan-950' : ' text-black'}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
        <div
          className={`cube absolute top-0 mt-1 h-11 w-14 origin-center translate-x-2/3 rotate-180 scale-[1.5] transition-all duration-700 ease-out lg:ms-4 lg:mt-1 lg:h-14 lg:w-20 2xl:ms-0 3xl:ms-6 ${getTabShift()}`}
        ></div>
      </div>
      {tabsContent.map((tab) => (
        <div
          key={tab.id}
          className={`${activeTab === tab.id ? 'opacity-100' : 'hidden'} mx-14`}
        >
          <p className="pretty mx-auto whitespace-pre-wrap text-xs sm:text-sm md:text-base xl:w-7/10 3xl:w-2/3 3xl:text-xl">
            {tab.content}
          </p>
        </div>
      ))}
    </>
  )
}
