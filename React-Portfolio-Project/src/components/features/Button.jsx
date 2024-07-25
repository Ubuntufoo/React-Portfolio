// a button component

export default function Button({ link, text, isExternal, styles, position = 'absolute' }) {
  let buttonStyles = styles
  let buttonPosition = position

  if (position === 'absolute') {
    buttonPosition =
      'absolute inset-x-0 top-[42%] scale-95 w-fit lg:top-[44%] xl:top-[45%] 2xl:top-[65%] 2xl:left-2/3 2xl:right-1 3xl:inset-x-0 3xl:top-[47%]'
  }

  return (
    <button
      className={`mx-auto flex size-fit flex-col justify-center overflow-hidden rounded-xl transition duration-500 hover:scale-95 hover:shadow-none ${buttonPosition}`}
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
        className={`neumorph group relative block overflow-hidden rounded-xl px-8 py-2 shadow-xl md:px-10 md:py-5 lg:px-12 lg:py-4 2xl:px-10 2xl:py-5 ${buttonStyles}`}
        onClick={(e) => {
          if (isExternal) {
            e.preventDefault()
          }
        }}
      >
        <span className="font-kreon text-lg font-semibold tracking-wide text-gray-950 md:text-2xl xl:text-3xl">
          {text}
        </span>
        <div className="absolute inset-0 z-20 h-[50%] w-[150%] translate-x-[60%] translate-y-16 -rotate-45 bg-gray-900 opacity-50 blur-2xl transition-all duration-[800ms] group-hover:-translate-x-[60%] group-hover:-translate-y-16"></div>
      </a>
    </button>
  )
}

