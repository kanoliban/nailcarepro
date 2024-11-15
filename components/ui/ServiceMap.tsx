'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Circle, Tooltip, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { motion, AnimatePresence } from 'framer-motion'

// Custom marker icon with medical theme
const icon = L.divIcon({
  className: 'custom-marker',
  html: `<div class="w-6 h-6 bg-white rounded-full border-2 border-[#0A5C99] shadow-lg flex items-center justify-center">
    <div class="w-3 h-3 bg-[#0A5C99] rounded-full"></div>
  </div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
})

const activeIcon = L.divIcon({
  className: 'custom-marker-active',
  html: `<div class="w-8 h-8 bg-white rounded-full border-2 border-[#1E88E5] shadow-lg flex items-center justify-center">
    <div class="w-4 h-4 bg-[#1E88E5] rounded-full animate-pulse"></div>
  </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

interface Location {
  lat: number
  lng: number
}

interface Coverage {
  name: string
  coordinates: number[]
}

interface MapProps {
  center: Location
  coverage: Coverage[]
  hoveredCity: string | null
}

interface AreaStats {
  population: string
  nurseCount: number
  waitlistCount: number
}

const areaStats: Record<string, AreaStats> = {
  'Minneapolis': {
    population: '429,954',
    nurseCount: 12,
    waitlistCount: 156
  },
  'St. Paul': {
    population: '311,527',
    nurseCount: 8,
    waitlistCount: 98
  },
  'Bloomington': {
    population: '89,987',
    nurseCount: 4,
    waitlistCount: 45
  },
  'Eden Prairie': {
    population: '64,400',
    nurseCount: 3,
    waitlistCount: 32
  },
  'Plymouth': {
    population: '81,026',
    nurseCount: 4,
    waitlistCount: 41
  },
  'Minnetonka': {
    population: '53,781',
    nurseCount: 3,
    waitlistCount: 28
  }
}

function ChangeView({ center }: { center: Location }) {
  const map = useMap()
  
  useEffect(() => {
    map.setView([center.lat, center.lng], 11)
  }, [center, map])
  
  return null
}

function MarkerWithPopup({ 
  position, 
  name, 
  isHovered,
  stats
}: { 
  position: [number, number]
  name: string
  isHovered: boolean
  stats: AreaStats
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Marker
      position={position}
      icon={isHovered ? activeIcon : icon}
      eventHandlers={{
        click: () => setIsOpen(true),
        mouseover: () => setIsOpen(true),
        mouseout: () => setIsOpen(false),
      }}
    >
      <Popup
        className="custom-popup"
        closeButton={false}
        autoPan={false}
      >
        <div className="p-2">
          <h3 className="font-semibold text-[#0A5C99] mb-2">{name}</h3>
          <div className="space-y-1 text-sm">
            <p className="text-gray-600">Population: {stats.population}</p>
            <p className="text-gray-600">Available RNs: {stats.nurseCount}</p>
            <p className="text-gray-600">Current Waitlist: {stats.waitlistCount}</p>
          </div>
          <button 
            className="mt-3 w-full bg-[#0A5C99] text-white px-3 py-1 rounded-md text-sm hover:bg-[#1E88E5] transition-colors"
            onClick={() => console.log(`Joining waitlist for ${name}`)}
          >
            Join Area Waitlist
          </button>
        </div>
      </Popup>
    </Marker>
  )
}

export default function ServiceMap({ center, coverage, hoveredCity }: MapProps) {
  const [showRadiusInfo, setShowRadiusInfo] = useState(false)

  return (
    <>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        {/* Service radius circle */}
        <Circle
          center={[44.9778, -93.2650]}
          radius={24140}
          pathOptions={{
            color: showRadiusInfo ? '#1E88E5' : '#0A5C99',
            fillColor: '#1E88E5',
            fillOpacity: showRadiusInfo ? 0.15 : 0.1,
            weight: 1
          }}
          eventHandlers={{
            mouseover: () => setShowRadiusInfo(true),
            mouseout: () => setShowRadiusInfo(false),
          }}
        >
          {showRadiusInfo && (
            <Tooltip permanent>
              <div className="text-sm">
                <p className="font-semibold">15-mile Service Radius</p>
                <p>Coverage Population: ~2.5M</p>
                <p>Available RNs: 34</p>
              </div>
            </Tooltip>
          )}
        </Circle>

        {/* Coverage area markers */}
        {coverage.map((area) => (
          <MarkerWithPopup
            key={area.name}
            position={[area.coordinates[0], area.coordinates[1]]}
            name={area.name}
            isHovered={hoveredCity === area.name}
            stats={areaStats[area.name]}
          />
        ))}

        {/* Update map center when selection changes */}
        <ChangeView center={center} />
      </MapContainer>

      {/* Mobile tooltip for touch devices */}
      <div className="md:hidden text-center text-sm text-gray-500 mt-2">
        Tap locations to see details
      </div>
    </>
  )
}