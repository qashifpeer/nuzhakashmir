import { FeatureStories, FixedHero, Hero, TourPackages, TravelInspirations } from '@/components'
import Image from 'next/image'

export const revalidate = 60;

export default function Home() {
  return (
    <div className="">
      <Hero />
      <TourPackages />
      <FixedHero />
      
      
    </div>
  )
}
