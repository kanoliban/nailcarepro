'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-blue-100 text-[#0A5C99] px-4 py-1 rounded-full text-sm font-medium mb-4"
              >
                Launching in Minneapolis • Winter 2024
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D3748] leading-tight">
                Professional Nail Care
                <span className="text-[#0A5C99] block">For Those Who Need It Most</span>
              </h1>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Specialized nail care services delivered by registered nurses, 
              focusing on elderly, diabetic, and mobility-challenged individuals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-[#0A5C99] hover:bg-[#1E88E5] text-white px-8 transition-all duration-300 transform hover:scale-105"
              >
                Join the Waitlist
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#0A5C99] text-[#0A5C99] hover:bg-blue-50 transition-all duration-300"
              >
                RN Applications Open
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="Professional nail care service"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl" />
            
            {/* Coming Soon Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#0A5C99] px-4 py-2 rounded-full shadow-lg">
              <p className="text-sm font-semibold">Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}