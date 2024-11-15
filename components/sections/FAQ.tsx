'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    question: "What qualifications do your nail care professionals have?",
    answer: "All our nail care professionals are Registered Nurses (RNs) with specialized training in diabetic foot care, wound management, and geriatric care. They are certified in infection control and follow strict medical protocols."
  },
  {
    question: "How do you ensure safety during nail care sessions?",
    answer: "We follow hospital-grade sterilization protocols, use medical-grade equipment, and adhere to CDC and OSHA guidelines. Our RNs perform a health assessment before each session and use personal protective equipment (PPE) throughout the service."
  },
  {
    question: "Can you provide care for patients with diabetes or other medical conditions?",
    answer: "Absolutely. Our RNs are specially trained to care for patients with diabetes, circulatory issues, and other medical conditions that require extra attention during nail care. We perform thorough assessments and tailor our approach to each patient's needs."
  },
  {
    question: "Do you accept insurance or Medicare for your services?",
    answer: "While we don't directly bill insurance companies, we provide detailed receipts and necessary documentation for you to submit to your insurance provider for potential reimbursement. For Medicare, our services may be covered under certain conditions. We recommend checking with your insurance provider or Medicare representative for specific coverage details."
  },
  {
    question: "How do I book an appointment, and what should I expect?",
    answer: "You can book an appointment through our website or by calling our customer service. During booking, we'll ask for basic health information to prepare for your visit. Expect a thorough health assessment, professional nail care service, and post-care instructions from our RN during your appointment."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F7F7F7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C99]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#2D3748]">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#0A5C99]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#0A5C99]" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 bg-white border border-[#E2E8F0] rounded-b-lg text-[#2D3748]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}