import { Menu } from 'lucide-react'

function Header() {
  return (
    <header className="bg-[#0C101A] px-6 py-4 flex justify-between items-center text-white relative z-50">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <img
          src="/assets/softwarechamber-logo.png"
          alt="Software Chamber Logo"
          className="w-10 h-10"
        />
        <span>
          Software <br />
          <span className="text-gray-300">Chamber</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button className="border border-white px-4 py-2 rounded-full hidden md:inline-block text-sm">
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
