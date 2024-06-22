// simple tooltip component for server hosting note

export default function ServerTooltip() {

  return (
    <span className="invisible absolute z-50 right-10 -top-2 md:top-6 md:right-1 rounded-sm bg-black px-6 py-3 font-roboto text-xs w-52 md:text-sm text-white opacity-0 duration-700 group-hover:visible group-hover:translate-y-12 group-hover:opacity-100">
      Free server hosting may require upto 25 seconds for
      app to load
      <span className="absolute -ms-4 -top-2 right-3 -z-10 rotate-45 bg-black p-4"></span>
    </span>
  )
}