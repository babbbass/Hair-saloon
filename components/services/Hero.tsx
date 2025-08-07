import Image from "next/image"
import { services } from "@/lib/constants"
import { Badge } from "../ui/badge"
import { AppointmentCalendar } from "@/components/AppointementCalendar"

type HeroType = {
  service: string
}
type ServiceSlug = keyof typeof services
export function Hero({ service }: HeroType) {
  if (service in services) {
    const serviceData = services[service as ServiceSlug]
    return (
      <section className='container mx-auto px-4 py-16'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-center'>
          <div className='w-full lg:w-6/12'>
            <div className='relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg'>
              {"image" in services[service as ServiceSlug] &&
                serviceData.image && (
                  <Image
                    src={serviceData.image}
                    alt='Coaching capillaire par NefHairDydy'
                    fill
                    className='object-cover'
                    priority
                  />
                )}
            </div>
          </div>

          <div className='w-full lg:w-7/12 mt-6'>
            {"name" in services[service as ServiceSlug] && serviceData.name && (
              <>
                <h1 className='text-4xl md:text-5xl font-bold text-green-700 mb-6'>
                  {serviceData.name}
                </h1>
                <div className='my-10 p-6 bg-gray-50 rounded-lg border border-gray-900'>
                  <p className='flex flex-col justify-center'>
                    <span className='flex items-center text-lg'>
                      <Badge className='mr-2 bg-blue-700 text-xl'>
                        {serviceData.price}
                        {"€"}
                      </Badge>
                      <span>la prestation</span>
                    </span>
                    <br />
                    Cette prestation est pour 1 personne uniquement
                  </p>
                </div>
                {/* <div className='container mx-auto px-2 py-2 space-y-4 text-gray-600 leading-relaxed text-lg'>
                  <p>
                    Le coaching capillaire est bien plus qu’une simple
                    consultation. C’est un{" "}
                    <strong>accompagnement personnalisé</strong>, une écoute
                    attentive, et une expertise dédiée à la santé et la beauté
                    de vos cheveux.
                  </p>
                  <p>
                    Ensemble, nous identifierons les besoins spécifiques de vos
                    cheveux pour établir une routine de soins sur-mesure, facile
                    à intégrer dans votre quotidien. Mon objectif est de vous
                    rendre <strong>autonome et confiante</strong> dans la
                    gestion de votre chevelure.
                  </p>
                </div> */}
              </>
            )}

            {/* <div className='mt-10 p-6 bg-gray-50 rounded-lg border'>
              <h2 className='text-2xl font-bold text-gray-800'>
                Réservez votre coaching personnalisé
              </h2>
              <p className='text-gray-600 mt-2 mb-4'>
                Franchissez le pas vers une chevelure éclatante de santé.
              </p>
              <Button
                asChild
                size='lg'
                className='bg-pink-600 hover:bg-pink-700 text-white'
              >
                <Link href='/reservation'>Je prends rdv</Link>
              </Button>
            </div> */}
            <AppointmentCalendar
              serviceName={serviceData.name}
              basePrice={Number(serviceData.price)}
            />
          </div>
        </div>
      </section>
    )
  }
}
