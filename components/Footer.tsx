import Link from 'next/link'
import { site } from '@/lib/metadata'



export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t mt-16 bg-white-600/70 backdrop-blur supports-[backdrop-filter]:bg-white-600/90 text-black">
      <div className="container py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <Link href="/" className="font-extrabold tracking-tight text-xl flex items-center">
            <img src="/logo.png" alt="Dragline Developers logo" width={35} height={35} />Dragline
          </Link>
          <p className="mt-2 text-sm text-white">{site.tagline}</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link className="no-underline" href="/about">About</Link></li>
            <li><Link className="no-underline" href="/careers">Careers</Link></li>
            <li><Link className="no-underline" href="/blog">Blog</Link></li>
          </ul>
        </div>
       
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <ul className="space-y-2 text-sm">
            <li><a className="no-underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></li>
            <li><a className="no-underline" href={site.socials.x}>X</a></li>
            <li><a className="no-underline" href={site.socials.linkedin}>LinkedIn</a></li>
            <li><a className="no-underline" href={site.socials.instagram}>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-black">&copy; {year} Dragline Developers. All rights reserved.</div>
      </div>
    </footer>
  )
}
