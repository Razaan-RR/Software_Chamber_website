import { CircleArrowOutDownRight } from 'lucide-react';

function Process() {
  return (
    <section className="relative bg-[#0C101A] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-[#25D1C7] text-xs text-white bg-[#25D1C71A] font-medium tracking-wide">
          <span className="text-teal-400">★</span> Smarter Idea, instant solutions
        </div>
        <h1 className="text-5xl font-bold leading-tight text-white mb-4">
          Our Software<br />
          <span className="text-[#9CA3AF]">Development Process</span>
        </h1>
        <p className="text-[#9CA3AF] max-w-xl mx-auto mb-8">
          Deliver personalized experiences to your customers with AI-powered recommendation
          engines and dynamic content generation.
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

    </section>
  );
}

export default Process;
