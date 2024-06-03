//

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { PiCheckFatBold } from 'react-icons/pi'
import { TbFaceIdError } from 'react-icons/tb'

export default function Form() {
  const form = useRef()
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm('service_ujx5mhk', 'template_7lkap5j', form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('CONTACT EMAIL SUCCESS')
          form.current.reset()
          setLoading(false)
          setSuccess(true)
        },
        (error) => {
          console.log('CONTACT EMAIL FAILED...', error.text)
          setLoading(false)
          setSuccess(false)
        },
      )
  }

  const inputClasses =
    'border-1 peer block w-full border-b bg-transparent py-3 font-serif focus:border-gray-950 focus:outline-none focus:ring-0 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500'
  const labelClasses =
    'absolute top-3 -z-10 origin-left -translate-y-7 scale-90 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-90  transform duration-300'

  return (
    <div
      className={`${loading && 'animate-pulse'} absolute z-10 h-1/2 w-full px-4 shadow-xl 2xl:left-14 2xl:top-10 2xl:h-fit 2xl:max-w-[550px] 2xl:pb-6`}
    >
      <div className="absolute inset-0 -z-10 bg-cyan-950 opacity-90"></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        noValidate
        autoComplete="on"
        autoCorrect="on"
        className="group mx-auto size-full 2xl:size-fit"
      >
        <div className="mt-4 grid size-full grid-cols-2 gap-x-4 pb-3 text-sm text-white focus:text-gray-950 md:text-xl 2xl:gap-x-5 2xl:gap-y-14 2xl:pb-8">
          <h1 className="col-span-full pb-1 text-2xl md:text-4xl 2xl:pt-5 2xl:text-center">
            Contact Me
          </h1>
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              autoFocus
              pattern=".{2,}"
              className={inputClasses}
              placeholder=""
              required
            />
            <label htmlFor="name" className={`${labelClasses}`}>
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="reply_to"
              id="reply_to"
              className={inputClasses}
              placeholder=" "
              required
            />
            <label htmlFor="reply_to" className={`${labelClasses}`}>
              Your Email
            </label>
          </div>
          <div className="relative col-span-2 h-fit">
            <textarea
              type="text"
              name="message"
              id="message"
              rows="4"
              className={inputClasses}
              placeholder=" "
              required
            ></textarea>
            <label htmlFor="message" className={`${labelClasses}`}>
              Your Message
            </label>
          </div>
          {success === true && (
            <div className="justify-self-center text-4xl text-green-500 md:text-5xl">
              <PiCheckFatBold />
            </div>
          )}
          {success === false && (
            <div className="dura justify-self-center text-4xl text-red-500 md:text-5xl">
              <TbFaceIdError />
            </div>
          )}

          <button
            type="submit"
            className="col-start-2 flex size-full h-fit w-fit cursor-pointer justify-self-center bg-cyan-600 px-8 py-2 text-base tracking-wide ring-1 ring-gray-950 transition-all duration-200 hover:bg-cyan-500 hover:ring-cyan-200 group-invalid:pointer-events-none group-invalid:opacity-50 md:text-lg 2xl:-mb-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
