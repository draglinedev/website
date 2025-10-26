export const metadata = {
  title: 'Services'
}

export default function ServicesPage() {
  const items = [
    { id:'fullstack', title:'Full‑stack Apps', bullets:[
      'Product discovery, UX, UI, and architecture',
      'React, Next.js, TypeScript, Node.js, PostgreSQL',
      'Payment flows, authentication, role‑based access'
    ]},
    { id:'api', title:'APIs & Integrations', bullets:[
      'Design secure REST/GraphQL APIs with rate‑limits',
      'Webhook pipelines and 3rd‑party integrations',
      'Testing, versioning, and documentation'
    ]},
    { id:'cloud', title:'Cloud & DevOps', bullets:[
      'CI/CD pipelines, IaC, Docker containers',
      'Cloud ops on Vercel/Netlify/AWS/Fly/Render',
      'Monitoring, logging, tracing, SLOs'
    ]}
  ]
  return (
    <div className="container py-12 space-y-10">
      <h1 className="text-3xl font-bold">Services</h1>
      {items.map(s => (
        <section id={s.id} key={s.id} className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">{s.title}</h2>
          <ul className="list-disc ml-6 mt-3 text-gray-700">
            {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </section>
      ))}
    </div>
  )
}
