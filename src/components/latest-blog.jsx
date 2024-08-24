import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Preparing Your Plumbing for Winter Weather',
    excerpt: 'For who thoroughly her boy estimating conviction removed.',
    author: {
      name: 'Frances Guerrero',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 2,
    title: 'When to Call an Emergency Plumbing Service',
    excerpt:
      'The bore of true of no be deal. Frequently sufficient to be unaffected.',
    author: {
      name: 'Louis Ferguson',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 3,
    title: 'How to Patch a Leaky Pipe Until the Pollux Arrives',
    excerpt: 'Perceived end knowledge certainly day sweetness why.',
    author: {
      name: 'Larry Lawson',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    image: '/placeholder.svg?height=200&width=300',
  },
]

export default function LatestBlogComponent() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Latest blog
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-4 flex items-center">
                  <Avatar className="mr-2 h-8 w-8">
                    <AvatarImage
                      src={post.author.avatar}
                      alt={post.author.name}
                    />
                    <AvatarFallback>
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-600">
                    {post.author.name}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
