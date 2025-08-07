import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center w-full'>
        <Image
          src='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e'
          alt="Arrière-plan d'un salon de coiffure"
          fill
          className='object-cover -z-10'
          priority
        />
        <div className='bg-background/90 p-8 rounded-lg shadow-lg text-center max-w-2xl mx-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            {`L'art du cheveu sur mesure`}
          </h1>
          <p className='text-lg text-muted-foreground mb-6'>
            Découvrez une expérience capillaire unique et personnalisée.
          </p>
          <Button asChild size='lg'>
            <Link href='/contact'>Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 bg-secondary w-full'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-2'>
              Ce que nos clients disent
            </h2>
            <p className='text-muted-foreground'>
              {`Des avis qui parlent d'eux-mêmes.`}
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card>
              <CardHeader>
                <CardTitle>Sophie L.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  {`Je suis cliente depuis 3 ans et je ne vais nulle part
                  ailleurs. Leur expertise en coloration est incomparable.`}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
