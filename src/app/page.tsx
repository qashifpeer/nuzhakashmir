import { FeatureStories, Hero, TravelInspirations } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeatureStories />
      <TravelInspirations />
      <TravelInspirations />
      <TravelInspirations />
    </div>
  )
}
