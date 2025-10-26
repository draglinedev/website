'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import Image from 'next/image'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  // { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  // { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b bg-white-600 backdrop-blur supports-[backdrop-filter]:bg-white-600/90 text-black">
      <div className="container flex items-center justify-between py-4">
        <Link  href="/" className="font-extrabold tracking-tight text-xl no-underline flex items-center">
          <Image src="/logo.png" alt="Dragline Developers logo" width={35} height={35} priority />Dragline
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('text-sm no-underline hover:text-[red] transition-colors', pathname===item.href && 'text-red-900 font-bold')}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden inline-flex items-center px-3 py-2 rounded-xl border text-sm"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <Link href="/contact" className="inline-flex items-center px-3 py-2 rounded-xl bg-red-900 text-white no-underline hover:bg-red-800 focus-visible:ring-brand-400">Start a project</Link>
      </div>
      {open && (
        <div id="mobile-nav" className="md:hidden border-t bg-white text-black">
          <div className="container py-3 flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn('text-sm no-underline py-2', pathname===item.href && 'font-bold')}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
