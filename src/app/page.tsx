import { FeatureStories, Hero, TravelInspirations } from '@/components'
import Image from 'next/image'

export const revalidate = 60;

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeatureStories />
      <TravelInspirations />
      
    </div>
  )
}
