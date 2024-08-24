import { Hero } from '@/components/Hero'
import LatestBlogComponent from '@/components/latest-blog'
import ContactComponent from '@/components/plumbing-service'
import PlumbingServices from '@/components/plumbing-services'
import ServiceFeatureComponent from '@/components/service-features'

export default function Home() {
  return (
    <>
      <Hero />
      <ContactComponent />
      <PlumbingServices />
      <ServiceFeatureComponent />
      <LatestBlogComponent />
    </>
  )
}
