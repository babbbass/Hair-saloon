import { Hero } from "@/components/services/Hero"
import { ServicesList } from "@/components/services/ServicesList"

// import BenefitsSection from "@/components/page/coaching/BenefitsSection"
// import HowItWorksSection from "@/components/page/coaching/HowItWorksSection"
// import TestimonialsSection from "@/components/page/coaching/TestimonialsSection"

export default function ServicesPage({
  params,
}: {
  params: { service: string }
}) {
  const { service } = params
  return (
    <div className='bg-white text-gray-800'>
      <Hero service={service} />
      <ServicesList service={service} />
    </div>
  )
}
