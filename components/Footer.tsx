import Link from "next/link"
import { NewsletterSignup } from "@/components/NewsletterSignup"

export function Footer() {
  return (
    <footer className='bg-black text-white pb-12 md:px-20'>
      <NewsletterSignup />
      <div className='container mx-auto px-4 text-center'>
        <p>
          © {new Date().getFullYear()}{" "}
          <span className='uppercase font-semibold'>
            <span className='text-red-700'>NEF</span>
            <span className='text-green-800'>HAIRDYDY</span>
          </span>{" "}
          Tous droits réservés.
        </p>
        <div className='flex justify-center gap-4 mt-4'>
          <Link
            href='/mentions-legales'
            className='text-sm hover:underline hover:text-red-600'
          >
            Mentions Légales
          </Link>
          <Link
            href='/confidentialite'
            className='text-sm hover:underline hover:text-red-600'
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  )
}
