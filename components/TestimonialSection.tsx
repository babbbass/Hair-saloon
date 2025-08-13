import { TestimonialCard } from "@/components/TestimonialCard"

export function TestimonialSection() {
  return (
    <div className='container mx-auto px-4'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-2 text-titlecolor'>
          Ce que nos clients disent
        </h2>
        <p className='text-muted-foreground'>
          {`Des avis qui parlent d'eux-mêmes.`}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <TestimonialCard
          name='Sophie L.'
          comment={`Je suis cliente depuis 3 ans et je ne vais nulle part
                  ailleurs. Leur expertise en coloration est incomparable.`}
        />
        <TestimonialCard
          name='Sabrina.'
          comment={`Coucou Dydy Juste un petit mot pour te dire que depuis lundi je me ballade fièrement avec mon afro bouclé et doré au boulot . Encore mille fois merci pour ton coup de ciseaux ta gentillesse ton oeil d'experte ....car comme on dit " i ' m feeling myself" Des bisous.`}
        />
        <TestimonialCard
          name='Vanessa C.'
          comment={`Bonjour Dydy, alors je t'envoie un petit retour, mon mari et mes enfants aiment beaucoup et les gens en général aussi. Moi j'aime beaucoup également mais je mis habitue doucement car c'est un vrai changement 😊 À bientôt, bonne journée et merci bcp.

`}
        />
        <TestimonialCard
          name='Melanie K.'
          comment={`Merci pour ce super moment partagé, à très vite!`}
        />
      </div>
    </div>
  )
}
