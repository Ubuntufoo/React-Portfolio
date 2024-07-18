// layered cards each detailing a skill, with modal popups onClick

// import React from 'react'
// import React from 'react'
import { skillCardsContent } from '../../../utils/images'

const colStartClasses = [
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
]

export default function SkillsGrid() {
  return (
    <main className="flex h-full flex-col justify-center">
      {/* <div className="grid w-3/4 h-2/3 mt-24 mx-auto grid-cols-5 grid-rows-5 place-content-center place-items-center">
        {skillCardsContent.map((skill, index) => (
          <div
            key={index}
            className={`col-span-2 w-fit h-fit transition-all ease-in hover:z-50 hover:scale-105 ${colStartClasses[index % colStartClasses.length]} rounded-xl border border-black bg-gray-50`}
          >
            <div className="p-3">
              <h2 className="text-center 2xl:text-xl">{skill.title}</h2>
            </div>
            <img
              src={skill.img}
              alt={skill.title}
              className="size-full object-scale-down"
            />
          </div>
        ))}
      </div> */}
      <div className="group group mb-14 h-[4em] w-96 overflow-hidden bg-white p-3 transition-all duration-1000 hover:h-[10em]">
        <div className="test line-clamp-2 bg-white group-hover:line-clamp-none">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          accusantium non obcaecati perferendis itaque minus natus ex nostrum
          recusandae dolorem molestias eum deserunt iure quo vel, dolorum
          delectus sequi culpa.
        </div>
      </div>
    </main>
  )
}
