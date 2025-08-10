import { CircleArrowOutDownRight } from 'lucide-react';

function Process() {
  const steps = [
    { num: 1, label: 'Code' },
    { num: 2, label: 'Build' },
    { num: 3, label: 'Test' },
    { num: 4, label: 'Release' },
    { num: 5, label: 'Deploy' },
    { num: 6, label: 'Monitor' },
    { num: 7, label: 'Build' },
  ];

  // Arc parameters
  const centerX = 300;
  const centerY = 250;
  const radius = 250;
  const startAngle = Math.PI; // left
  const endAngle = 0; // right

  // Create positions evenly spaced along arc
  const stepPositions = steps.map((step, i) => {
    const t = i / (steps.length - 1); // from 0 to 1
    const angle = startAngle + (endAngle - startAngle) * t;
    const cx = centerX + radius * Math.cos(angle);
    const cy = centerY + radius * Math.sin(angle);

    // Offset label above arc if top half, below if bottom half
    const labelOffset = cy < centerY ? -25 : 35;

    return { ...step, cx, cy, lx: cx, ly: cy + labelOffset };
  });

  return (
    <section className="relative bg-[#0C101A] text-white pt-24 px-6 overflow-hidden">
      {/* Header */}
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

      {/* Planet & Steps */}
      <div className="relative mt-14 flex justify-center">
        <img
          src="/assets/Planet.png"
          alt="Globe"
          className="w-[800px] relative z-0"
        />

        <svg
          className="absolute top-5 left-1/2 -translate-x-1/2 z-10"
          width="900"
          height="500"
          viewBox="0 0 600 300"
          fill="none"
        >
          {/* Arc Path */}
          <path
            d={`M${centerX - radius} ${centerY} A${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
            stroke="#fff"
            strokeDasharray="4 6"
            strokeOpacity="0.6"
            fill="none"
          />

          {/* Steps */}
          {stepPositions.map((step, i) => (
            <g key={i}>
              {/* Label */}
              <text
                x={step.lx}
                y={step.ly}
                textAnchor="middle"
                fill="#25D1C7"
                fontSize="16"
                fontWeight="600"
              >
                {step.label}
              </text>

              {/* Circle */}
              <circle cx={step.cx} cy={step.cy} r="18" fill="#3A3A3A" />

              {/* Number */}
              <text
                x={step.cx}
                y={step.cy + 5}
                textAnchor="middle"
                fill="#fff"
                fontSize="14"
                fontWeight="600"
              >
                {step.num}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}

export default Process;
