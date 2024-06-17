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
        return 'left-0 -ms-4 md:ms-5 md:-mt-0'
      case 1:
        return 'left-1/4 -ms-5 md:ms-4 md:-mt-0'
      case 2:
        return 'left-1/2 -ms-6 md:ms-4 md:-mt-0'
      case 3:
        return 'left-3/4 -ms-5 md:ms-4 md:-mt-0'
      default:
        return 'left-0 '
    }
  }

  if (!tabsContent || !Array.isArray(tabsContent)) {
    return null // or render a loading state
  }

  return (
    <>
      <div className="relative mt-5 grid h-1/4 w-full grid-cols-4 text-center text-black md:mt-5 lg:h-1/3 xl:w-1/2 2xl:pb-5 3xl:pb-0">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`col-span-1 box-content flex h-fit cursor-pointer select-none flex-col justify-center justify-self-center whitespace-pre border-b-2 border-gray-600 bg-transparent pb-2 font-roboto text-sm font-semibold transition-all duration-500 hover:scale-110 xl:text-base 3xl:text-xl ${activeTab === tab.id ? 'border-none text-black' : ' text-cyan-950'}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
        <div
          className={`cube absolute top-0 mt-2.5 h-10 w-14 origin-center translate-x-2/3 rotate-180 scale-[1.5] transition-all duration-700 ease-out md:h-12 md:w-16 lg:ms-4 lg:h-14 lg:w-20 2xl:ms-0 2xl:mt-0 3xl:ms-5 3xl:mt-2 ${getTabShift()}`}
        ></div>
      </div>
      {tabsContent.map((tab) => (
        <div
          key={tab.id}
          className={`${activeTab === tab.id ? 'opacity-100' : 'hidden'} flex h-full flex-col justify-start pt-5 px-5 bg-cyan-400 2xl:px-28`}
        >
          <p className="pretty  mx-auto w-full whitespace-pre-wrap text-xs sm:text-sm md:text-base xl:w-7/10 2xl:leading-snug 3xl:w-2/3 3xl:text-xl">
            {tab.content}
          </p>
        </div>
      ))}
    </>
  )
}
