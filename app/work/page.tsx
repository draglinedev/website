import Link from 'next/link'
export const metadata = { title: 'Work' }
const cases = [
  { slug:'case-1', title:'Case Study One (Placeholder)', summary:'A structured case study placeholder without fabricated metrics.'},
  { slug:'case-2', title:'Case Study Two (Placeholder)', summary:'Outline of problem, approach, outcome with verifiable facts only.'},
]
export default function WorkPage() {
  return (
    <div className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">Selected Work</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {cases.map(c => (
          <Link key={c.slug} href={`/work/${c.slug}`} className="no-underline border rounded-xl p-6 hover:bg-gray-50">
            <div className="font-semibold">{c.title}</div>
            <p className="text-gray-700 mt-2">{c.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
