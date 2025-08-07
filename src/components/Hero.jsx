function Hero() {
  return (
    <section className="bg-[#0C101A] text-white text-center py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,210,255,0.15),_transparent_70%)] pointer-events-none"></div>

      <div className="inline-block px-4 py-1 mb-6 text-xs text-white bg-[#1F2B3E] border border-[#00D2FF] rounded-full">
        ✨ Smarter Idea, instant solutions
      </div>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        <span className="text-[#00FFE0]">We are your Software</span>
        <br />
        <span className="inline-flex items-center space-x-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00FFE0] to-white">
            Development
          </span>
          <img src="/assets/mini-pic1.png" className="w-12 h-12" alt="icon 1" />
          <img src="/assets/mini-pic2.png" className="w-12 h-12" alt="icon 2" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00FFE0] to-white">
            Team
          </span>
        </span>
        <br />
        in The Cloud
      </h1>

      <div className="flex justify-center mt-8">
        <button className="flex items-center justify-between px-6 py-2 rounded-full bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C] text-white font-semibold shadow-md border border-[#5A5A5A]">
          <span className="mr-4">Contact Us</span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#1C1C1C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
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

      {/* Timeline Glass Panel */}
      <div className="relative mt-20 flex justify-center">
        <div className="relative w-full max-w-3xl rounded-2xl backdrop-blur-md bg-white/10 px-6 pt-10 pb-12 shadow-2xl text-left border border-white/10 overflow-visible">
          {/* Floating Tags with Lines - Left */}
          <div className="absolute -left-48 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-5">
            {['Website Development', 'Mobile App Development'].map(
              (text, i) => (
                <div className="relative flex items-center gap-2 bg-[#1F2B3E]/90 text-white text-xs px-5 py-2 rounded-full shadow">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                  {text}
                  <div className="absolute right-0 top-1/2 translate-x-full w-8 h-px bg-white/20"></div>
                </div>
              )
            )}
          </div>

          {/* Floating Tags with Lines - Right */}
          <div className="absolute -right-48 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-5">
            {['UI/UX Engineering', 'Software Services'].map((text, i) => (
              <div className="relative flex items-center gap-2 bg-[#1F2B3E]/90 text-white text-xs px-5 py-2 rounded-full shadow">
                <div className="bg-white w-2 h-2 rounded-full"></div>
                {text}
                <div className="absolute left-0 top-1/2 -translate-x-full w-8 h-px bg-white/20"></div>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Timeline Bar Section */}
            <div className="relative h-52 w-full rounded-xl backdrop-blur-sm bg-white/10 border border-white/10 p-6 overflow-hidden">
              {/* Month Labels */}
              <div className="absolute top-3 left-4 text-sm text-gray-400">
                Aug
              </div>
              <div className="absolute top-3 left-1/2 -translate-x-1/2 text-sm text-gray-400">
                Sep
              </div>
              <div className="absolute top-3 right-4 text-sm text-gray-400">
                Oct
              </div>

              {/* Transparent Dots Under Months */}
              <div className="absolute top-12 left-6 right-6 flex justify-between px-2">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white/30 rounded-full backdrop-blur-sm"
                  ></div>
                ))}
              </div>

              {/* Timeline Bars (Adjusted Vertical Positioning) */}
              <div className="absolute top-[35%] right-[10%] w-[35%] bg-[#1F2B3E] text-white text-xs px-4 py-1.5 rounded-md shadow-md">
                Mobile App
              </div>
              <div className="absolute top-[55%] left-[10%] w-[35%] bg-[#3A3A4B] text-white text-xs px-4 py-1.5 rounded-md shadow-md">
                Software
              </div>
              <div className="absolute top-[80%] right-[10%] w-[35%] bg-[#6DECB9] text-black text-xs px-4 py-1.5 rounded-md shadow-md">
                Website
              </div>
            </div>

            {/* Info Section */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Software Service Solutions
              </h2>
              <p className="text-sm text-gray-300 mb-4 max-w-md">
                Plan, track, and manage projects with precision tools.
              </p>
              <button className="bg-[#1F2B3E] text-white px-6 py-2 rounded-full text-sm font-medium">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
