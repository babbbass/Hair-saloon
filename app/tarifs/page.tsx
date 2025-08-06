import { RateCard } from "@/components/RateCard"

export default function TarifsPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <header className='text-center mb-12'>
        <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl text-red-700'>
          Nos Tarifs
        </h1>
        <p className='mt-4 text-lg text-muted-foreground'>
          Découvrez nos coachings et rituels de coiffure pour prendre soin de
          vos cheveux.
        </p>
      </header>

      <h3 className='text-2xl font-bold mb-4 text-green-700'>
        Coachings Capillaires
      </h3>
      <section className='grid gap-8 md:grid-cols-2'>
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title='Coachings en presentiels'
          description='Coaching en presentaill et en ligne'
          price='85€'
        />
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title='Coachings en ligne'
          description='Coaching en presentaill et en ligne'
          price='85€'
        />
      </section>
      <h3 className='text-2xl font-bold mb-4 mt-12 text-green-700'>
        Rituels coiffure
      </h3>
      <section className='grid gap-8 md:grid-cols-2'>
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title={`Rituel "Spécial Enfant" (à partir de 7 ans)`}
          description='Coaching en presentaill et en ligne'
          price='70€'
        />
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title={`Rituel "Découverte" (Soin classique 1er Rdv)`}
          description='Coaching en presentaill et en ligne'
          price='110€'
        />
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title='Rituel “Retour au Naturel” (Bigchop)'
          description='Coaching en presentaill et en ligne'
          price='110€'
        />
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title='Rituel "Soin Exfoliant/Relaxant" (Pellicules et Desquamations)'
          description='Coaching en presentaill et en ligne'
          price='125€'
        />
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title='Rituel "Soin Suprême Vapeur" - Coupe des pointes'
          description='Coaching en presentaill et en ligne'
          price='145€'
        />
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title={`Rituel "Coupe de Transformation"`}
          description='Coaching en presentaill et en ligne'
          price='150€'
        />
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title={`Rituel "Soin Suprême Vapeur" - Coupe de transformation ou de restructuration`}
          description='Coaching en presentaill et en ligne'
          price='180€'
        />
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title={`Rituel "Coloration"`}
          description='Coaching en presentaill et en ligne'
          price='190€'
        />
        <RateCard
          href='/'
          imageUrl='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          imageAlt="Arriere plan d'un salon de coiffure"
          title={`Rituel “Coloration + Coupe“`}
          description='Coaching en presentaill et en ligne'
          price='250€'
        />
      </section>
    </div>
  )
}
