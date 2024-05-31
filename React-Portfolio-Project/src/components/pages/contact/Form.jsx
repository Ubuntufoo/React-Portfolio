// a basic contact form that utilizes EmailJS to send emails

import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Form() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_ujx5mhk', 'template_7lkap5j', form.current, {
        publicKey: 'g5dUMMGcLL60LolFs',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <div className="absolute z-10 h-1/2 w-full px-4 text-white shadow-xl 2xl:max-w-[470px] 2xl:pb-8 2xl:h-fit 2xl:top-10 2xl:left-20">
      <div className="absolute inset-0 -z-10 bg-cyan-950 opacity-90"></div>

      <form ref={form} onSubmit={sendEmail} className="size-full mx-auto 2xl:size-fit">
        <div className="mt-6 grid size-full grid-cols-2 gap-x-4 text-sm md:text-base 2xl:gap-6 2xl:text-lg">
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
              name="reply_to"
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
            <button type="submit" className="text-base md:text-lg tracking-wide">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}