import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Nef Hair Dydy",
  description:
    "Consultez notre politique de confidentialité pour comprendre comment nous collectons, utilisons et protégeons vos données personnelles.",
}

export default function Confidentialte() {
  return (
    <section className='pb-24 bg-background w-full'>
      <div className='mx-auto px-4 w-full'>
        <h1 className='text-4xl bg-pink-200 font-bold mb-8 text-center py-20 w-full'>
          Politique de Confidentialité
        </h1>

        {/* Introduction */}
        <p className='text-muted-foreground text-center mb-12'>
          Dernière mise à jour : 31 juillet 2025.
        </p>

        <div className='container mx-auto space-y-8 text-lg leading-relaxed'>
          <p>
            {`Cette Politique de Confidentialité décrit nos politiques et
            procédures sur la collecte, l'utilisation et la divulgation de vos
            informations lorsque vous utilisez notre service. Elle vous informe
            également de vos droits en matière de confidentialité et de la
            manière dont la loi vous protège.`}
          </p>

          <div className='pt-4'>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              1. Collecte et Utilisation des Données
            </h2>
            <p className='mb-4'>
              {`Nous collectons plusieurs types d'informations dans le but de
              fournir et d'améliorer notre service.`}
            </p>
            <h3 className='text-xl font-semibold mb-2'>
              Types de données collectées :
            </h3>
            <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
              <li>
                <strong>Données Personnelles :</strong> Lors de la prise de
                rendez-vous ou via notre formulaire de contact, nous pouvons
                vous demander de nous fournir certaines informations
                personnelles, notamment : votre nom, votre adresse e-mail et
                votre numéro de téléphone.
              </li>
              <li>
                <strong>{`Données d'Utilisation :`}</strong> Nous pouvons
                collecter des informations sur la manière dont le site est
                accédé et utilisé (par exemple, les pages visitées, le temps
                passé sur les pages).
              </li>
            </ul>
          </div>

          <div className='pt-4'>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              2. Utilisation de vos informations
            </h2>
            <p className='mb-4'>
              Nous utilisons les informations que nous collectons pour diverses
              raisons :
            </p>
            <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
              <li>
                Pour fournir et maintenir notre service (gestion des
                rendez-vous).
              </li>
              <li>Pour vous contacter et répondre à vos demandes.</li>
              <li>
                Pour vous informer des changements apportés à notre service.
              </li>
              <li>Pour améliorer notre site web et nos offres.</li>
            </ul>
          </div>

          <div className='pt-4'>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              3. Partage des informations à des tiers
            </h2>
            <p>
              {`Nous ne vendons, n'échangeons et ne transférons pas vos
              informations personnelles identifiables à des tiers. Cela n'inclut
              pas les tiers de confiance qui nous aident à exploiter notre site
              Web ou à mener nos affaires, tant que ces parties conviennent de
              garder ces informations confidentielles.`}
            </p>
          </div>

          <div className='pt-4'>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              4. Sécurité des données
            </h2>
            <p>
              {`La sécurité de vos données est importante pour nous. Nous mettons
              en œuvre une variété de mesures de sécurité pour préserver la
              sécurité de vos informations personnelles. Cependant, aucune
              méthode de transmission sur Internet ou méthode de stockage
              électronique n'est sûre à 100%.`}
            </p>
          </div>

          <div className='pt-4'>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              5. Cookies
            </h2>
            <p>
              {`Notre site peut utiliser des "cookies" pour améliorer l'expérience
              utilisateur. Le navigateur Web de l'utilisateur place des cookies
              sur son disque dur à des fins d'archivage et parfois pour suivre
              des informations à leur sujet. L'utilisateur peut choisir de
              configurer son navigateur pour refuser les cookies.`}
            </p>
          </div>

          <div className='pt-4'>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              6. Consentement
            </h2>
            <p>
              En utilisant notre site, vous consentez à notre politique de
              confidentialité.
            </p>
          </div>

          <div className='pt-4'>
            <h2 className='text-2xl font-semibold mb-4 border-b pb-2'>
              7. Nous contacter
            </h2>
            <p>
              {`Si vous avez des questions concernant cette politique de
              confidentialité, vous pouvez nous contacter à l'adresse suivante :`}
              <strong className='block mt-2'>contact@nefhairdydy.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
