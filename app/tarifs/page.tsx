import { RateCard } from "@/components/RateCard"

export default function TarifsPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <header className='text-center mb-12'>
        <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-titlecolor'>
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
      </section>
      <h3 className='text-2xl font-bold mb-4 mt-12 text-green-700'>
        Rituels coiffure
      </h3>
      <section className='grid gap-8 md:grid-cols-2'>
        <RateCard
          href='/services/rituel-special-enfant'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2024/11/nefhairdydy-prestation-enfant-03.jpeg'
          imageAlt='Coiffure rituel special enfant'
          title={`Rituel "Spécial Enfant" (à partir de 7 ans)`}
          price={70}
          description='Coaching en presentaill et en ligne'
        />
        <RateCard
          href='/services/rituel-decouverte'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-29-683x1024.jpg'
          imageAlt='Coiffure rituel decouverte'
          title={`Rituel "Découverte" (Soin classique 1er Rdv)`}
          description='Coaching en presentaill et en ligne'
          price={110}
        />
        <RateCard
          href='/services/rituel-retour-au-naturel-bigchop'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-1.jpg'
          imageAlt='Coiffure rituel retour au naturel bigchop'
          title='Rituel “Retour au Naturel” (Bigchop)'
          description='Coaching en presentaill et en ligne'
          price={110}
        />
        <RateCard
          href='/services/rituel-soin-exfoliant-relaxant'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-24-683x1024.jpg'
          imageAlt='Coiffure rituel soin exfoliant relaxant'
          title='Rituel "Soin Exfoliant/Relaxant" (Pellicules et Desquamations)'
          description='Coaching en presentaill et en ligne'
          price={125}
        />
        <RateCard
          href='/services/rituel-soin-supreme-vapeur-coupe-des-pointes'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-25-1024x682.jpg'
          imageAlt='Coiffure'
          title='Rituel "Soin Suprême Vapeur" - Coupe des pointes'
          description='Coaching en presentaill et en ligne'
          price={145}
        />
        <RateCard
          href='/services/rituel-coupe-de-transformation-ou-mise-en-forme'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-5-683x1024.jpg'
          imageAlt='Coiffure transformation ou mise en forme'
          title={`Rituel "Coupe de Transformation"`}
          description='Coaching en presentaill et en ligne'
          price={150}
        />
        <RateCard
          href='/services/rituel-soin-supreme-vapeur-coupe-de-transformation'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-13-1024x683.jpg'
          imageAlt='Coiffure rituel soin supreme vapeur coupe de transformation'
          title={`Rituel "Soin Suprême Vapeur" - Coupe de transformation ou de restructuration`}
          description='Coaching en presentaill et en ligne'
          price={180}
        />
        <RateCard
          href='/services/rituel-coloration'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-28-683x1024.jpg'
          imageAlt='nefhairdydy Coiffure rituel coloration'
          title={`Rituel "Coloration"`}
          description='Coaching en presentaill et en ligne'
          price={190}
        />
        <RateCard
          href='/services/rituel-coloration-coupe'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-2-8-683x1024.jpg'
          imageAlt='nefhairdydy Coiffure rituel coloration + coupe'
          title={`Rituel “Coloration + Coupe“`}
          description='Coaching en presentaill et en ligne'
          price={250}
        />
        <RateCard
          href='/services/rituel-balayage'
          imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-2-4-683x1024.jpg'
          imageAlt='nefhairdydy Coiffure rituel balayage'
          title={`Rituel “Balayage“`}
          description='Coaching en presentaill et en ligne'
          price={290}
        />
      </section>
    </div>
  )
}
