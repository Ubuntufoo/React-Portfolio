// a button component

export default function Button({ link, styles = 'absolute' }) {

let buttonClasses = ''


  if (styles === 'absolute') {
    buttonClasses = 'absolute left-[36%] md:left-[43%] top-[44.5%]'
  }




  return (
    <button className={`mx-auto rounded-lg shadow-lg shadow-white ${buttonClasses}`}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group relative inline-flex overflow-hidden rounded-lg bg-gray-700 px-9 py-2 text-gray-50 duration-500 hover:bg-blue-600"
      >
        <span className="z-40 font-roboto font-semibold tracking-wider lg:text-lg">
          Visit
        </span>
        <div className="absolute inset-0 z-20 h-[90%] w-[100%] translate-x-[-95%] rotate-45 bg-gray-400 transition-all duration-500 group-hover:translate-x-[90%] group-hover:scale-100"></div>
      </a>
    </button>
  )
}