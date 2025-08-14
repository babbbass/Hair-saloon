import { RateCard } from "@/components/RateCard"

export default function Coiffures() {
  return (
    <section className='container space-y-8 px-4 py-12 flex flex-col items-center'>
      <h1 className='text-2xl md:text-4xl font-bold tracking-tight  text-titlecolor'>
        Rituels Coiffures
      </h1>
      <p className='md:mt-4 text-lg md:w-3/4'>
        {`Le Rituel Coiffure est l'expérience que vous choisissez de vivre lors de votre rencontre avec Dydy.

Lors de votre rituel Dydy vous accompagne à vivre une expérience qui changera la vision que vous avez de votre beauté.

Prête pour votre voyage?`}
      </p>
      <div className='md:mt-8 grid gap-8 md:grid-cols-2'>
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
      </div>
    </section>
  )
}
