import React from 'react'
import { Cog8ToothIcon } from '@heroicons/react/24/outline'

const cards = [
  { title: 'Efficiency', icon: '/assets/why-choose-icon1.png' },
  { title: 'Adaptability', icon: '/assets/why-choose-icon2.png' },
  { title: 'Scalability', icon: '/assets/why-choose-icon3.png' },
  { title: 'Precision', icon: '/assets/why-choose-icon4.png' },
]

function WhyChoose() {
  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-['Bricolage_Grotesque'] leading-snug">
          Why Choose <br />
          Softwarechamber
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>

        <div className="mt-8">
          <button className="flex items-center gap-3 px-6 py-2 text-white font-semibold bg-[#00D0B3] rounded-full hover:opacity-90 transition mx-auto">
            Let’s Discuss
            <span className="bg-white text-black rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative mt-20 max-w-7xl mx-auto px-4">
        {/* Left Arrow */}
        <button className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] p-6 rounded-2xl shadow-md w-[270px] relative"
            >
              {/* Icon in circle */}
              <div className="absolute top-4 right-4 bg-[#00D0B3] w-10 h-10 flex items-center justify-center rounded-full">
                <img src={card.icon} alt="icon" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <hr className="border-t border-gray-300 mb-4" />
              <p className="text-sm text-gray-700">
                Software Chamber specializes in creating powerful, scalable, and
                secure e-commerce solutions tailored to business needs.
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default WhyChoose
