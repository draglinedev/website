import Link from 'next/link'
import Image from 'next/image'
export default function Hero() {
  return (
    <section className="relative min-h-[420px] sm:min-h-[520px]">
      <Image src="/assets/4.png" alt="" priority fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="container relative z-10 py-16 md:py-24 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">Build software your business can rely on.</h1>
        <p className="mt-4 text-lg text-white/80 max-w-2xl">We help founders and teams plan, design, and ship production grade apps with clean code, clear communication, and predictable delivery.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-xl border border-white/70 text-white no-underline hover:bg-red-900">Start a project</Link>
          {/* <Link href="/work" className="inline-flex items-center px-4 py-2 rounded-xl border border-white/70 text-white no-underline hover:bg-white hover:text-black">See our work</Link> */}
        </div>
      </div>
    </section>
  )
}
