/*
 * 21st.dev component provenance — Coachella Valley Classic Cars
 * Query:        "sticky minimal navbar"
 * Component:    "Navbar" (Dalim) — liquid-glass-button dep
 * Fetched:      2026-05-16
 * Borrowed:     transparent→solid-on-scroll pattern. nav is fixed, full-bleed;
 *               after scrollY>50 it shrinks max-width, gains bg-background/50 +
 *               backdrop-blur-lg + border + rounded-2xl. Mobile = burger → sheet.
 *               Translated to vanilla HTML + Tailwind CDN (scroll listener toggles
 *               a .is-scrolled class on <header>). Also took the "AnimatedNavLink"
 *               vertical text-swap hover from the sibling "Mini Navbar" result.
 */
'use client'
import Link from 'next/link'
import { Equal, X } from 'lucide-react'
import { Button } from '@/components/ui/liquid-glass-button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
  { name: 'Fleet', href: '#fleet' },
  { name: 'Story', href: '#story' },
  { name: 'Shoots', href: '#shoots' },
  { name: 'Contact', href: '#contact' },
]

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav data-state={menuState && 'active'} className="fixed left-0 w-full z-20 px-2">
        <div className={cn(
          'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
          isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
        )}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-2 lg:gap-0">
            <Link href="/" aria-label="home" className="flex items-center gap-2">
              <span className="font-semibold tracking-tighter text-xl">CV Classic Cars</span>
            </Link>
            <button onClick={() => setMenuState(!menuState)} aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden">
              <Equal /><X />
            </button>
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex lg:w-fit lg:gap-6">
              <Button asChild size="sm"><Link href="#contact"><span>Reserve</span></Link></Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
