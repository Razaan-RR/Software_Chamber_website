import { useState } from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

function Contact() {
  const [phoneCode, setPhoneCode] = useState('+1')

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-5xl sm:text-5xl font-bold max-w-3xl mx-auto text-center leading-tight mb-6">
        <span className="text-black font-bricolage">
          Let's talk about your next project.
        </span>{' '}
        <span className="text-gray-400">We're here to help.</span>
      </h2>

      <p className="max-w-xl mx-auto text-center text-gray-600 mb-24 font-outfit">
        Deliver personalized experiences to your customers <br /> with
        AI-powered recommendation engines and <br /> dynamic content generation.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="flex-shrink-0 rounded-xl overflow-hidden max-w-[420px] w-full">
          <img
            src="assets/contact-us.png"
            alt="Person smiling"
            className="w-full h-full object-cover"
          />
        </div>

        <form className="flex-1 space-y-4 font-outfit">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded bg-gray-100 text-gray-900 placeholder-gray-900"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded bg-gray-100 text-gray-900 placeholder-gray-900"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-100 text-gray-900 placeholder-gray-900 w-full"
          />

          <div className="grid grid-cols-[80px_1fr] gap-4">
            <select
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
              className="p-3 rounded bg-gray-100 text-gray-900"
            >
              <option value="+1">+1</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 rounded bg-gray-100 text-gray-900 placeholder-gray-900"
            />
          </div>

          <input
            type="text"
            placeholder="Job Title"
            className="p-3 rounded bg-gray-100 text-gray-900 placeholder-gray-900 w-full"
          />

          <textarea
            placeholder="Your message"
            rows={4}
            className="p-3 rounded bg-gray-100 text-gray-900 placeholder-gray-900 w-full resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-teal-400 text-white rounded-full inline-flex items-center gap-14"
          >
            Submit
            <span className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
              <ArrowUpRightIcon className="w-4 h-4 text-black" />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
