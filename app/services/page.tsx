import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    icon: "fas fa-cut",
    title: "Coupes",
    description: "Des coupes modernes et personnalisées.",
    price: "50€",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Coloration",
    description: "Techniques avancées pour un résultat naturel.",
    price: "70€",
  },
  {
    icon: "fas fa-spa",
    title: "Soins",
    description: "Soins professionnels pour revitaliser vos cheveux.",
    price: "40€",
  },
]

export default function Services() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>Nos Services</h2>
          <p className='max-w-2xl mx-auto text-muted-foreground'>
            Une gamme complète pour sublimer votre chevelure.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <Card key={service.title} className='flex flex-col'>
              <CardHeader>
                <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl mb-6'>
                  <i className={service.icon}></i>
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className='flex-grow'>
                <p className='text-muted-foreground'>{service.description}</p>
              </CardContent>
              <CardFooter>
                <p className='font-bold'>À partir de {service.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
