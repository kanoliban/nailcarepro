'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cross, GitFork, ShieldCheck } from 'lucide-react'

const problemSolutionData = [
  {
    title: "Medical Necessity",
    icon: Cross,
    description: "Professional nail care is crucial for diabetes, circulation issues, and mobility challenges",
    stats: "30% of diabetics develop foot problems requiring medical care"
  },
  {
    title: "Healthcare Gap",
    icon: GitFork,
    description: "Regular nail salons aren't equipped for medical needs; hospitals don't provide routine care",
    stats: "50% of seniors have difficulty accessing appropriate foot care"
  },
  {
    title: "Our Solution",
    icon: ShieldCheck,
    description: "RN-provided, medical-grade nail care in your home",
    benefits: ["Specialized care for high-risk patients", "Preventive health monitoring", "Convenient in-home service"]
  }
]

export default function ProblemSolution() {
  return (
    <section id="why-nailcare-pro" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Why NailCare Pro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemSolutionData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-[#0A5C99]">
                    <item.icon className="mr-2 h-6 w-6" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2D3748] mb-4">{item.description}</p>
                  {item.stats && (
                    <p className="text-sm font-semibold text-[#1E88E5]">{item.stats}</p>
                  )}
                  {item.benefits && (
                    <ul className="list-disc list-inside text-sm text-[#2D3748]">
                      {item.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}