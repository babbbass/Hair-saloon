import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <div className='container mx-auto px-4 py-12 md:py-20'>
      <div className='w-full'>
        <div className='grid grid-cols-2 md:grid-cols-4 h-auto md:h-[350px] lg:h-[450px] gap-1'>
          <div className='relative h-64 md:h-auto overflow-hidden'>
            <Image
              src='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-13-1024x683.jpg'
              alt="Description de l'image 1"
              fill
              style={{ objectFit: "cover" }}
              className='hover:scale-105 transition-transform duration-300 ease-in-out'
            />
          </div>
          <div className='relative h-64 md:h-auto overflow-hidden'>
            <Image
              src='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-5-683x1024.jpg'
              alt="Description de l'image 2"
              fill
              style={{ objectFit: "cover" }}
              className='hover:scale-105 transition-transform duration-300 ease-in-out'
            />
          </div>
          <div className='relative h-64 md:h-auto overflow-hidden'>
            <Image
              src='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-1.jpg'
              alt="Description de l'image 3"
              fill
              style={{ objectFit: "cover" }}
              className='hover:scale-105 transition-transform duration-300 ease-in-out'
            />
          </div>
          <div className='relative h-64 md:h-auto overflow-hidden'>
            <Image
              src='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Modele-Coupes-NefHairDydy-24-683x1024.jpg'
              alt="Description de l'image 4"
              fill
              style={{ objectFit: "cover" }}
              className='hover:scale-105 transition-transform duration-300 ease-in-out'
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-12'>
        <div className='space-y-8'>
          <div>
            <h1 className='text-4xl font-bold tracking-tight text-titlecolor'>
              Contactez-nous
            </h1>
            <p className='text-muted-foreground mt-2 text-lg'>
              {`Une question, une demande de rendez-vous ? N'hésitez pas à nous
              contacter via ce formulaire ou directement avec nos coordonnées.`}
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold text-green-700'>
              Nos Coordonnées
            </h2>
            <div className='flex items-center space-x-4'>
              <Phone className='h-6 w-6 text-primary' />
              <a href='tel:+33XXXXXXXXX' className='text-lg hover:underline'>
                +33 6 96 96 92 78
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <Mail className='h-6 w-6 text-primary' />
              <a
                href='mailto:contact@exemple.com'
                className='text-lg hover:underline'
              >
                contact@exemple.com
              </a>
            </div>
            <div className='flex items-start space-x-4'>
              <MapPin className='h-6 w-6 text-primary mt-1' />
              <p className='text-lg'>
                123 Rue de la Beauté
                <br />
                75000 Paris, France
              </p>
            </div>
          </div>

          {/* Google Maps*/}
          {/* <div className="h-64 w-full bg-secondary rounded-lg">
             <iframe 
              src="https://www.google.com/maps/embed?pb=..."
              width="100%" 
              height="100%" 
              style={{ border:0 }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe> 
          </div> */}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl'>
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label
                      htmlFor='name'
                      className='text-sm font-medium leading-none'
                    >
                      Nom
                    </label>
                    <Input id='name' placeholder='Votre nom complet' required />
                  </div>
                  <div className='space-y-2'>
                    <label
                      htmlFor='email'
                      className='text-sm font-medium leading-none'
                    >
                      Email
                    </label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='votre@email.com'
                      required
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='subject'
                    className='text-sm font-medium leading-none'
                  >
                    Sujet
                  </label>
                  <Input
                    id='subject'
                    placeholder='Sujet de votre message'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='message'
                    className='text-sm font-medium leading-none'
                  >
                    Message
                  </label>
                  <Textarea
                    id='message'
                    placeholder='Tapez votre message ici...'
                    className='min-h-[150px]'
                    required
                  />
                </div>

                <Button type='submit' className='w-full bg-green-700'>
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
