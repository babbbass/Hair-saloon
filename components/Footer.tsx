import Link from "next/link"
import { NewsletterSignup } from "@/components/NewsletterSignup"

export function Footer() {
  return (
    <footer className='bg-black text-white pb-12 md:px-20 mt-20 '>
      <NewsletterSignup />
      <div className='container mx-auto px-4 text-center text-xs sm:text-base'>
        <p className='flex justify-center items-center '>
          © {new Date().getFullYear()}{" "}
          <span className='uppercase mx-2 font-bold'>
            <span className=' text-red-700'>Nef</span>
            <span className=' text-green-700'>HairDydy</span>
          </span>
          Tous droits réservés.
        </p>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <Link
            href='/mentions-legales'
            className='hover:underline hover:text-red-600 transition-all duration-300'
          >
            Mentions Légales
          </Link>
          <Link
            href='/a-propos'
            className='hover:underline hover:text-red-600 transition-all duration-300'
          >
            Qui sommes-nous ?
          </Link>
          <Link
            href='/confidentialite'
            className='hover:underline hover:text-red-600 transition-all duration-300'
          >
            Politique de confidentialité
          </Link>
          <Link
            href='/contact'
            className='hover:underline hover:text-red-600 transition-all duration-300'
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </footer>
  )
}
