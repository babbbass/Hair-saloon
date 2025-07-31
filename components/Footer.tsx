import Link from "next/link"

export function Footer() {
  return (
    <footer className='bg-secondary text-secondary-foreground py-12'>
      <div className='container mx-auto px-4 text-center'>
        <p>© {new Date().getFullYear()} Nef Hair Dydy. Tous droits réservés.</p>
        <div className='flex justify-center gap-4 mt-4'>
          <Link href='/mentions-legales' className='text-sm hover:underline'>
            Mentions Légales
          </Link>
          <Link href='/confidentialite' className='text-sm hover:underline'>
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  )
}
