// a component that renders a tabbed content section. each section is hidden unless
// active. the user can click on a tab to view the content of that tab.

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

  if (!tabsContent || !Array.isArray(tabsContent)) {
    return null
  }

  return (
    <div className="tabs w-full h-1/3 mt-20 flex flex-col place-content-center place-items-center">
      <div className="tabs-header w-full flex justify-center space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button text-center text-2xl font-bold tracking-wider ${
              activeTab === tab.id ? 'text-gray-50' : 'text-gray-800'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs-content w-full h-4/5">
        {tabsContent.map((tab, index) => (
          <div
            key={index}
            className={`tab-content w-full h-full ${
              activeTab === index ? 'block' : 'hidden'
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
