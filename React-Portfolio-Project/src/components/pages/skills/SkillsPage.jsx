// a breakdown of some of my developer skills
import SkillsGrid from './SkillsGrid'

export default function SkillsPage() {
  return (
    <div className="section fp-noscroll fp-auto-height-responsive h-screen">
      <h1 className="absolute left-6 top-7 mx-auto w-fit min-w-max rounded-lg border-2 border-black py-1.5 px-2 text-center font-mono font-semibold tracking-wider text-gray-950 sm:text-lg md:left-8 md:top-11 2xl:inset-x-0 2xl:top-12 2xl:text-2xl">
        <code>&lt;Skills/&gt;</code>
      </h1>
      <SkillsGrid />
    </div>
  )
}
