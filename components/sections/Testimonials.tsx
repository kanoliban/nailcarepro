'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "NailCare Pro has been a game-changer for our patients with diabetes. Their professional care has significantly reduced foot-related complications.",
    author: "Dr. Sarah Johnson",
    title: "Endocrinologist, City Hospital"
  },
  {
    quote: "As a caregiver, I'm impressed by the thorough and gentle approach of NailCare Pro's nurses. They've made nail care worry-free for my elderly mother.",
    author: "Michael Thompson",
    title: "Family Caregiver"
  },
  {
    quote: "We've seen a marked improvement in foot health among our residents since partnering with NailCare Pro. Their service is truly top-notch.",
    author: "Lisa Chen",
    title: "Director, Sunshine Senior Living"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Trust from Healthcare Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#2D3748] mb-4">{testimonial.quote}</p>
                  <p className="font-semibold text-[#0A5C99]">{testimonial.author}</p>
                  <p className="text-sm text-[#1E88E5]">{testimonial.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}