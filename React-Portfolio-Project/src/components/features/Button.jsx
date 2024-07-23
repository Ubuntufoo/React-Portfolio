// a button component

export default function Button({ link, styles = 'absolute' }) {
  let buttonClasses = ''

  if (styles === 'absolute') {
    buttonClasses =
      'absolute inset-x-0 top-[44%] lg:top-[47.3%] xl:left-2/3 2xl:top-[52%] 3xl:inset-x-0 3xl:top-[50%]'
  }

  return (
    <button className={`mx-auto w-fit rounded-lg ${buttonClasses}`}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group relative inline-flex overflow-hidden rounded-lg bg-gray-700 px-9 py-2 text-gray-50 shadow-lg shadow-white duration-500 hover:bg-blue-600  active:bg-blue-900 active:shadow-none"
      >
        <span className="z-40 font-roboto font-semibold tracking-wider lg:text-lg">
          Visit
        </span>
        <div className="absolute inset-0 z-20 h-[90%] w-[100%] translate-x-[-95%] rotate-45 bg-gray-400 transition-all duration-500 group-hover:translate-x-[90%] group-hover:scale-100"></div>
      </a>
    </button>
  )
}
