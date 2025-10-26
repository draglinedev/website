import { notFound } from 'next/navigation'

const cases: Record<string, {title:string, problem:string, approach:string, outcome:string}> = {
  'case-1': {
    title: 'Case Study One (Placeholder)',
    problem: 'Clear, testable problem statement (to be filled with real data).',
    approach: 'Our approach—architecture, stack, and process (no fake metrics).',
    outcome: 'Verifiable outcomes; if unknown, leave as TBD and request facts.'
  },
  'case-2': {
    title: 'Case Study Two (Placeholder)',
    problem: 'Problem statement for the second case study.',
    approach: 'Describe steps, constraints, and decisions made.',
    outcome: 'Outcomes aligned with facts; no invented numbers.'
  }
}

export default function CasePage({ params }: { params: { slug: string }}) {
  const data = cases[params.slug]
  if (!data) return notFound()
  return (
    <div className="container py-12 prose">
      <h1>{data.title}</h1>
      <h2>Problem</h2>
      <p>{data.problem}</p>
      <h2>Approach</h2>
      <p>{data.approach}</p>
      <h2>Outcome</h2>
      <p>{data.outcome}</p>
    </div>
  )
}
