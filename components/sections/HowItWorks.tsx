'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clipboard, Stethoscope, Activity } from 'lucide-react'

const stepsData = [
  {
    title: "Book Your Care",
    icon: Calendar,
    description: [
      "Simple online booking",
      "Health profile creation",
      "Preference setting"
    ]
  },
  {
    title: "Professional Assessment",
    icon: Clipboard,
    description: [
      "RN evaluation",
      "Care plan development",
      "Risk factor identification"
    ]
  },
  {
    title: "Receive Care",
    icon: Stethoscope,
    description: [
      "Medical-grade service",
      "Sterile equipment",
      "Professional protocols"
    ]
  },
  {
    title: "Ongoing Support",
    icon: Activity,
    description: [
      "Care documentation",
      "Follow-up scheduling",
      "Health monitoring"
    ]
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsData.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-[#0A5C99]">
                    <step.icon className="mr-2 h-6 w-6" />
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-[#2D3748]">
                    {step.description.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}