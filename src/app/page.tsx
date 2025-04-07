import { AboutMeSection, FeatureStories, Feedback, FixedHero, Hero, ImageCarousel, TourPackages, TravelInspirations } from '@/components'
import Image from 'next/image'

export const revalidate = 60;

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <AboutMeSection />
      <TourPackages />
      <FixedHero />
      <Feedback />
      <ImageCarousel />
      
      
    </div>
  )
}
