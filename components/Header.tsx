"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react" // Icônes modernes
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const menuLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Galerie", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='text-2xl font-bold'>
          NEF HAIR DYDY
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6'>
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation with Sheet */}
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right'>
              <nav className='grid gap-6 text-lg font-medium mt-10'>
                {menuLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`transition-colors hover:text-primary ${
                        pathname === link.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
