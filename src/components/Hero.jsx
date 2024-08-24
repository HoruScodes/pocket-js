import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="container mx-auto mt-8 px-4 md:px-0">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative">
          <Image
            alt="App screenshot"
            src="https://media.gettyimages.com/id/1464505039/photo/customer-welcoming-repairman.jpg?s=2048x2048&w=gi&k=20&c=lyCnERs5EE2tLpdenHiU15FwSPYuGSP_9K700G-YqBk="
            width={2048}
            height={2048}
            className="w-full rounded-lg object-cover"
          />
          <div className="absolute bottom-4 left-4 flex items-center space-x-1 rounded-full bg-white px-3 py-1">
            <Image
              src="https://avatars.githubusercontent.com/u/41698436?v=4&size=64"
              alt="Customer 1"
              height={24}
              width={24}
              className="h-6 w-6 rounded-full"
            />
            <Image
              src="https://avatars.githubusercontent.com/u/41698436?v=4&size=644"
              alt="Customer 2"
              height={24}
              width={24}
              className="h-6 w-6 rounded-full"
            />
            <Image
              src="https://avatars.githubusercontent.com/u/41698436?v=4&size=64"
              alt="Customer 3"
              height={24}
              width={24}
              className="h-6 w-6 rounded-full"
            />
            <span className="text-sm text-gray-600">Customer satisfaction</span>
          </div>
        </div>
        <div>
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            We fix all your plumbing problems
          </h1>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="text-sm md:text-base">
                All our technicians are trained and certified
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="text-sm md:text-base">
                Satisfaction granted on every project
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="text-sm md:text-base">
                The clear solution for your water problems
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="text-sm md:text-base">
                Residential and commercial services
              </span>
            </li>
          </ul>
          <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 md:w-auto">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  )
}
