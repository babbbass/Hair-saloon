import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type ServiceCardProps = {
  href: string
  imageUrl: string
  imageAlt: string
  title: string
  description: string
  price: string
}

export function ServiceCard({
  href,
  imageUrl,
  imageAlt,
  title,
  description,
  price,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className='group block'
      aria-label={`Voir les détails pour ${title}`}
    >
      <Card className='flex flex-col sm:flex-row items-center p-4 transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/50 overflow-hidden'>
        <div className='relative w-full h-48 sm:w-32 sm:h-32 md:w-40 md:h-40 flex-shrink-0 mb-4 sm:mb-0 sm:mr-6'>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes='(max-width: 640px) 100vw, 160px'
            className='rounded-md object-cover'
          />
        </div>

        <div className='flex-grow text-center sm:text-left'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <p className='text-sm text-muted-foreground mt-1'>{description}</p>
        </div>

        <div className='flex items-center mt-4 sm:mt-0 sm:ml-6 flex-shrink-0'>
          <Badge variant='secondary' className='text-xl font-bold py-2 px-4'>
            {price}
          </Badge>
          <ArrowRight className='h-6 w-6 text-muted-foreground ml-6 transition-transform duration-300 group-hover:translate-x-1' />
        </div>
      </Card>
    </Link>
  )
}
