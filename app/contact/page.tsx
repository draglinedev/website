export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-700 mt-2">Tell us briefly about your project. We’ll reply with next steps.</p>
      <form action="/api/contact" method="post" className="mt-6 max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input required name="name" className="mt-1 w-full border rounded-xl px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input required type="email" name="email" className="mt-1 w-full border rounded-xl px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea required name="message" rows={5} className="mt-1 w-full border rounded-xl px-3 py-2" />
        </div>
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
        <button className="inline-flex items-center px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800">Send</button>
      </form>
    </div>
  )
}
