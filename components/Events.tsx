import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, PartyPopper, Handshake } from "lucide-react"
import { WeddingIcon } from "@/components/icons/WeddingIcon"

const services = [
  {
    icon: WeddingIcon,
    title: "Mariages",
    description:
      "Découvrez l’ensemble de mes rituels coiffures, coachings, et ateliers capillaires pour le grand jour.",
    href: "/services/mariages",
  },
  {
    icon: PartyPopper,
    title: "Évènementiel",
    description:
      "Découvrez l’ensemble de mes prestations événementielles pour briller en toute occasion.",
    href: "/services/evenementiel",
  },
  {
    icon: Handshake,
    title: "Collaborations",
    description:
      "Découvrez ici l’ensemble de mes collaborations avec des marques et des personnalités publiques.",
    href: "/collaborations",
  },
]

export function Events() {
  return (
    <section className='w-full bg-gray-100 py-16 md:py-24 mb-12'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto'>
          <div className='flex items-center justify-center gap-2 mb-2'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-titlecolor'>
              Mes services
            </h2>
          </div>
          <p className='text-lg text-primary font-medium mb-4'>
            Découvrez la beauté naturelle de vos cheveux
          </p>
          <p className='text-muted-foreground'>
            Je vous propose une expérience unique autour du soin, et la mise en
            forme de vos cheveux dans leur état naturel.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {services.map((service) => (
            <Card
              key={service.title}
              className='flex flex-col text-center items-center p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out'
            >
              <CardHeader className='p-0 mx-auto w-full'>
                <div className='bg-primary/10 rounded-full p-4 mb-4 mx-auto'>
                  <service.icon className='h-10 w-10 text-primary' />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className='flex-grow p-4'>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              {/* <CardFooter className='p-0'>
                <Button
                  asChild
                  variant='ghost'
                  className='text-primary hover:text-primary'
                >
                  <Link href={service.href}>
                    En savoir plus
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
