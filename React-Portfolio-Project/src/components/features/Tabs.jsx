//

import { useState } from 'react'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 0,
      title: 'Tab 1',
      content:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate voluptatibus cumque a sint corrupti expedita laborum aut, eligendi beatae odit officia saepe? Voluptas atque fugit ipsa distinctio neque aliquam!',
      align: 'start',
    },
    {
      id: 1,
      title: 'Tab 2',
      content:
        ' Dorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate voluptatibus cumque a sint corrupti expedita laborum aut, eligendi beatae odit officia saepe? Voluptas atque fugit ipsa distinctio neque aliquam!',
      align: 'center',
    },
    {
      id: 2,
      title: 'Tab 3',
      content:
        ' Morem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate voluptatibus cumque a sint corrupti expedita laborum aut, eligendi beatae odit officia saepe? Voluptas atque fugit ipsa distinctio neque aliquam!',
      align: 'end',
    },
  ]

  const handleTabClick = (id) => {
    setActiveTab(id)
  }

  return (
    <div className="flex size-full flex-col justify-end gap-10">
      <div className="relative isolate mx-auto grid w-3/4 grid-cols-3 grid-rows-1 text-black">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`h-12 w-20 cursor-pointer border border-black bg-transparent transition-colors col-start-${tab.id + 1} justify-self-${tab.align}  z-10 col-span-1 duration-300 ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-500' : 'text-black'}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
        <div
          className={`absolute left-0 right-0 -z-10 h-12 w-20 bg-white transition-all duration-300`}
        ></div>
      </div>
      <div className="mx-auto w-4/5">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'opacity-100' : 'hidden'} mb-10`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
