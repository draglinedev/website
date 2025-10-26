import Link from 'next/link'

export const metadata = { title: 'Thank You' }

export default function ThankYouPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Thank you!</h1>
      <p className="mt-2 text-gray-700">We received your message and we’ll get back to you shortly.</p>
      <p className="mt-6">
        <Link href="/" className="inline-flex items-center px-4 py-2 rounded-xl border no-underline">Return home</Link>
      </p>
    </div>
  )
}