import { CircleArrowOutDownRight } from 'lucide-react';

function Projects() {
  return (
    <section className="relative bg-black w-full py-20 flex justify-center">
      
      <div className="bg-gradient-to-br from-[#042D2E] via-[#051918] to-[#001214] text-white rounded-2xl border border-teal-700 max-w-4xl w-full px-10 py-20 flex flex-col items-center gap-8">

        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-[#25D1C7] text-xs text-white bg-[#25D1C71A] font-medium tracking-wide">
          <span className="text-teal-400">★</span> Smarter Idea, instant solutions
        </div>

        <div className="bg-[#E9E9E9] rounded-xl p-4">
          <img 
            src="/assets/logo2.png"
            alt="Logo"
            className="w-14 h-14"
          />
        </div>

        <h1 className="text-center text-3xl md:text-4xl font-semibold max-w-3xl leading-snug">
          <span className="text-white">Uncover the Design and Development Projects </span>
          <span className="text-gray-400">That Set Us Apart</span>
        </h1>

        <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#5F5F5F] to-[#1E1E1E] text-white font-semibold shadow-md hover:opacity-90 transition">
          Contact Us
          <CircleArrowOutDownRight className="w-5 h-5 ml-2" 
            style={{ transform: 'rotate(-45deg)' }}
          />
        </button>

      </div>
    </section>
  );
}

export default Projects;
