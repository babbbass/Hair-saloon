import Link from "next/link"
import { NewsletterSignup } from "@/components/NewsletterSignup"
import { LOGO_URL } from "@/lib/constants"
import Image from "next/image"

export function Footer() {
  return (
    <footer className='bg-black text-white pb-12 md:px-20'>
      <NewsletterSignup />
      <div className='container mx-auto px-4 text-center'>
        <p className='flex justify-center items-end'>
          © {new Date().getFullYear()}{" "}
          <Image
            src={LOGO_URL}
            alt='Logo NefHairDydy'
            width={150}
            height={13}
            className='inline-block mx-2 mb-1'
          />
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
