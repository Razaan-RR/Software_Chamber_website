import { CircleArrowOutDownRight } from 'lucide-react'
import './mobile-responsive/hero.css'


function Hero() {
  return (
    <section className="relative bg-[#0C101A] text-white text-center py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-80 z-0"></div>
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#4ade80] opacity-20 rounded-full blur-[180px] z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#60a5fa] opacity-20 rounded-full blur-[160px] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,210,255,0.15),_transparent_70%)] pointer-events-none z-0"></div>

      <div className="relative z-10">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-[#25D1C7] text-xs text-white bg-[#25D1C71A] font-medium tracking-wide">
          <span className="text-teal-400">★</span> Smarter Idea, instant
          solutions
        </div>

        <h1 className="hero-heading text-4xl md:text-7xl font-bold leading-tight">
          <span className="text-[#00FFE0]">We are your Software</span>
          <br />
          <span className="inline-flex items-center space-x-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00FFE0] to-white">
              Development
            </span>
            <img
              src="/assets/mini-pic1.png"
              className="hero-mini-img w-12 h-12"
              alt="icon 1"
            />
            <img
              src="/assets/mini-pic2.png"
              className="hero-mini-img w-12 h-12"
              alt="icon 2"
            />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00FFE0] to-white">
              Team
            </span>
          </span>
          <br />
          in The Cloud
        </h1>

        <div className="flex justify-center mt-8">
          <button className="hero-btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#5F5F5F] to-[#1E1E1E] text-white font-semibold shadow-md hover:opacity-95 transition">
            <span>Contact Us</span>
            <span className="hero-btn-icon inline-flex items-center justify-center bg-white p-2 rounded-full">
              <CircleArrowOutDownRight
                className="w-4 h-4 text-black"
                style={{ transform: 'rotate(-45deg)' }}
              />
            </span>
          </button>
        </div>

        <div className="hero-timeline relative flex items-center justify-center mt-20">
          <div className="relative w-full max-w-4xl">
            <div className="hero-label-left absolute -left-40 top-[70px] flex items-center gap-2 z-30 bg-gradient-to-r from-[#5F5F5F] to-[#1E1E1E] px-4 py-2 text-xs text-white">
              <div className="bg-white w-3 h-3 rounded-sm flex items-center justify-center">
                <span className="text-black font-bold">✔</span>
              </div>
              Website Development
            </div>

            <div className="hero-label-left absolute -left-40 top-[130px] flex items-center gap-2 z-30 bg-gradient-to-r from-[#5F5F5F] to-[#1E1E1E] px-4 py-2 text-xs text-white">
              <div className="bg-white w-3 h-3 rounded-sm flex items-center justify-center">
                ✔
              </div>
              Mobile App Development
            </div>

            <div className="hero-label-right absolute -right-40 top-[70px] flex items-center gap-2 z-30 bg-gradient-to-r from-[#5F5F5F] to-[#1E1E1E] px-4 py-2 text-xs text-white">
              <div className="bg-white w-3 h-3 rounded-sm flex items-center justify-center">
                ✔
              </div>
              UI/UX Engineering
            </div>

            <div className="hero-label-right absolute -right-40 top-[150px] flex items-center gap-2 z-30 bg-gradient-to-r from-[#5F5F5F] to-[#1E1E1E] px-4 py-2 text-xs text-white">
              <div className="bg-white w-3 h-3 rounded-sm flex items-center justify-center">
                ✔
              </div>
              Software Services
            </div>

            <div className="flex justify-center mt-8">
              <img
                src="/assets/Bento-card.png"
                alt="Bento Card"
                className="rounded-lg shadow-lg"
                style={{ width: '600px', height: 'auto', maxWidth: '90vw' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
