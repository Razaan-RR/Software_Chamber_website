import { CircleArrowOutDownRight } from 'lucide-react';

function Header() {
  return (
    <header className="relative bg-[#0C101A] px-6 py-4 flex justify-between items-center text-white z-50 overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-80 z-0"></div>

      {/* Glow overlays */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#60a5fa] opacity-20 rounded-full blur-[160px] z-0"></div>

      
      {/* Content */}
      <div className="relative z-10 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold">
          <img
            src="/assets/softwarechamber-logo.png"
            alt="Software Chamber Logo"
            className="w-10 h-10"
          />
          <span className="leading-tight">
            Software <br />
            <span className="text-gray-300 font-normal">Chamber</span>
          </span>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#5F5F5F] to-[#1E1E1E] text-white font-semibold shadow-md hover:opacity-95 transition">
            <span>Contact Us</span>
            <span className="inline-flex items-center justify-center bg-white p-2 rounded-full">
              <CircleArrowOutDownRight
                className="w-4 h-4 text-black"
                style={{ transform: 'rotate(-45deg)' }}
              />
            </span>
          </button>

          <button className="bg-gradient-to-r from-[#5F5F5F] to-[#1E1E1E] rounded-full border border-gray-600 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="12" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="12" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
