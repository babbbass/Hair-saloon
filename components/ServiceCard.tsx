import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type ServiceCardProps = {
  href: string
  imageUrl: string
  imageAlt: string
  title: string
  price: string
  description: string
}

export function ServiceCard({
  href,
  imageUrl,
  imageAlt,
  title,
  price,
  description,
}: ServiceCardProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className='group block h-full'>
        <Card className='flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1'>
          <div className='relative w-full aspect-[3/4] overflow-hidden'>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            />
          </div>

          <div className='flex flex-grow flex-col p-4'>
            <div className='flex-grow'>
              <h4 className='text-lg font-bold leading-snug text-gray-900'>
                {title}
              </h4>
              <p className='mt-1 text-sm text-gray-600'>{description}</p>
            </div>

            <div className='mt-4 flex items-baseline justify-between border-t pt-4'>
              <Badge
                variant='secondary'
                className='text-xl font-bold py-2 px-4 bg-red-600 text-slate-50 rounded-2xl'
              >
                {price}
              </Badge>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  )
}
