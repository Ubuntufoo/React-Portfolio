// child component showing a contact form

// import KeyboardArrows from '../../features/KeyboardArrows'

export default function ContactPage() {
  // const keyStyling = {
  //   up: keyClasses.keyActiveClass,
  //   down: keyClasses.keyActiveClass,
  //   left: keyClasses.keyInactiveClass,
  //   right: keyClasses.keyInactiveClass,
  // }

  return (
    <div className="section h-screen">
      <section className="h-screen w-screen">
        <div className="absolute inset-x-0 bottom-0 h-1/2 2xl:inset-0 2xl:h-full 2xl:py-24">
          <iframe
            className="size-full brightness-95"
            title="Map of My Area"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d218593.30925969745!2d-70.32901608707758!3d41.820044176414164!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1717097894901!5m2!1sen!2sus"
            allowFullScreen={false}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute z-10 h-1/2 w-full px-4 text-white shadow-xl 2xl:max-w-[470px]">
          <div className="absolute inset-0 -z-10 bg-cyan-950 opacity-90"></div>

          <form action="" className="size-full">
            <div className="mt-6 grid size-full grid-cols-2 gap-x-4 text-sm md:text-base 2xl:mt-10 2xl:gap-8 2xl:text-lg">
              <h1 className="col-span-full pb-2 text-2xl md:text-4xl 2xl:pt-0 2xl:text-center">
                Contact Me
              </h1>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="border-1 peer block w-full border-b bg-inherit py-3 font-serif focus:border-gray-950 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-90 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-gray-100 peer-focus:dark:text-gray-100">
                  Your Name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="border-1 peer block w-full border-b bg-transparent py-3 font-serif focus:border-gray-950 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-90 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-gray-100 peer-focus:dark:text-gray-100">
                  Your Email
                </label>
              </div>
              <div className="relative z-0 col-span-2 my-3">
                <textarea
                  name="message"
                  rows="5"
                  className="border-1 peer block w-full border-b bg-transparent py-3 font-serif focus:border-gray-950 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-90 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-gray-100 peer-focus:dark:text-gray-100">
                  Your Message
                </label>
              </div>
              <div className="col-span-full w-fit ms-auto h-fit bg-cyan-600 px-6 py-2.5 ring-1 ring-gray-950 flex">
                <button type="submit" className="text-xl tracking-wide">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* <KeyboardArrows keyStyling={keyStyling} /> */}
    </div>
  )
}
