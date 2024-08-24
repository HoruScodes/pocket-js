'use client'

import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Droplet, ChevronDown, Menu, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const menuItems = [
  {
    label: 'Home',
    items: ['Home Default', 'Carpenter', 'Cleaning', 'Plumber'],
  },
  {
    label: 'Pages',
    items: [
      'Service',
      'Projects',
      'Blog',
      'About',
      'Testimonials',
      'Team',
      'FAQs',
      'Pricing',
      'Error',
      'Coming Soon',
      'Authentication',
    ],
  },
  { label: 'Blog' },
  { label: 'Contact' },
  { label: '...' },
]

const NavItem = ({ item }) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
      {item.label} {item.items && <ChevronDown className="ml-1 h-4 w-4" />}
    </DropdownMenuTrigger>
    {item.items && (
      <DropdownMenuContent>
        {item.items.map((subItem, index) => (
          <DropdownMenuItem key={index}>
            {subItem}
            {subItem === 'Authentication' && (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    )}
  </DropdownMenu>
)

const MobileNavItem = ({ item }) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex w-full items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
      {item.label} {item.items && <ChevronDown className="ml-auto h-4 w-4" />}
    </DropdownMenuTrigger>
    {item.items && (
      <DropdownMenuContent>
        {item.items.map((subItem, index) => (
          <DropdownMenuItem key={index}>
            {subItem}
            {subItem === 'Authentication' && (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    )}
  </DropdownMenu>
)

export default function NavBarComponent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  }

  return (
    <>
      <motion.nav
        variants={variants}
        animate={isScrolled ? 'visible' : 'visible'}
        initial="visible"
        transition={{ duration: 0.3 }}
        className={`fixed left-0 right-0 top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Droplet className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  Pollux
                </span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="ghost" className="text-yellow-500">
                <Phone className="mr-2 h-4 w-4" />
                <span className="sr-only">Call us now:</span>
                Call us now!
                <span className="ml-2 font-semibold">469-537-2410</span>
              </Button>
            </div>
            <div className="flex items-center sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open main menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="mt-5">
                    {menuItems.map((item, index) => (
                      <MobileNavItem key={index} item={item} />
                    ))}
                    <Button
                      variant="ghost"
                      className="mt-4 w-full justify-start text-yellow-500"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      <span className="sr-only">Call us now:</span>
                      Call us now!
                      <span className="ml-2 font-semibold">469-537-2410</span>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
      <div className="h-16" aria-hidden="true"></div>
    </>
  )
}
