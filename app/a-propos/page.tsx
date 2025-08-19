import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, Ear, Heart, Leaf } from "lucide-react"
import Link from "next/link"
import { teamMembers } from "@/lib/constants"

export default function AboutPage() {
  return (
    <div className='container p-2 bg-background text-foreground'>
      <div className='relative h-[40vh] md:h-[50vh] w-full'>
        <Image
          src='/dydy-saloon.png'
          alt='Intérieur du salon de coiffure'
          fill
          style={{ objectFit: "cover" }}
          className='brightness-50'
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            Notre Histoire
          </h1>
          <p className='mt-4 text-lg md:text-xl max-w-2xl'>
            {`Bienvenue chez NefHairDydy, bien plus qu'un simple salon de coiffure.`}
          </p>
        </div>
      </div>

      <div className='container mx-auto px-4 py-16 md:py-24 text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-titlecolor'>
          {`L'Art de la Coiffure sur Mesure`}
        </h2>
        <div className='max-w-3xl mx-auto mt-4'>
          <p className='text-lg text-muted-foreground'>
            {`Fondé en 2018 par NefHairDydy, notre
            salon est né d'un rêve : créer un lieu unique où l'expertise
            technique rencontre une atmosphère chaleureuse. Nous croyons que la
            coiffure est une expression de soi, et notre mission est de révéler
            votre beauté unique.`}
          </p>
        </div>
      </div>

      <div className='bg-muted'>
        <div className='container mx-auto px-4 py-16 md:py-24'>
          <h2 className='text-3xl font-bold tracking-tight text-center mb-12 text-titlecolor'>
            Nos Valeurs Fondamentales
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='flex flex-col items-center text-center text-green-700'>
              <Star className='h-12 w-12 mb-4' />
              <h3 className='text-xl font-semibold'>Excellence</h3>
              <p className='text-muted-foreground mt-2'>
                Nous nous formons continuellement pour vous offrir des
                prestations de la plus haute qualité.
              </p>
            </div>
            <div className='flex flex-col items-center text-center text-green-700'>
              <Ear className='h-12 w-12 mb-4' />
              <h3 className='text-xl font-semibold'>Écoute</h3>
              <p className='text-muted-foreground mt-2'>
                Chaque rendez-vous commence par un diagnostic pour un résultat
                qui dépasse vos attentes.
              </p>
            </div>
            <div className='flex flex-col text-green-700 items-center text-center'>
              <Heart className='h-12 w-12  mb-4' />
              <h3 className='text-xl font-semibold'>Passion</h3>
              <p className='text-muted-foreground mt-2'>
                {`La coiffure n'est pas notre métier, c'est notre passion. Nous y
                mettons tout notre cœur.`}
              </p>
            </div>
            <div className='flex flex-col items-center text-center text-green-700'>
              <Leaf className='h-12 w-12 mb-4' />
              <h3 className='text-xl font-semibold'>Respect</h3>
              <p className='text-muted-foreground mt-2'>
                {`Nous sélectionnons des produits de qualité, respectueux de vos
                cheveux et de l'environnement.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-16 md:py-24'>
        <h2 className='text-3xl font-bold tracking-tight text-center mb-12 text-titlecolor'>
          Découvrez Notre Équipe
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers.map((member) => (
            <Card key={member.name} className='text-center border-0 shadow-lg'>
              <CardHeader className='items-center'>
                <Avatar className='h-24 w-24 mb-4 '>
                  <AvatarImage
                    src={member.avatarSrc}
                    alt={`Portrait de ${member.name}`}
                  />
                  <AvatarFallback className='bg-green-700 text-slate-50 font-semibold'>
                    {member.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <p className='text-primary font-medium'>{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className='bg-muted'>
        <div className='container mx-auto px-4 py-16 md:py-24 text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-titlecolor'>
            {`Prêt(e) à vivre l'expérience ?`}
          </h2>
          <p className='text-lg text-muted-foreground mt-4 max-w-2xl mx-auto'>
            Votre voyage capillaire commence ici. Nous avons hâte de vous
            accueillir et de prendre soin de vous.
          </p>
          <div className='mt-8 flex flex-col md:flex-row justify-center gap-4 p-2'>
            <Button asChild size={"lg"}>
              <Link href='/contact'>Prendre rendez-vous</Link>
            </Button>
            <Button asChild variant='outline' size={"lg"}>
              <Link href='/services'>Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
