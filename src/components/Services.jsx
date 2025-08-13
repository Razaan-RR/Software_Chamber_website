import {
  ArrowUpRightIcon,
  SparklesIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import './mobile-responsive/services.css'


function Services() {
  return (
    <section className="services-section bg-white text-black py-16 px-6 md:px-20">
      <div className="services-header flex justify-between items-center mb-12">
        <h1 className="services-heading text-6xl font-semibold flex items-center gap-2">
          Services
          <SparklesIcon className="services-icon w-10 h-10" style={{ color: "#27B4A3" }} />
        </h1>
        <button className="services-btn flex items-center gap-2 text-sm font-medium text-black font-outfit">
          All Services
          <span className="services-btn-icon w-6 h-6 flex items-center justify-center rounded-full bg-black/10">
            <ArrowLongRightIcon className="w-3.5 h-3.5 text-black" />
          </span>
        </button>
      </div>

      <div className="services-container flex flex-wrap justify-center gap-6 max-w-[1536px] mx-auto px-6">
        <div className="service-card bg-[#F3F3F3] rounded-2xl w-full xl:w-[32%] p-6 min-h-[416px] flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="service-title text-3xl font-semibold mb-4 font-bricolage">
              Web & Mobile App Development
            </h3>
            <p className="service-desc text-gray-500 text-lg">
              Software Chamber specializes in creating powerful, scalable, and secure e-
            </p>
          </div>
          <div className="mt-10">
            <button className="service-arrow-btn w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
              <ArrowUpRightIcon className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        <div className="service-card bg-[#27B4A3] text-white rounded-2xl w-full xl:w-[32%] p-10 min-h-[416px] flex flex-col justify-between">
          <div>
            <h3 className="service-title text-3xl font-semibold mb-4 font-bricolage">
              Application <br />Software Services
            </h3>
            <p className="service-desc text-lg">
              Software Chamber specializes in creating powerful, scalable, and secure e-
            </p>
          </div>
          <div className="mt-10">
            <button className="service-arrow-btn w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
              <ArrowUpRightIcon className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        <div className="service-card bg-[#F3F3F3] rounded-2xl w-full xl:w-[32%] p-10 min-h-[416px] flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="service-title text-3xl font-semibold mb-4 font-bricolage">
              Software Coding <br />& Optimization
            </h3>
            <p className="service-desc text-gray-500 text-lg">
              Software Chamber specializes in creating powerful, scalable, and secure e-
            </p>
          </div>
          <div className="mt-10">
            <button className="service-arrow-btn w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
              <ArrowUpRightIcon className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
