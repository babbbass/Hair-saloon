import { ImageGallery } from "@/components/ImageGallery"
import { TestimonialSection } from "@/components/TestimonialSection"
import { HeroSection } from "@/components/HeroSection"
import { Events } from "@/components/Events"

export default function HomePage() {
  return (
    <section className='container mx-auto flex flex-col items-center w-full'>
      <HeroSection />
      <ImageGallery />
      <Events />
      <TestimonialSection />
    </section>
  )
}
