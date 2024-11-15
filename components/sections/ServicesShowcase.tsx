'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Users, Heart, Shield } from 'lucide-react'

const servicesData = [
  {
    title: "Diabetic Foot Care",
    icon: Activity,
    services: [
      "Medical-grade nail trimming",
      "Circulation check",
      "Neurological assessment",
      "Risk evaluation"
    ]
  },
  {
    title: "Senior Care Specialists",
    icon: Users,
    services: [
      "Gentle techniques",
      "Mobility considerations",
      "Thick nail management",
      "Infection prevention"
    ]
  },
  {
    title: "Special Needs Care",
    icon: Heart,
    services: [
      "Adaptive approaches",
      "Sensory considerations",
      "Family collaboration",
      "Customized care plans"
    ]
  },
  {
    title: "Preventive Care",
    icon: Shield,
    services: [
      "Regular monitoring",
      "Early detection",
      "Health documentation",
      "Care coordination"
    ]
  }
]

export default function ServicesShowcase() {
  return (
    <section id="services" className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-[#0A5C99]">
                    <service.icon className="mr-2 h-6 w-6" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-[#2D3748]">
                    {service.services.map((item, i) => (
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