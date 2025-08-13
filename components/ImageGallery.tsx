"use client"

import * as React from "react"
import Image from "next/image"
// import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type GalleryItem = {
  id: number
  imageUrl: string
  title: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl:
      "https://www.nefhairdydy.com/wp-content/uploads/2023/10/Photos-Mariage-NefHairDydy-9.jpg",
    title: "Chignon Haut Élégant",
    category: "Coiffure Mariage",
  },
  {
    id: 2,
    imageUrl:
      "https://www.nefhairdydy.com/wp-content/uploads/2023/10/Photos-Mariage-NefHairDydy-4.jpg",
    title: "Tresse Bohème",
    category: "Coiffure Mariage",
  },
  {
    id: 3,
    imageUrl:
      "https://www.nefhairdydy.com/wp-content/uploads/2023/10/Photos-Mariage-NefHairDydy-3.jpg",
    title: "Ondulations Naturelles",
    category: "Coiffure Mariage",
  },
  {
    id: 4,
    imageUrl:
      "https://www.nefhairdydy.com/wp-content/uploads/2023/10/Photos-Mariage-NefHairDydy-7.jpg",
    title: "Couronne de Fleurs",
    category: "Coiffure Mariage",
  },
  {
    id: 5,
    imageUrl:
      "https://www.nefhairdydy.com/wp-content/uploads/2023/10/Photos-Mariage-NefHairDydy-6.jpg",
    title: "Accessoires Perlés",
    category: "Coiffure Mariage",
  },
  {
    id: 6,
    imageUrl:
      "https://www.nefhairdydy.com/wp-content/uploads/2023/10/Photos-Mariage-NefHairDydy.jpg",
    title: "Voile Traditionnel",
    category: "Coiffure Mariage",
  },
]

export function ImageGallery() {
  // const plugin = React.useRef(
  //   Autoplay({ delay: 3000, stopOnInteraction: true })
  // )

  return (
    <div className='w-full py-16 pb-0 overflow-x-hidden mt-6'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-titlecolor'>
          Nos Réalisations
        </h2>
        <p className='text-muted-foreground mt-2'>
          Découvrez un aperçu de notre savoir-faire.
        </p>
        <div className='inline-block w-24 h-1 bg-primary mt-4 rounded-full'></div>
      </div>

      <Carousel
        // plugins={[plugin.current]}
        className='flex flex-col'
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {galleryItems.map((item) => (
            <CarouselItem
              key={item.id}
              className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
            >
              <div className='p-1'>
                <Card className='overflow-hidden group'>
                  <CardContent className='relative flex aspect-[3/4] items-center justify-center p-0'>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4'>
                      <h3 className='text-white text-lg font-semibold translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                        {item.title}
                      </h3>
                      <p className='text-white/80 text-sm translate-y-4 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100'>
                        {item.category}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex justify-center sm:gap-20 gap-10 sm:p-4 m-6'>
          <CarouselPrevious className='static flex cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-700 size-10 sm:size-12 text-lg border border-green-700' />
          <CarouselNext className='static flex cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-700 size-10 sm:size-12 text-lg border border-green-700' />
        </div>
      </Carousel>
    </div>
  )
}
