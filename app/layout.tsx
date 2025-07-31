import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Nef Hair Dydy - L'art du cheveu sur mesure",
  description: "Salon de coiffure moderne utilisant les meilleures techniques.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head></head>
      <body className={montserrat.className + " flex flex-col min-h-screen"}>
        <Header />
        <main className='flex justify-center items-center pt-16 flex-1 w-full'>
          {" "}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
