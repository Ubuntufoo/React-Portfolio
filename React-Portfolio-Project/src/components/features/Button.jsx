// a button component

export default function Button({
  link,
  text,
  isExternal,
  styles = 'absolute',
}) {
  let buttonClasses = styles

  if (styles === 'absolute') {
    buttonClasses =
      'absolute inset-x-0 top-[44%] lg:top-[47.3%] xl:left-2/3 2xl:top-[53%] 3xl:inset-x-0 3xl:top-[50%]'
  }

  return (
    <button
      className={`mx-auto flex flex-col ${buttonClasses} justify-center overflow-hidden rounded-xl transition duration-500 hover:scale-90 hover:shadow-none ${buttonClasses}`}
      onClick={() => {
        if (isExternal) {
          window.open(link, '_blank', 'noopener,noreferrer')
        } else {
          window.location.href = link
        }
      }}
    >
      <a
        href={link}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : ''}
        className={`neumorph group relative block overflow-hidden rounded-xl px-8 py-2 md:px-10 md:py-5 lg:px-12 lg:py-6 2xl:px-10 2xl:py-5`}
        onClick={(e) => {
          if (isExternal) {
            e.preventDefault() // Prevent the default anchor behavior for external links
          }
        }}
      >
        <span className="font-kreon text-lg font-semibold tracking-wide text-gray-950 md:text-2xl 3xl:text-3xl">
          {text}
        </span>
        <div className="absolute inset-0 z-20 h-[50%] w-[150%] translate-x-[60%] translate-y-16 -rotate-45 bg-gray-900 opacity-50 blur-2xl transition-all duration-[800ms] group-hover:-translate-x-[60%] group-hover:-translate-y-16"></div>
      </a>
    </button>
  )
}

