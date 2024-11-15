'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface PricingCardProps {
  title: string
  price: string
  duration: string
  features: string[]
  popular?: boolean
  index: number
}

export default function PricingCard({
  title,
  price,
  duration,
  features,
  popular = false,
  index
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group"
    >
      <Card className={`h-full relative flex flex-col transform transition-all duration-300 hover:scale-102 ${
        popular ? 'border-[#0A5C99] border-2' : ''
      }`}>
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0A5C99] text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center bg-blue-100 text-[#0A5C99] px-2 py-1 rounded-full text-xs font-medium">
            <Sparkles className="h-3 w-3 mr-1" />
            Pre-Launch Price
          </span>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-[#0A5C99]">
            {title}
          </CardTitle>
          <div className="flex items-baseline mt-4">
            <span className="text-3xl font-bold text-[#2D3748]">${price}</span>
            <span className="ml-2 text-gray-500">/visit</span>
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <ul className="space-y-3 flex-1">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-[#2D3748]">{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            className="w-full mt-6 bg-gradient-to-r from-[#0A5C99] to-[#1E88E5] hover:from-[#1565C0] hover:to-[#1976D2] transform transition-all duration-300 group-hover:scale-102"
          >
            Join Waitlist - ${price}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}