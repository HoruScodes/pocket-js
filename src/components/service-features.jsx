import { Laptop, Handshake, Wrench } from 'lucide-react'

const features = [
  {
    icon: Laptop,
    title: 'Request free quote',
    description:
      'Parlors waiting so against me no. Wishing calling is warrant settled was lucky.',
  },
  {
    icon: Handshake,
    title: 'We arrive within 1hr',
    description:
      'For who thoroughly her boy estimating conviction Removed demands expense account.',
  },
  {
    icon: Wrench,
    title: 'Solve your problem',
    description:
      'The bore of true of no be deal Frequently to be unaffected The furnished.',
  },
]

export default function ServiceFeatureComponent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-start justify-center gap-8 md:flex-row md:gap-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex max-w-xs flex-col items-center text-center"
          >
            <div className="mb-4 rounded-full bg-blue-600 p-4">
              <feature.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
