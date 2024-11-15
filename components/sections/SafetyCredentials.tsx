'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, AlertTriangle, FileCheck, Zap, Phone } from 'lucide-react'

const safetyData = [
  { icon: Shield, text: "Certified RNs" },
  { icon: Lock, text: "HIPAA Compliant" },
  { icon: AlertTriangle, text: "Infection Control" },
  { icon: FileCheck, text: "Insurance Compliance" },
  { icon: Zap, text: "Sterile Equipment" },
  { icon: Phone, text: "24/7 Support" }
]

export default function SafetyCredentials() {
  return (
    <section id="safety-credentials" className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Medical-Grade Care Standards</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-8 max-w-4xl mx-auto">
          {safetyData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="h-12 w-12 text-[#0A5C99] mb-4" />
              <p className="text-center text-[#2D3748] font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}