//

import { useState } from 'react'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 0,
      title: 'Project Journey',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate voluptatibus cumque a sint corrupti expedita laborum aut, eligendi beatae odit officia saepe? Voluptas atque fugit ipsa distinctio neque aliquam!',
    },
    {
      id: 1,
      title: 'Lessons Learned',
      content:
        'Dorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate voluptatibus cumque a sint corrupti expedita laborum aut, eligendi beatae odit officia saepe? Voluptas atque fugit ipsa distinctio neque aliquam!',
    },
    {
      id: 2,
      title: 'Specs & Techs',
      content:
        'Morem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate voluptatibus cumque a sint corrupti expedita laborum aut, eligendi beatae odit officia saepe? Voluptas atque fugit ipsa distinctio neque aliquam!',
    },
  ]

  const handleTabClick = (id) => {
    setActiveTab(id)
  }

  const getTabShift = () => {
    switch (activeTab) {
      case 0:
        return '-left-1.5 mt-1 rotate-180'
      case 1:
        return 'left-1/2 -mt-2.5 ms-2 -translate-x-1/2'
      case 2:
        return 'left-full -ms-1.5 mt-1 -translate-x-full -rotate-180'
      default:
        return 'left-0'
    }
  }

  return (
    <div className="flex size-full flex-col justify-end gap-12 3xl:gap-14">
      <div className="relative isolate mx-auto grid w-1/2 grid-cols-3 text-center text-black">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`z-10 col-span-1 flex h-12 w-20 cursor-pointer flex-col justify-center bg-transparent text-lg font-semibold transition-all duration-700 ${index === 0 ? 'justify-self-start' : index === 1 ? 'justify-self-center' : 'justify-self-end'} ${activeTab === tab.id ? 'text-cyan-800' : 'text-black'}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
        <div
          className={`cube rotate absolute top-0 h-14 w-20 origin-center scale-[1.6] bg-slate-50 transition-all duration-700 ease-out ${getTabShift()}`}
        ></div>
      </div>
      <div className="mx-auto w-4/5">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'opacity-100' : 'hidden'} mb-6 3xl:mb-10`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
