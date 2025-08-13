"use client"

import { useState } from "react"
import Image from "next/image"
import { PlayCircle } from "lucide-react"
import { LOGO_URL } from "@/lib/constants"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const videos = {
  presentation: {
    thumbnail:
      "https://www.nefhairdydy.com/wp-content/uploads/2023/10/nefhairdydy-new-video-presentation-2025.png",
    url: "https://www.nefhairdydy.com/wp-content/uploads/medias/nefhairdydy-presentation.mp4",
    title: "Découvrir la présentation",
  },
  teaser: {
    thumbnail:
      "https://www.nefhairdydy.com/wp-content/uploads/2023/10/nefhairdydy-video-presentation-2023.png",
    url: "https://www.nefhairdydy.com/wp-content/uploads/medias/nefhairdydy-teaser.mp4",
    title: "Visionner le teaser",
  },
}

function VideoPreview({
  thumbnail,
  title,
  onClick,
}: {
  thumbnail: string
  title: string
  onClick: () => void
}) {
  return (
    <div
      className='relative rounded-lg overflow-hidden cursor-pointer group'
      onClick={onClick}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src={thumbnail}
          alt={`Aperçu pour ${title}`}
          fill
          className='object-cover'
        />
      </AspectRatio>
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 transition-all duration-300 group-hover:from-black/80' />
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
        <PlayCircle className='h-12 w-12 text-white/80 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-white' />
        <h3 className='mt-2 font-semibold tracking-wide'>{title}</h3>
      </div>
    </div>
  )
}

export function HeroSection() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  return (
    <>
      <section className='py-12 md:py-20 w-full bg-gray-100 md:bg-transparent'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-1 overflow-hidden items-center justify-center'>
          <div className='relative w-full h-80 md:h-200'>
            <Image
              src={LOGO_URL}
              alt='Logo NefHairDydy'
              width={150}
              height={63}
              className='md:object-contain md:self-start ml-2 md:hidden'
            />
            <div className='relative w-full h-full left-[21%] md:left-0'>
              <Image
                src='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Dydy-02-683x1024.png'
                alt='Portrait de Dydy, experte en coiffure'
                fill
                className='object-contain'
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </div>
          <h1 className='italic bg-green-900 p-4 text-2xl lg:text-5xl font-semibold tracking-tight text-slate-50 md:text-primary w-5/6 mx-auto rounded-2xl text-center z-10 md:hidden'>
            Votre Experte des Textures Africaines
          </h1>

          <div className='hidden md:flex flex-col space-y-4 justify-center '>
            <Image
              src={LOGO_URL}
              alt='Logo NefHairDydy'
              width={300}
              height={63}
              className='md:object-contain hidden md:flex px-1'
            />

            <h1 className='italic text-4xl font-semibold tracking-tight text-green-800 hidden md:flex'>
              Votre Experte des Textures Africaines
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14'>
              <VideoPreview
                thumbnail={videos.presentation.thumbnail}
                title={videos.presentation.title}
                onClick={() => setVideoUrl(videos.presentation.url)}
              />
              <VideoPreview
                thumbnail={videos.teaser.thumbnail}
                title={videos.teaser.title}
                onClick={() => setVideoUrl(videos.teaser.url)}
              />
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!videoUrl} onOpenChange={() => setVideoUrl(null)}>
        <DialogContent className='max-w-4xl w-full p-0 bg-black border-0'>
          <AspectRatio ratio={16 / 9}>
            {videoUrl && (
              <video src={videoUrl} className='w-full h-full' controls autoPlay>
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            )}
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </>
  )
}
