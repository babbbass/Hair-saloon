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
      <section className='py-12 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center'>
          <div className='w-full h-full'>
            <Image
              src='https://www.nefhairdydy.com/wp-content/uploads/2023/10/Dydy-02-683x1024.png'
              alt='Portrait de Dydy, experte en coiffure'
              width={683}
              height={1024}
              className='rounded-lg object-cover w-full h-full shadow-lg'
              priority
            />
          </div>

          <div className='flex flex-col space-y-8'>
            <Image
              src={LOGO_URL}
              alt='Logo NefHairDydy'
              width={250}
              height={63}
              className='object-contain self-start'
            />

            <h1 className='text-4xl lg:text-5xl font-extrabold tracking-tight'>
              Votre Experte
              <br />
              des Textures Africaines
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
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
