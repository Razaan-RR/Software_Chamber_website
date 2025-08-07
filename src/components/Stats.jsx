import React from "react";
import { ArrowTrendingDownIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from '@heroicons/react/24/solid'


function Stats() {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-center ">
        <SparklesIcon className="w-8 h-8 text-teal-400 inline-block" />
          At Software Chamber,
        <span className="text-gray-900 font-bold">
          <span className="text-gray-400 font-semibold"> we specialize</span> in<br />
          turning complex challenges into elegant
        </span>{" "}
        <span className="block text-gray-400 font-semibold mt-2">
          digital solutions 
              <ArrowTrendingDownIcon className="w-8 h-8 text-black inline-block ml-2"
                style={{ transform: 'rotate(-180deg)' }}
               />
        </span>
      </h1>

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="text-left space-y-10">
          <div>
            <p className="text-3xl font-bold font-bricolage">20+</p>
            <p className="text-gray-500 font-outfit">Tech Partners</p>
          </div>
          <div>
            <p className="text-3xl font-bold font-bricolage">150+</p>
            <p className="text-gray-500 font-outfit">Project Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold font-bricolage">1K+</p>
            <p className="text-gray-500 font-outfit">Satisfied Customers</p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden max-w-sm w-full shadow-md">
          <img
            src="/assets/Rectangle 6.png"
            alt="Team Meeting"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-8 w-full max-w-md">
          {[
            {
              title: "Your Team in the cloud",
              desc: "We hire best and brightest talents to build world class technology",
            },
            {
              title: "Grow more with less",
              desc: "We have a competitive pricing structure",
            },
            {
              title: "Weekly sprint and reviews",
              desc: "Our fast review and feedback loop is designed to keep you in the driver's seat",
            },
            {
              title: "Communication First",
              desc: "We use modern tools and services to collaborate",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <p className="font-semibold font-bricolage">{item.title}</p>
                <p className="text-gray-500 text-sm font-outfit">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
