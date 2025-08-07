import React, { useState } from 'react'
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { ArrowTrendingDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What software development services does your company offer?',
    answer: '',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.',
  },
  {
    question: 'What sets your company apart from the competition?',
    answer: '',
  },
  {
    question: 'Is my project idea and information kept confidential?',
    answer: '',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1) // Second item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="min-h-screen px-6 md:px-12 py-20 text-black">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-[32px] sm:text-[38px] md:text-[42px] leading-tight font-semibold mb-10">
          Comprehensive Answers to the Most{' '}
          <span className="inline-block">
            <SparklesIcon className="w-10 h-10 text-teal-400 inline-block" />
            <span className="underline">Common Questions</span>
          </span>{' '}
          <span className="text-gray-400 font-semibold">
            About Our <br />
            Services
          </span>{' '}
          and How We
          <span className="text-gray-400 font-semibold"> Work</span>{' '}
          <span className="inline-block -rotate-90">
            <ArrowTrendingDownIcon
              className="w-12 h-12 text-black inline-block ml-2"
              style={{ transform: 'rotate(-90deg)' }}
            />
          </span>
        </h1>
      </div>

      {/* FAQ Title */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-4 border-b border-dashed border-gray-300 pb-2">
        <h2 className="text-[64px] font-semibold font-bricolage">FAQ</h2>
        <button className="flex items-center gap-2 text-sm font-semibold text-black font-outfit">
          All FAQ
          <span className="w-8 h-8 rounded-full bg-[#2CCEBA] flex items-center justify-center">
            <ArrowRight size={16} className="text-black" />
          </span>
        </button>
      </div>

      {/* FAQ List */}
      <div className="max-w-5xl mx-auto divide-y divide-gray-300">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className={`py-5 px-2 sm:px-3 transition-all ${
                isOpen ? 'bg-white rounded-md' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left text-[15px] font-medium focus:outline-none"
              >
                <span className="pr-2 font-bricolage font-semibold">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                    isOpen ? 'bg-[#2CCEBA] text-white' : 'bg-black text-white'
                  }`}
                >
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              {isOpen && faq.answer && (
                <p className="mt-3 text-sm text-gray-700 leading-relaxed font-outfit">
                  {faq.answer}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
