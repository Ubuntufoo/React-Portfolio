// Contact Form using emailJS, with dynamic opacity and success/failure indicators

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser' // EmailJS SDK for sending emails from client-side

import paperairplane2 from '../../../assets/paperairplane2.png'
import { PiCheckFatBold } from 'react-icons/pi'
import { TbFaceIdError } from 'react-icons/tb'

export default function Form() {
  const form = useRef()
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        'service_ujx5mhk',
        'template_7lkap5j',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      console.log('CONTACT EMAIL SUCCESS')
      form.current.reset()
      setSuccess(true)
    } catch (error) {
      console.log('CONTACT EMAIL FAILED...', error.text)
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  // Classes grouped for readability
  const inputClasses = `border-1 peer block w-full border-b bg-transparent py-3 font-serif focus:border-gray-950
    focus:outline-none focus:ring-0 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500
    invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500`
  const labelClasses = `absolute top-3 -z-10 origin-left -translate-y-7 scale-90 transform duration-300
    peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0
    peer-focus:-translate-y-7 peer-focus:scale-90  transform duration-300`

  return (
    <div
      className={`${loading && 'animate-pulse'} absolute top-0 z-10 h-[50%] w-full px-4 shadow-xl
      2xl:left-14 2xl:top-10 2xl:h-fit 2xl:max-w-[550px] 2xl:pb-6`}
    >
      <div className="absolute inset-0 -z-10 bg-gray-800 bg-opacity-90 2xl:rounded-xl"></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        noValidate
        autoComplete="on"
        autoCorrect="on"
        className="group mx-auto size-full 2xl:size-fit"
      >
        <div
          className="mt-6 grid size-full grid-cols-2 gap-x-4 pb-3 text-sm text-white
         focus:text-gray-950 md:text-xl 2xl:gap-x-5 2xl:gap-y-14 2xl:pb-8"
        >
          <h1 className="font-kreon col-span-full text-3xl md:text-4xl pt-1 2xl:pt-5 2xl:text-center">
            Contact Me
          </h1>
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              pattern=".{2,}"
              className={inputClasses}
              placeholder=""
              required
              aria-label="Your Name"
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
              aria-label="Your Email"
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
              rows="3"
              className={inputClasses}
              placeholder=" "
              required
              aria-label="Your Message"
            ></textarea>
            <label htmlFor="message" className={`${labelClasses}`}>
              Your Message
            </label>
          </div>
          {success === true && (
            <div
              aria-live="polite" // Accessibility attribute for screen readers
              className="justify-self-center text-4xl text-green-500 md:text-5xl"
            >
              <PiCheckFatBold />
              <span className="sr-only">Message sent successfully</span>
            </div>
          )}
          {success === false && (
            <div
              aria-live="polite" // Accessibility attribute for screen readers
              className="dura justify-self-center text-4xl text-red-500 md:text-5xl"
            >
              <TbFaceIdError />
              <span className="sr-only">Message sending failed</span>
            </div>
          )}
          <button
            type="submit"
            aria-label="Send"
            className={`col-start-2 ms-auto flex w-1/2 cursor-pointer justify-self-center
           transition-all
               group-invalid:pointer-events-none
               group-invalid:cursor-not-allowed
               group-invalid:opacity-40`}
          >
            <span className="sr-only">Send</span>
            <img
              src={paperairplane2}
              alt="paper airplane"
              className={`${success && 'translate-x-[900%] opacity-0 duration-700 ease-in'} size-14 -rotate-12 scale-[2] md:scale-[2.5] contrast-200 grayscale transition-all md:size-16 xl:size-14`}
            />
          </button>
        </div>
      </form>
    </div>
  )
}
