'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { CalendarClock, Info, Mail } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-16 bg-[#0A5C99] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            Launching Winter 2024
          </span>
          <h2 className="text-3xl font-bold mb-6">Join Our Pre-Launch List</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be among the first to experience medical-grade nail care provided by registered nurses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              className="bg-white text-[#0A5C99] hover:bg-[#E6F3FF] transition-colors duration-300 flex items-center w-48 group"
            >
              <CalendarClock className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Join Waitlist
            </Button>
            <Button
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A5C99] transition-colors duration-300 flex items-center w-48 group"
            >
              <Info className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
            <Button
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A5C99] transition-colors duration-300 flex items-center w-48 group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}