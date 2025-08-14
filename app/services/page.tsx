import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: "fas fa-paint-brush",
    title: "Coachings",
    slug: "coachings",
    description: "Techniques avancées pour un résultat naturel.",
    price: "85€",
  },
  {
    icon: "fas fa-cut",
    title: "Coupes - Colorations - Soins",
    slug: "coiffures",
    description: "Des coupes modernes et personnalisées.",
    price: "70€",
  },
]

export default function Services() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4 text-titlecolor'>
            Nos Services
          </h2>
          <p className='max-w-2xl mx-auto'>
            Une gamme complète pour sublimer votre chevelure.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-2'>
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              passHref
            >
              <Card className='flex flex-col w-full hover:border-titlecolor hover:bg-red-200 cursor-pointer transition-all duration-200'>
                <CardHeader>
                  <div className='w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-primary-foreground text-2xl mb-6'>
                    <i className={service.icon}></i>
                  </div>
                  <CardTitle className='font-bold text-xl text-titlecolor'>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className=''>{service.description}</p>
                </CardContent>
                <CardFooter>
                  <p className='font-bold'>À partir de {service.price}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
