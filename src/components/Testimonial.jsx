import React from 'react'
import { Star } from 'lucide-react'

function Testimonial() {
  return (
    <section className="bg-[#0C101A] text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Pill Tag*/}
        <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white border border-teal-400/20 z-10">
          <Star className="w-4 h-4 text-teal-400 fill-current" />
          Smarter ideas, instant solutions
          <div
            className="absolute inset-0 rounded-full -z-10"
            style={{
              backgroundColor: 'transparent',
              boxShadow: 'inset 0 0 10px 3px rgba(45, 212, 191, 0.4)',
            }}
          ></div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-12 mt-6">
          Don’t just take our word for it. Hear <br />
          what <span className="text-gray-400">our clients say</span>
        </h1>

        {/* Testimonial Box with neon top edge glow */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute top-[-2px] left-1/2 transform -translate-x-1/2 w-[60%] h-[6px] z-10 pointer-events-none">
            <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(45,212,191,0.6)_0%,_rgba(45,212,191,0.1)_90%,_transparent_100%)]"></div>
          </div>

          <div className="absolute inset-0 -inset-px rounded-[22px] bg-gradient-to-br from-teal-400/30 via-transparent to-teal-400/30 blur-2xl opacity-20 pointer-events-none -z-10"></div>

          {/* Actual Testimonial Box */}
          <div className="relative bg-[#10141f] border border-[#1f2a33] rounded-2xl px-8 py-10 shadow-[0_0_40px_#23d6b340] z-10">
            <p className="text-lg sm:text-xl leading-relaxed text-white text-left">
              "Sed sit varius neque turpis enim ut metus consectetur. Tortor
              urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh
              condimentum aliquet commodo."
            </p>

            {/* Profile Info */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Alex Larkins"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">Alex Larkins</p>
                  <p className="text-sm text-gray-400">
                    Art director at Airbnb
                  </p>
                </div>
              </div>

              {/* Logo */}
              <img
                src="/assets/logo 2.png"
                alt="mono logo"
                className="h-4 opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
