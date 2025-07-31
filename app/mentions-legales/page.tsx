import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales - Nef Hair Dydy",
  description:
    "Consultez les mentions légales de NefHairDydy, incluant les informations sur l'éditeur du site et l'hébergeur.",
}

export default function MentionsLegales() {
  return (
    <section className='pb-24 w-full bg-background'>
      <div className=' w-full mx-auto max-w-6xl min-w-full'>
        <h1 className='text-4xl font-bold mb-12 py-20 text-center bg-pink-200 w-full'>
          Mentions Légales
        </h1>

        <div className='container px-4 space-y-10 text-lg leading-relaxed  mx-auto'>
          <div>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              1. Éditeur du site
            </h2>
            <div className='space-y-2 text-muted-foreground'>
              <p>
                <strong>{`Nom de l'entreprise :`}</strong> [Nom de votre
                entreprise ou votre nom complet]
              </p>
              <p>
                <strong>Adresse :</strong> [Votre adresse complète]
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a
                  href='mailto:contact@nefhairdydy.com'
                  className='text-primary hover:underline'
                >
                  contact@nefhairdydy.com
                </a>
              </p>
              <p>
                <strong>Téléphone :</strong> [Votre numéro de téléphone]
              </p>
              <p>
                <strong>N° SIRET :</strong> [Votre numéro de SIRET]
              </p>
              <p>
                <strong>Responsable de la publication :</strong> [Votre nom
                complet]
              </p>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              2. Hébergement
            </h2>
            <div className='space-y-2 text-muted-foreground'>
              <p>Ce site est hébergé par :</p>
              <p>
                <strong>{`Nom de l'hébergeur :`}</strong> [Ex: Vercel, Netlify,
                OVH...]
              </p>
              <p>
                <strong>{`Adresse de l'hébergeur :`}</strong> [
                {`Adresse de l'hébergeur`}]
              </p>
              <p>
                <strong>Site web :</strong> [{`Site web de l'hébergeur`}]
              </p>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              3. Propriété Intellectuelle
            </h2>
            <p className='text-muted-foreground'>
              {`L'ensemble de ce site, y compris la structure, les textes, les images, les logos et tout autre élément le composant, est la propriété exclusive de [Nom de votre entreprise]. Toute représentation totale ou partielle de ce site, par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.`}
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              4. Limitation de responsabilité
            </h2>
            <p className='text-muted-foreground'>
              {`[Nom de votre entreprise] ne saurait être tenu pour responsable des erreurs rencontrées sur le site, problèmes techniques, interprétation des informations publiées et conséquences de leur utilisation. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. Le site peut contenir des liens hypertextes vers d’autres sites, mais nous ne saurions être responsables du contenu de ces sites externes.`}
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              5. Droit applicable
            </h2>
            <p className='text-muted-foreground'>
              Le présent site et ses mentions légales sont soumis au droit
              français. En cas de litige, les tribunaux français seront seuls
              compétents.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
