// a basic contact form that utilizes EmailJS to send emails

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { PiCheckFatBold } from 'react-icons/pi'

export default function Form() {
  const form = useRef()
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_ujx5mhk', 'template_7lkap5j', form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true)
          console.log('CONTACT EMAIL SUCCESS')
          form.current.reset()
        },
        (error) => {
          console.log('CONTACT EMAIL FAILED...', error.text)
        },
      )
  }

  return (
    <div className="absolute z-10 h-1/2 w-full px-4 text-white shadow-xl 2xl:left-20 2xl:top-10 2xl:h-fit 2xl:max-w-[550px] 2xl:pb-8">
      <div className="absolute inset-0 -z-10 bg-cyan-950 opacity-90"></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto size-full 2xl:size-fit"
      >
        <div className="mt-6 grid size-full grid-cols-2 gap-x-4 pb-3 text-sm md:text-base 2xl:gap-x-6 2xl:gap-y-16 2xl:text-lg">
          <h1 className="col-span-full pb-1 text-2xl md:text-4xl 2xl:pt-0 2xl:text-center">
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
          <div className="relative">
            <input
              type="text"
              name="reply_to"
              className="border-1 peer block w-full border-b bg-transparent py-3 font-serif focus:border-gray-950 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-90 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-gray-100 peer-focus:dark:text-gray-100">
              Your Email
            </label>
          </div>
          <div className="relative col-span-2 h-fit">
            <textarea
              name="message"
              rows="4"
              className="border-1 peer block w-full border-b bg-transparent pt-3 font-serif focus:border-gray-950 focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-90 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-gray-100 peer-focus:dark:text-gray-100">
              Your Message
            </label>
          </div>
          {success && (
            <div className="justify-self-center text-4xl text-green-500 md:text-5xl 2xl:text-6xl">
              <PiCheckFatBold />
            </div>
          )}

          <button
            type="submit"
            className="col-start-2 flex size-full h-fit w-fit cursor-pointer justify-self-center mb-2 2xl:-mb-4 bg-cyan-600 px-10 py-2 text-base tracking-wide ring-1 ring-gray-950 md:text-lg"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
