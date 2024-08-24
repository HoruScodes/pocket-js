import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Bath, Droplets, Thermometer } from 'lucide-react'

export default function ContactComponent() {
  return (
    <div className="container mx-auto bg-white p-4 md:p-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <div className="mb-4 text-4xl text-yellow-400">✨</div>
          <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            We are here for all your plumbing problems
          </h1>
          <p className="mb-6 text-gray-600">
            He moonlights difficult engrossed it, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to. Place voice no arises along.
          </p>
          <p className="mb-6 text-gray-600">
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to. Place voice no arises along.
          </p>
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center">
              <Bath className="mr-2 text-yellow-400" size={24} />
              <div>
                <div className="text-xl font-bold">500+</div>
                <div className="text-sm text-gray-600">Sink installed</div>
              </div>
            </div>
            <div className="flex items-center">
              <Droplets className="mr-2 text-yellow-400" size={24} />
              <div>
                <div className="text-xl font-bold">500+</div>
                <div className="text-sm text-gray-600">Faucets fixed</div>
              </div>
            </div>
            <div className="flex items-center">
              <Thermometer className="mr-2 text-yellow-400" size={24} />
              <div>
                <div className="text-xl font-bold">300+</div>
                <div className="text-sm text-gray-600">Boilers installed</div>
              </div>
            </div>
          </div>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Know more
          </Button>
        </div>
        <Card className="flex-1 overflow-hidden rounded-3xl bg-blue-600 text-white">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-bold">Request service</h2>
            <p className="mb-6">
              Enter your contact details here to help us serve you better &
              faster.
            </p>
            <form className="space-y-4">
              <Input placeholder="Name" className="bg-white text-black" />
              <Input placeholder="Email" className="bg-white text-black" />
              <Input placeholder="Contact" className="bg-white text-black" />
              <Select>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="heating">Heating</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Message" className="bg-white text-black" />
              <Button className="w-full bg-gray-800 text-white hover:bg-gray-900">
                Get an appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
