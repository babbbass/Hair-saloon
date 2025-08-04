import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ServiceCard } from "@/components/ServiceCard"

import Link from "next/link"

export default function page() {
  const servicesData = [
    {
      title: "Coachings Capillaire",
      imageUrl:
        "https://www.nefhairdydy.com/wp-content/uploads/2023/10/IMG_0295-scaled-1-1024x710.jpg",
      imageAlt: "Personne recevant un coaching capillaire",
      href: "/services-pages/coachings-capillaire/",
      buttonText: "Voir les Coachings Capillaire",
      description: (
        <>
          <p>
            Je vous propose un rendez-vous d’accompagnement personnalisé pour
            apprendre vous même les clefs de votre propre routine.
          </p>
          <p>
            Pendant votre consultation nous aborderons ensemble les
            problématiques que vous rencontrez dans le soin et le temps que vous
            accordez, à vos cheveux et nous établirons ensemble la routine ou le
            rituel, qui vous correspond.
          </p>
        </>
      ),
    },
    {
      title: "Rituels Coiffure",
      imageUrl:
        "https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-12-1024x683.jpg",
      imageAlt: "Résultat d'un rituel de coiffure sur cheveux afro",
      href: "/services/rituels-coiffure/",
      buttonText: "Voir les Rituels Coiffures",
      description: (
        <>
          <p>
            Le Rituel Coiffure est l’expérience que vous choisissez de vivre
            lors de votre rencontre avec Dydy.
          </p>
          <p>
            Lors de votre rituel Dydy vous accompagne à vivre une expérience qui
            changera la vision que vous avez de votre beauté.
          </p>
          <p>Prête pour votre voyage?</p>
        </>
      ),
    },
  ]
  return (
    <section className='flex flex-col w-full bg-white text-gray-800 mx-auto px-4'>
      <div className='flex flex-col md:flex-row bg-white text-gray-800'>
        <div className='md:w-1/2 w-full'>
          <div className='relative w-full h-64 md:h-full min-h-[300px]'>
            <Image
              src='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Photos-coaching-NefHairDydy-2-1024x683.jpg'
              alt='Femme souriante se faisant coiffer'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </div>
        </div>

        <div className='md:w-1/2 w-full flex items-center justify-center p-8 md:p-12 lg:p-16'>
          <div className='max-w-md mx-auto'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
              Réserver
              <br />
              une prestation
            </h2>
            <div className='mt-6 space-y-4 text-gray-600'>
              <p>
                Chez NefHairDydy, chaque prestation est une invitation à
                redécouvrir la beauté naturelle de vos cheveux afro. Que ce soit
                à travers nos rituels ou nos accompagnements personnalisés, nous
                vous proposons des expériences uniques pour prendre soin de
                votre chevelure et révéler tout son éclat.
              </p>
              <p>
                Avec plus de{" "}
                <span className='font-bold'>350 coachings effectués</span>,{" "}
                <span className='font-bold'>350 clients satisfaits</span>, et
                plus de <span className='font-bold'>8 ans d’expérience</span>,
                laissez-nous vous accompagner dans cette aventure capillaire.
              </p>
              <p className='flex items-start'>
                <span className='mr-2 mt-1'>➡</span>
                <span>
                  Explorez nos prestations et laissez-nous vous accompagner dans
                  la célébration de la beauté de vos cheveux afro.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white py-16 sm:py-24'>
        <div className='container mx-auto px-4'>
          {/* Titre de la section */}
          <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            Choisis le type de prestation que tu veux réserver
          </h2>

          {/* Grille responsive pour les cartes */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {servicesData.map((service) => (
              <Card
                key={service.title}
                className='flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
              >
                {/* Image de la carte */}
                <div className='relative w-full aspect-[4/3]'>
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Contenu de la carte (titre, description, bouton) */}
                <div className='p-6 flex flex-col flex-grow'>
                  <CardHeader className='p-0'>
                    <CardTitle className='text-2xl font-bold text-gray-900'>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='p-0 pt-4 flex-grow'>
                    <div className='space-y-3 text-gray-600'>
                      {service.description}
                    </div>
                  </CardContent>
                  <CardFooter className='p-0 pt-6 mt-auto'>
                    <Button
                      asChild
                      className='w-full sm:w-auto transition-transform duration-200 hover:scale-105'
                    >
                      <Link href={service.href}>{service.buttonText}</Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gray-50 py-16 sm:py-24'>
        <div className='container mx-auto px-4'>
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            Prestations express
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            <ServiceCard
              href='/'
              imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2024/11/nefhairdydy-prestation-enfant-03.jpeg'
              imageAlt={`Rituel "Spécial Enfant"`}
              title={`Rituel "Spécial Enfant" (à partir de 7 ans)`}
              description='Dédié aux enfants'
              price='70€'
            />
            <ServiceCard
              href='/'
              imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/IMG_0165-scaled-2-2048x1750.jpg'
              imageAlt="Arriere plan d'un salon de coiffure"
              title={`Rituel "Découverte" (Soin classique 1er Rdv)`}
              description='Coaching en presentaill et en ligne'
              price='110€'
            />

            <ServiceCard
              href='/'
              imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/IMG_8949-e1697107459184.jpg'
              imageAlt="Arriere plan d'un salon de coiffure"
              title='Rituel "Soin Exfoliant/Relaxant" (Pellicules et Desquamations)'
              description='Coaching en presentaill et en ligne'
              price='125€'
            />
            <ServiceCard
              href='/'
              imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-29.jpg'
              imageAlt="Arriere plan d'un salon de coiffure"
              title='Rituel "Soin Suprême Vapeur" - Coupe des pointes'
              description='Coaching en presentaill et en ligne'
              price='145€'
            />
            <ServiceCard
              href='/'
              imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-1.jpg'
              imageAlt="Arriere plan d'un salon de coiffure"
              title={`Rituel “Retour au Naturel” (Bigchop)`}
              description='Coaching en presentaill et en ligne'
              price='150€'
            />
            <ServiceCard
              href='/'
              imageUrl='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-24.jpg'
              imageAlt="Arriere plan d'un salon de coiffure"
              title={`Rituel "Soin Exfoliant/Relaxant"`}
              description='Coaching en presentaill et en ligne'
              price='180€'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
