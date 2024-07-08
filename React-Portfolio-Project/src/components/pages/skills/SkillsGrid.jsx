// a grid of items each focusing on a different skill, with modal popups on click

// import { useState } from 'react';

// import { skillCardsContent } from '../../../utils/images';
import { MdUnfoldMore, MdUnfoldLess } from 'react-icons/md'

export default function SkillsGrid() {

  return (
    <main className="flex size-full place-content-center place-items-center py-5">
      <ul className="mx-auto grid w-full grid-cols-2 overflow-hidden text-white shadow-xl">
        <li className="col-span-full flex w-full select-none grid-cols-1 flex-wrap items-center gap-x-3 rounded-t-lg bg-black text-xs sm:text-sm">
          <input type="checkbox" defaultChecked id="faq1" className="peer appearance-none" />
          <MdUnfoldMore className="inline text-2xl transition-all peer-checked:hidden peer-hover:scale-125" />
          <MdUnfoldLess className="hidden text-2xl transition-all peer-checked:inline peer-hover:scale-125" />
          <label htmlFor="faq1" className="grow cursor-pointer py-4">
            <p>What is your name?</p>
          </label>
          <div className="max-h-0 basis-full overflow-hidden transition-[max-height] duration-500 peer-checked:max-h-40">
            <p className="w-fit p-2 text-center">My name is Sohan Emon</p>
          </div>
        </li>
        <li className="col-span-full flex w-full select-none grid-cols-1 flex-wrap items-center gap-x-3 rounded-t-lg bg-black text-xs sm:text-sm">
          <input type="checkbox" id="faq1" className="peer appearance-none" />
          <MdUnfoldMore className="inline text-2xl transition-all peer-checked:hidden peer-hover:scale-125" />
          <MdUnfoldLess className="hidden text-2xl transition-all peer-checked:inline peer-hover:scale-125" />
          <label htmlFor="faq1" className="grow cursor-pointer py-4">
            <p>What is your name?</p>
          </label>
          <div className="max-h-0 basis-full overflow-hidden transition-[max-height] duration-500 peer-checked:max-h-40">
            <p className="w-fit p-2 text-center">My name is Sohan Emon</p>
          </div>
        </li>
        <li className="col-span-full flex w-full select-none grid-cols-1 flex-wrap items-center gap-x-3 rounded-t-lg bg-black text-xs sm:text-sm">
          <input type="checkbox" id="faq1" className="peer appearance-none" />
          <MdUnfoldMore className="inline text-2xl transition-all peer-checked:hidden peer-hover:scale-125" />
          <MdUnfoldLess className="hidden text-2xl transition-all peer-checked:inline peer-hover:scale-125" />
          <label htmlFor="faq1" className="grow cursor-pointer py-4">
            <p>What is your name?</p>
          </label>
          <div className="max-h-0 basis-full overflow-hidden transition-[max-height] duration-500 peer-checked:max-h-40">
            <p className="w-fit p-2 text-center">My name is Sohan Emon</p>
          </div>
        </li>
        <li className="col-span-full flex w-full select-none grid-cols-1 flex-wrap items-center gap-x-3 rounded-t-lg bg-black text-xs sm:text-sm">
          <input type="checkbox" id="faq1" className="peer appearance-none" />
          <MdUnfoldMore className="inline text-2xl transition-all peer-checked:hidden peer-hover:scale-125" />
          <MdUnfoldLess className="hidden text-2xl transition-all peer-checked:inline peer-hover:scale-125" />
          <label htmlFor="faq1" className="grow cursor-pointer py-4">
            <p>What is your name?</p>
          </label>
          <div className="max-h-0 basis-full overflow-hidden transition-[max-height] duration-500 peer-checked:max-h-40">
            <p className="w-fit p-2 text-center">My name is Sohan Emon</p>
          </div>
        </li>
        <li className="col-span-full flex w-full select-none grid-cols-1 flex-wrap items-center gap-x-3 rounded-t-lg bg-black text-xs sm:text-sm">
          <input type="checkbox" id="faq1" className="peer appearance-none" />
          <MdUnfoldMore className="inline text-2xl transition-all peer-checked:hidden peer-hover:scale-125" />
          <MdUnfoldLess className="hidden text-2xl transition-all peer-checked:inline peer-hover:scale-125" />
          <label htmlFor="faq1" className="grow cursor-pointer py-4">
            <p>What is your name?</p>
          </label>
          <div className="max-h-0 basis-full overflow-hidden transition-[max-height] duration-500 peer-checked:max-h-40">
            <p className="w-fit p-2 text-center">My name is Sohan Emon</p>
          </div>
        </li>
      </ul>
    </main>
  )
}
