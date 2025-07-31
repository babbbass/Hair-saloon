import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Prendre rendez-vous</h2>
            <p className='max-w-2xl mx-auto text-muted-foreground'>
              Contactez-nous pour toute question ou pour réserver votre
              prochaine séance.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-bold mb-2 flex items-center gap-3'>
                  <i className='fas fa-map-marker-alt'></i> Adresse
                </h3>
                <p className='text-muted-foreground'>
                  123 Rue du Cheveu Brillant
                  <br />
                  75000 Paris, France
                </p>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2 flex items-center gap-3'>
                  <i className='fas fa-phone'></i> Téléphone
                </h3>
                <p className='text-muted-foreground'>+33 1 23 45 67 89</p>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2 flex items-center gap-3'>
                  <i className='fas fa-clock'></i> Horaires
                </h3>
                <p className='text-muted-foreground'>
                  Lundi - Samedi: 9h - 19h
                  <br />
                  Dimanche: Fermé
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className='space-y-4'>
              <div className='grid w-full items-center gap-1.5'>
                <Label htmlFor='name'>Nom complet</Label>
                <Input type='text' id='name' placeholder='Votre nom' />
              </div>
              <div className='grid w-full items-center gap-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='email'
                  id='email'
                  placeholder='email@example.com'
                />
              </div>
              <div className='grid w-full items-center gap-1.5'>
                <Label htmlFor='message'>Votre message</Label>
                <Textarea
                  id='message'
                  placeholder='Demande de rendez-vous pour une coloration...'
                />
              </div>
              <Button type='submit' className='w-full'>
                Envoyer la demande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
