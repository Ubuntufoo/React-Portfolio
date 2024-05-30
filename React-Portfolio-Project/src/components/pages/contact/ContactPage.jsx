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
        <div className="absolute inset-0 2xl:py-40">
          <iframe
            className="size-full brightness-95"
            title="Map of My Area"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d251254.8376529536!2d-70.43794865653597!3d41.77996473715266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1717037312689!5m2!1sen!2sus"
            allowFullScreen={false}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute bottom-16 left-44 z-10 flex w-1/4 flex-col p-8 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-cyan-950 opacity-90"></div>
          <h1 className="text-center text-4xl">Contact me</h1>
          <form action="" className="mt-10 text-lg">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  className="border-1 peer block w-full border-b bg-inherit py-3 font-serif focus:border-gray-950 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-90 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-90 peer-focus:text-gray-100 peer-focus:dark:text-gray-100">
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
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-90 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-90 peer-focus:text-gray-100 peer-focus:dark:text-gray-100">
                  Your Email
                </label>
              </div>
              <div className="relative z-0 col-span-2 my-3">
                <textarea
                  name="message"
                  rows="5"
                  className="border-1 peer block w-full border-b bg-transparent py-3 font-serif  focus:border-gray-950 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-90 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-90 peer-focus:text-gray-100 peer-focus:dark:text-gray-100">
                  Your Message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="ms-auto mt-5 block bg-cyan-700 px-10 py-2"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      {/* <KeyboardArrows keyStyling={keyStyling} /> */}
    </div>
  )
}
