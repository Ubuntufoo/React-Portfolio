//
import { useState, useEffect } from 'react'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0)
  const [previousTab, setPreviousTab] = useState(null)
  const [isRotated, setIsRotated] = useState(false)

  const tabs = [
    {
      id: 0,
      title: 'About Project',
      content: 'Content for About Project',
    },
    {
      id: 1,
      title: 'Project Journey',
      content: 'Content for Project Journey',
    },
    {
      id: 2,
      title: 'Lessons Learned',
      content: 'Content for Lessons Learned',
    },
    {
      id: 3,
      title: 'Techs & Specs',
      content: 'Content for Techs & Specs',
    },
  ]

  const handleTabClick = (id) => {
    setPreviousTab(activeTab)
    setActiveTab(id)
  }

  const getTabShift = () => {
    switch (activeTab) {
      case 0:
        return 'left-0'
      case 1:
        return 'left-1/4 '
      case 2:
        return 'left-1/2'
      case 3:
        return 'left-3/4'
      default:
        return 'left-0'
    }
  }

  useEffect(() => {
    if (previousTab !== null) {
      setIsRotated(!isRotated)
    }
  }, [activeTab])

  return (
    <div className="flex size-full flex-col justify-end gap-6 3xl:gap-14">
      <div className="relative mx-auto grid w-1/2 grid-cols-4 text-center text-black">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`z-50 col-span-1 box-content flex h-12 w-24 cursor-pointer select-none flex-col justify-center justify-self-center bg-transparent pb-3 text-lg font-semibold transition-all duration-500 ${activeTab === tab.id ? 'border-none text-cyan-800' : 'border-b border-black text-black '}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
        <div
          className={`cube rotate absolute top-0  z-40 -mt-2.5 h-14 w-20 origin-center translate-x-2/3 scale-[1.5] bg-slate-50 transition-all duration-700 ease-out ${getTabShift()} ${isRotated ? '-ms-2 mt-1 rotate-180' : ''}`}
        ></div>
      </div>
      <div className="mx-auto w-4/5">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'opacity-100' : 'hidden'}  mb-4 p-1 text-lg 3xl:mb-10`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
