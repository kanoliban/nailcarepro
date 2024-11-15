'use client'

import { useState, useEffect } from 'react'
import { Heart, CalendarClock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-sm shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-2 text-[#0A5C99]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="h-8 w-8" />
            <span className="text-xl font-bold">NailCare Pro</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Nav Items */}
            <div className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-[#1E88E5]' : 'text-gray-800 hover:text-[#0A5C99]'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <span className="text-sm text-[#0A5C99] font-medium">
                Launching Winter 2024
              </span>
              <Button
                className={`
                  relative overflow-hidden group
                  bg-gradient-to-r from-[#0A5C99] to-[#1E88E5]
                  hover:from-[#1565C0] hover:to-[#1976D2]
                  text-white font-medium px-6
                  transform transition-all duration-200
                  hover:scale-102 active:scale-98
                  shadow-sm hover:shadow-md
                `}
              >
                <CalendarClock className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Join Waitlist</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="relative w-10 h-10">
                <div className="flex flex-col space-y-1.5 w-6">
                  <span className={`block h-0.5 w-full transform transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-gray-800'
                  }`} />
                  <span className={`block h-0.5 w-full transform transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-gray-800'
                  }`} />
                  <span className={`block h-0.5 w-full transform transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-gray-800'
                  }`} />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-2 text-[#0A5C99] mb-8">
                  <Heart className="h-6 w-6" />
                  <span className="text-lg font-bold">NailCare Pro</span>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-700 hover:text-[#1E88E5] transition-colors py-2 text-lg"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <span className="block text-sm text-[#0A5C99] font-medium mb-4">
                      Launching Winter 2024
                    </span>
                    <Button
                      className={`
                        w-full
                        bg-gradient-to-r from-[#0A5C99] to-[#1E88E5]
                        hover:from-[#1565C0] hover:to-[#1976D2]
                        text-white font-medium
                        transform transition-all duration-200
                        active:scale-98
                        flex items-center justify-center
                      `}
                    >
                      <CalendarClock className="mr-2 h-4 w-4" />
                      Join Waitlist
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}