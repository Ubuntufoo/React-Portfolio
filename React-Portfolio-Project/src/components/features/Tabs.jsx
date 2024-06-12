//
import { useState } from 'react'

export default function Tabs({ tabsContent }) {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 0,
      title: 'About Project',
    },
    {
      id: 1,
      title: 'Project Journey',
    },
    {
      id: 2,
      title: 'Lessons Learned',
    },
    {
      id: 3,
      title: 'Techs & Specs',
    },
  ]

  const handleTabClick = (id) => {
    setActiveTab(id)
  }

  const getTabShift = () => {
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
    return null // or render a loading state
  }

  return (
    <div className="flex size-full flex-col justify-end gap-6 3xl:gap-14">
      <div className="relative mx-auto grid w-1/2 grid-cols-4 text-center text-black">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`z-50 col-span-1 box-content flex h-12 w-24 cursor-pointer select-none flex-col justify-center justify-self-center bg-transparent pb-3 text-lg font-semibold transition-all duration-500 ${activeTab === tab.id ? 'border-none text-cyan-800' : 'border-b border-black text-black'}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
        <div
          className={`cube rotate absolute top-0 z-40 -mt-2.5 ms-1.5 h-14 w-20 origin-center translate-x-2/3 scale-[1.5] bg-slate-50 transition-all duration-700 ease-out ${getTabShift()}`}
        ></div>
      </div>
      <div className="mx-auto w-4/5">
        {tabsContent.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'opacity-100' : 'hidden'} mb-4 p-1 text-lg 3xl:mb-7`}
          >
            <p className="text-base">{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
