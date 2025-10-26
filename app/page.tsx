import Hero from '@/components/Hero'

export default function Page() {
  return (
    <div>
      <Hero />
      <section className="container py-12 grid md:grid-cols-3 gap-6">
        {[
          { id:'fullstack', title:'Full‑stack Apps', desc:'Product design to production; React, Node, Postgres, and more.'},
          { id:'api', title:'APIs & Integrations', desc:'Secure REST/GraphQL APIs, third‑party integrations, webhooks.'},
          { id:'cloud', title:'Cloud & DevOps', desc:'CI/CD, Docker, Kubernetes, observability, and SRE practices.'},
        ].map(c => (
          <div key={c.id} className="border rounded-xl p-6">
            <div className="font-semibold">{c.title}</div>
            <p className="text-gray-600 mt-2">{c.desc}</p>
            <a className="inline-block mt-4 no-underline" href={`/services#${c.id}`}>Learn more →</a>
          </div>
        ))}
      </section>
      <section className="container py-12">
        <div className="rounded-xl border p-6 md:p-10 bg-gradient-to-br from-white to-gray-50">
          <h2 className="text-2xl font-bold">Ready to build?</h2>
          <p className="text-gray-700 mt-2 max-w-2xl">Tell us your goals and constraints. We’ll respond with a lean plan, timeline, and budget ranges.</p>
          <a href="/contact" className="inline-flex items-center mt-4 px-4 py-2 rounded-xl boarder bg-red-900 text-white no-underline hover:bg-red-800">Start a project</a>
        </div>
      </section>
    </div>
  )
}
