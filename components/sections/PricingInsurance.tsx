'use client'

import { Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import PricingCard from "@/components/ui/PricingCard"

const pricingData = [
  {
    title: "Basic Care",
    price: "85",
    duration: "30-45 min",
    features: [
      "Basic nail trimming",
      "Health assessment",
      "Care documentation",
      "Basic foot check"
    ]
  },
  {
    title: "Complete Care",
    price: "125",
    duration: "45-60 min",
    features: [
      "Advanced nail care",
      "Detailed health assessment",
      "Preventive screening",
      "Care plan development",
      "Follow-up scheduling"
    ],
    popular: true
  },
  {
    title: "Premium Care",
    price: "165",
    duration: "60-75 min",
    features: [
      "Comprehensive care",
      "Extended assessment",
      "Family consultation",
      "Specialized treatments",
      "Priority scheduling",
      "24/7 nurse support"
    ]
  }
]

const insuranceProviders = [
  { name: "Medicare (with qualifying conditions)" },
  { name: "Blue Cross Blue Shield" },
  { name: "Aetna" },
  { name: "UnitedHealthcare" }
]

export default function PricingInsurance() {
  return (
    <section id="pricing" className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-[#0A5C99] px-4 py-1 rounded-full text-sm font-medium mb-4">
            Pre-Launch Pricing
          </span>
          <h2 className="text-3xl font-bold text-[#0A5C99] mb-4">Simple, Transparent Pricing</h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#0A5C99] to-[#1E88E5]" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={plan.title}
              {...plan}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mb-8">
          <span className="inline-block bg-blue-100 text-[#0A5C99] px-4 py-1 rounded-full text-sm font-medium">
            Limited Early Access Available
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-[#0A5C99] text-center mb-8">Insurance Coverage</h3>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#2D3748] mb-4">Accepted Insurance</h4>
              <ul className="space-y-2">
                {insuranceProviders.map((provider) => (
                  <li key={provider.name} className="flex items-center">
                    <Shield className="h-5 w-5 text-[#1E88E5] mr-2" />
                    <span>{provider.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#2D3748] mb-4">Coverage Details</h4>
              <p className="text-gray-600 mb-4">
                Coverage varies by plan and medical necessity. We'll help verify your benefits and provide necessary documentation for reimbursement.
              </p>
              <Button 
                variant="outline" 
                className="border-[#0A5C99] text-[#0A5C99] hover:bg-[#0A5C99] hover:text-white transition-all duration-300"
              >
                Verify Coverage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}