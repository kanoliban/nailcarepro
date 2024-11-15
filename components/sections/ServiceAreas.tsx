'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Building2, ChevronDown, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../ui/ServiceMap'), { 
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[400px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  )
})

const MINNEAPOLIS_CENTER = {
  lat: 44.9778,
  lng: -93.2650
}

const launchCity = {
  name: "Minneapolis-St. Paul",
  radius: "15-mile service radius",
  coverage: [
    { name: "Minneapolis", coordinates: [44.9778, -93.2650] },
    { name: "St. Paul", coordinates: [44.9537, -93.0900] },
    { name: "Bloomington", coordinates: [44.8408, -93.2983] },
    { name: "Eden Prairie", coordinates: [44.8547, -93.4708] },
    { name: "Plymouth", coordinates: [45.0105, -93.4555] },
    { name: "Minnetonka", coordinates: [44.9211, -93.4687] }
  ]
}

const futureMarkets = [
  { 
    name: "Chicago",
    timing: "Summer 2024",
    status: "Coming Soon",
    waitlistCount: 245,
    description: "Bringing professional nail care to the Windy City",
    population: "2.7M"
  },
  { 
    name: "Milwaukee",
    timing: "Fall 2024",
    status: "Coming Soon",
    waitlistCount: 127,
    description: "Professional nail care coming to Milwaukee",
    population: "590K"
  },
  { 
    name: "Madison",
    timing: "Fall 2024",
    status: "Coming Soon",
    waitlistCount: 98,
    description: "Medical-grade nail care for Madison residents",
    population: "260K"
  },
  { 
    name: "New York",
    timing: "2025",
    status: "Future Market",
    waitlistCount: 567,
    description: "Professional nail care coming to the Big Apple",
    population: "8.8M"
  },
  { 
    name: "Los Angeles",
    timing: "2025",
    status: "Future Market",
    waitlistCount: 432,
    description: "Medical nail care for LA communities",
    population: "3.9M"
  },
  { 
    name: "Houston",
    timing: "2025",
    status: "Future Market",
    waitlistCount: 289,
    description: "Professional nail care for Houston residents",
    population: "2.3M"
  }
]

export default function ServiceAreas() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState(MINNEAPOLIS_CENTER)
  const [expandedCity, setExpandedCity] = useState<string | null>(null)

  return (
    <section id="service-areas" className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-blue-100 text-[#0A5C99] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Launch City Announcement
            </span>
            <h2 className="text-3xl font-bold text-[#0A5C99] mb-4">
              Starting in Minneapolis
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Launching first in the Twin Cities, bringing professional medical nail care to Minnesota communities.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Launch City Card */}
          <Card className="relative overflow-hidden border-2 border-[#0A5C99]">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-[#0A5C99]">Minneapolis-St. Paul Metro</CardTitle>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Launch City
                </span>
              </div>
              <CardDescription>Serving the Twin Cities Metro Area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#0A5C99] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Service Radius</h4>
                    <p className="text-sm text-gray-600">{launchCity.radius}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-[#0A5C99] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Coverage Areas</h4>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {launchCity.coverage.map((area) => (
                        <button
                          key={area.name}
                          className="text-sm text-left text-gray-600 hover:text-[#0A5C99] transition-colors"
                          onMouseEnter={() => {
                            setHoveredCity(area.name)
                            setSelectedLocation({ lat: area.coordinates[0], lng: area.coordinates[1] })
                          }}
                          onMouseLeave={() => {
                            setHoveredCity(null)
                            setSelectedLocation(MINNEAPOLIS_CENTER)
                          }}
                        >
                          {area.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-[#0A5C99] hover:bg-[#1E88E5] mt-4">
                  Join Minneapolis Waitlist
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Map Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[400px]">
                <Map 
                  center={selectedLocation}
                  coverage={launchCity.coverage}
                  hoveredCity={hoveredCity}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Markets */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0A5C99] mb-6">Expansion Cities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureMarkets.map((market) => (
              <motion.div
                key={market.name}
                className="overflow-hidden"
                initial={false}
              >
                <motion.div
                  className={`
                    flex flex-col p-4 rounded-lg border border-gray-200 
                    hover:border-[#0A5C99] transition-colors cursor-pointer
                    ${expandedCity === market.name ? 'border-[#0A5C99]' : ''}
                  `}
                  onClick={() => setExpandedCity(expandedCity === market.name ? null : market.name)}
                  onMouseEnter={() => setHoveredCity(market.name)}
                  onMouseLeave={() => setHoveredCity(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className={`h-5 w-5 ${
                        market.status === 'Coming Soon' ? 'text-orange-500' : 'text-gray-400'
                      }`} />
                      <div>
                        <h4 className="font-medium text-gray-900">{market.name}</h4>
                        <p className="text-sm text-gray-600">{market.timing}</p>
                      </div>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ rotate: expandedCity === market.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedCity === market.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-gray-100">
                          <p className="text-gray-600 mb-3">{market.description}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <Users className="h-4 w-4" />
                            <span>{market.waitlistCount} people on waitlist</span>
                          </div>
                          <Button 
                            className="w-full bg-[#0A5C99] hover:bg-[#1E88E5]"
                          >
                            Join {market.name} Waitlist
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}