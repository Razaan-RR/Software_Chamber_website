import { Menu } from 'lucide-react'

function Header() {
  return (
    <header className="bg-[#0C101A] px-6 py-4 flex justify-between items-center text-white relative z-50">
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

      {/* Contact + Menu */}
      <div className="flex items-center gap-4">
        <button className="border border-gray-500 px-5 py-2 rounded-full hidden md:inline-block text-sm hover:bg-white/10 transition">
          Contact Us
        </button>
        <button className="rounded-full border border-gray-600 p-2 md:hidden">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

export default Header
