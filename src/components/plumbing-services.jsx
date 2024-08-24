'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone } from 'lucide-react'

const services = [
  {
    name: 'Plumbing leak',
    description:
      'Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    name: 'Bathroom plumbing',
    description:
      'Bathroom plumbing issues can be frustrating. Our expert team is equipped to handle all your bathroom plumbing needs, from leaky faucets to shower installations.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    name: 'Kitchen plumbing',
    description:
      'Keep your kitchen running smoothly with our professional kitchen plumbing services. We handle everything from sink repairs to dishwasher installations.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    name: 'Broken fixture',
    description:
      "Don't let a broken fixture disrupt your day. Our skilled technicians can quickly repair or replace any plumbing fixture in your home.",
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    name: 'Drain clogs',
    description:
      'Clogged drains can be a major inconvenience. Our drain cleaning services will have your pipes flowing freely in no time.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    name: 'Broken toilet',
    description:
      'A broken toilet requires immediate attention. Our team provides fast, efficient toilet repair and replacement services to get your bathroom back in order.',
    image: '/placeholder.svg?height=200&width=300',
  },
]

export default function PlumbingServices() {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <div className="container mx-auto bg-white p-4 md:p-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
        Service that we provide
      </h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <Card className="bg-gray-100">
            <CardContent className="p-4">
              {services.map((service) => (
                <Button
                  key={service.name}
                  variant={
                    selectedService.name === service.name
                      ? 'default'
                      : 'outline'
                  }
                  className={`mb-2 w-full justify-start ${
                    selectedService.name === service.name
                      ? 'bg-yellow-400 hover:bg-yellow-500'
                      : 'bg-white'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  {service.name}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <p className="mb-6 text-gray-600">{selectedService.description}</p>
          <div className="mb-6 flex flex-col md:flex-row">
            <img
              src={selectedService.image}
              alt={selectedService.name}
              className="flex h-48 w-full flex-1 rounded-lg object-cover"
            />
            <div className="flex flex-1 flex-col">
              <p className="mb-6 text-gray-600">
                Perceived end knowledge certainly day sweetness why cordially.
                Ask a quick six seven offer see among. Handsome met debating sir
                dwelling age material. As style lived he worse dried. Offered
                related so visitors we private removed. Moderate do subjects to
                distance.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                  Contact us
                </Button>
                <Button
                  variant="outline"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Phone className="mr-2 h-4 w-4" /> +1-202-444-0133
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
