import { CircleArrowOutDownRight } from 'lucide-react'

const steps = [
  { number: 1, label: 'Code' },
  { number: 2, label: 'Build' },
  { number: 3, label: 'Test' },
  { number: 4, label: 'Release' },
  { number: 5, label: 'Deploy' },
  { number: 6, label: 'Monitor' },
  { number: 7, label: 'Build' },
]

function Process() {
  return (
    <section className="relative bg-[#0C101A] text-white pt-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-[#25D1C7] text-xs text-white bg-[#25D1C71A] font-medium tracking-wide">
          <span className="text-teal-400">★</span> Smarter Idea, instant
          solutions
        </div>
        <h1 className="text-5xl font-bold leading-tight text-white mb-4">
          Our Software
          <br />
          <span className="text-[#9CA3AF]">Development Process</span>
        </h1>
        <p className="text-[#9CA3AF] max-w-xl mx-auto mb-8">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>
        <div className="flex justify-center mt-8">
          <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#5F5F5F] to-[#1E1E1E] text-white font-semibold shadow-md hover:opacity-95 transition">
            <span>Contact Us</span>
            <span className="inline-flex items-center justify-center bg-white p-2 rounded-full">
              <CircleArrowOutDownRight
                className="w-4 h-4 text-black"
                style={{ transform: 'rotate(-45deg)' }}
              />
            </span>
          </button>
        </div>
      </div>

      <div className="relative mt-20 flex justify-center">
        <img
          src="/assets/globe.png"
          alt="Globe"
          className="w-[800px] relative z-0"
        />

        <svg
          className="absolute -top-3 left-1/2 -translate-x-1/2"
          width="900"
          height="500"
          viewBox="-1 -1 600 300"
          fill="none"
        >
          <path
            d="M50 250 A250 250 0 0 1 550 250"
            stroke="#fff"
            strokeDasharray="4 6"
            strokeOpacity="0.6"
            fill="none"
          />
        </svg>

        {steps.map((step, index) => {
          const angle = -Math.PI / 1 + (index / (steps.length - 1)) * Math.PI 
          const radius = 320 
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)

          return (
            <div
              key={step.number}
              className="absolute flex flex-col items-center"
              style={{
                top: `calc(85% + ${y}px)`,
                left: `calc(49% + ${x}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="mt-2 text-xl font-outfit bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
                {step.label}
              </span>

              <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-l from-[#5F5F5F] to-[#1E1E1E] text-white flex items-center justify-center font-bold">
                {step.number}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Process
