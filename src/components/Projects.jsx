import { CircleArrowOutDownRight } from 'lucide-react'

function Projects() {
  return (
    <section className="relative bg-black w-full py-20 flex flex-col items-center">
      <div className="bg-gradient-to-br from-[#042D2E] via-[#051918] to-[#001214] text-white rounded-2xl border border-teal-700 max-w-4xl w-full px-10 py-20 flex flex-col items-center gap-8">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-[#25D1C7] text-xs text-white bg-[#25D1C71A] font-medium tracking-wide">
          <span className="text-teal-400">★</span> Smarter Idea, instant
          solutions
        </div>

        <div className="bg-[#E9E9E9] rounded-xl p-4">
          <img src="/assets/logo2.png" alt="Logo" className="w-14 h-14" />
        </div>

        <h1 className="text-center text-3xl md:text-4xl font-semibold max-w-3xl leading-snug">
          <span className="text-white">
            Uncover the Design and Development Projects{' '}
          </span>
          <span className="text-gray-400">That Set Us Apart</span>
        </h1>

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

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="flex items-center gap-3">
          <span className="text-white">Tech</span>
          <img
            src="/assets/tech.png"
            alt="Tech"
            className="w-20 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">Health Care</span>
          <img
            src="/assets/healthcare.png"
            alt="Health Care"
            className="w-20 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">Developers</span>
          <img
            src="/assets/developers.png"
            alt="Developers"
            className="w-20 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">Software</span>
          <img
            src="/assets/software.png"
            alt="Software"
            className="w-20 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">Entertainment</span>
          <img
            src="/assets/entertainment.png"
            alt="Entertainment"
            className="w-20 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">Hospitality</span>
          <img
            src="/assets/hospitality1.png"
            alt="Hospitality"
            className="w-20 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">Hospitality</span>
          <img
            src="/assets/hospitality2.png"
            alt="Hospitality"
            className="w-20 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">Manufacturing</span>
          <img
            src="/assets/manufacturing.png"
            alt="Manufacturing"
            className="w-20 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">Energy</span>
          <img
            src="/assets/energy.png"
            alt="Energy"
            className="w-20 h-10 rounded-full object-cover"
          />
        </div>
        
      </div>
    </section>
  )
}

export default Projects
