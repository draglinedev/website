import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
  return files.map(f => ({ slug: f.replace(/\.mdx$/, '') }))
}

export default function BlogPost({ params }: { params: { slug: string }}) {
  const file = path.join(process.cwd(), 'content', 'blog', params.slug + '.mdx')
  if (!fs.existsSync(file)) return notFound()
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)
  return (
    <div className="container py-12 prose">
      <h1>{data.title}</h1>
      <div className="text-sm text-gray-500">{data.date}</div>
      <div className="mt-6">{/* MDX content rendered at build runtime via next-mdx-remote is omitted in this simple starter. */}
        <pre className="whitespace-pre-wrap">{content}</pre>
      </div>
    </div>
  )
}
