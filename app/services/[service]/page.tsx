import { Hero } from "@/components/services/Hero"
import { ServicesList } from "@/components/services/ServicesList"

// import BenefitsSection from "@/components/page/coaching/BenefitsSection"
// import HowItWorksSection from "@/components/page/coaching/HowItWorksSection"
// import TestimonialsSection from "@/components/page/coaching/TestimonialsSection"

type ServicePageProps = {
  params: Promise<{ service: string }>
}

export default async function ServicesPage({ params }: ServicePageProps) {
  const { service } = await params
  return (
    <div className='bg-white text-gray-800'>
      <Hero service={service} />
      <ServicesList service={service} />
    </div>
  )
}
