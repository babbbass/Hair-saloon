import { RateCard } from "@/components/RateCard"

export default function Coachings() {
  return (
    <section className='container space-y-8 px-4 py-12 flex flex-col items-center'>
      <h1 className='text-2xl md:text-4xl font-bold tracking-tight  text-titlecolor'>
        Coachings Capillaires
      </h1>
      <p className='md:mt-4 text-lg md:w-3/4'>
        {`Je vous propose un rendez-vous d'accompagnement personnalisé pour apprendre vous même les clefs de votre propre routine.

Pendant votre consultation nous aborderons ensemble les problématiques que vous rencontrez dans le soin et le temps que vous accordez, à vos cheveux et nous établirons ensemble la routine ou le rituel, qui vous correspond.`}
      </p>
      <div className='md:mt-8 grid gap-8 md:grid-cols-2'>
        <RateCard
          href='/services/coaching-capillaires-presentiels'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Photos-coaching-NefHairDydy-2-1024x683.jpg'
          imageAlt="Arriere plan d'un salon de coiffure"
          title='Coachings en presentiels'
          description='Coaching en presentaill et en ligne'
          price={85}
        />
        <RateCard
          href='/services/coaching-capillaires-en-ligne'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/IMG_8949-e1697107459184.jpg'
          imageAlt="Arriere plan d'un salon de coiffure"
          title='Coachings en ligne'
          description='Coaching en presentaill et en ligne'
          price={85}
        />
      </div>
    </section>
  )
}
