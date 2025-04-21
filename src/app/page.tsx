import {  AboutUs, FeatureStories, Feedback, FixedHero, Hero, ImageCarousel, SlicedPackages, TravelInspirations } from '@/components'
import Image from 'next/image'

export const revalidate = 60;

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      {/* <AboutUs /> */}
      <SlicedPackages />
      <FixedHero />
      <Feedback />
      <ImageCarousel />
      
      
    </div>
  )
}
