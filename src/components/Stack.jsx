import React from 'react';

const logos = [
  { name: 'Spotify', src: '/assets/spotify.png' },
  { name: 'TalentQl', src: '/assets/talentql.png' },
  { name: 'DropBox', src: '/assets/dropbox.png' },
  { name: 'Flipay', src: '/assets/flipay.png' },
  { name: 'Slack', src: '/assets/slack.png' },
];

const Stack = () => {
  return (
    <section className="bg-[#0C101A] text-white py-20 px-8 md:px-24 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
            Our Stack Powers of <br />
            the <span className="text-gray-400">World's</span> Most <br />
            <span className="text-gray-400">Beloved Companies</span>
          </h1>
        </div>

        <div className="relative w-[340px] h-[240px]">
          {/* Top Row */}
          <div className="absolute top-0 -left-2">
            <Capsule name={logos[0].name} src={logos[0].src} />
          </div>
          <div className="absolute top-0 right-0">
            <Capsule name={logos[1].name} src={logos[1].src} />
          </div>

          {/* Middle Row */}
          <div className="absolute top-[84px] -left-14">
            <Capsule name={logos[2].name} src={logos[2].src} />
          </div>
          <div className="absolute top-[84px] right-12">
            <Capsule name={logos[3].name} src={logos[3].src} />
          </div>

          {/* Bottom Row */}
          <div className="absolute top-[162px] left-[35px]">
            <Capsule name={logos[4].name} src={logos[4].src} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Capsule = ({ name, src }) => (
  <div className="bg-gradient-to-b from-[#2EF2B3] to-[#0F6B59] flex items-center gap-4 px-6 py-3 rounded-full shadow-md min-w-[170px] h-[52px]">
    <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
      <img src={src} alt={name} className="w-[20px] h-[20px]" />
    </div>
    <span className="text-base font-medium">{name}</span>
  </div>
);

export default Stack;
