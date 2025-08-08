import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0C101A] text-white px-8 md:px-20 pt-20 pb-8 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">LET'S TALK</h1>
          <p className="text-gray-300 max-w-md leading-relaxed font-outfit">
            A new era of energy, elegance, and elite competition begins here.
            Where passion meets performance on the court like never before.
          </p>

          <div>
            <h3 className="text-white font-medium mb-4 font-bricolage">Social media</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-300 font-outfit">
              <a href="#" className="hover:underline">Instagram ↗</a>
              <a href="#" className="hover:underline">Twitter ↗</a>
              <a href="#" className="hover:underline">Tiktok ↗</a>
              <a href="#" className="hover:underline">Facebook ↗</a>
              <a href="#" className="hover:underline">Linkedin ↗</a>
              <a href="#" className="hover:underline">Youtube ↗</a>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6 text-sm">
            <div>
              <h4 className="text-white font-medium mb-1 font-bricolage">ADDRESS</h4>
              <p className="text-gray-300 font-outfit">1901 Thornridge Cir,<br />Shiloh, Hawaii 81063</p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-1 font-bricolage">PHONE</h4>
              <p className="text-gray-300 font-outfit">[+1] 872-298-3989</p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-1 font-bricolage">EMAIL</h4>
              <p className="text-gray-300 font-outfit">hello@tranzit.com</p>
            </div>
          </div>

          <div>
            <img
              src="/assets/team.png"
              alt="Team"
              className="rounded-xl w-[180px] h-[240px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 border-dashed mt-12 mb-4"></div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2 font-outfit">
        <p>2024 Software Chamber All Right Reserved</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
