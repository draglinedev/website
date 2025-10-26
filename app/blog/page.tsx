import Link from 'next/link'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  readingTime: string
}

function getPosts(): Post[] {
  const dir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title ?? 'Untitled',
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      readingTime: readingTime(content).text
    }
  }).sort((a,b) => (a.date < b.date ? 1 : -1))
}

export const metadata = { title: 'Blog' }

export default function BlogPage() {
  const posts = getPosts()
  return (
    <div className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">Insights & Updates</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="no-underline border rounded-xl p-6 hover:bg-gray-50">
            <div className="text-sm text-gray-500">{p.date} · {p.readingTime}</div>
            <div className="font-semibold mt-1">{p.title}</div>
            <p className="text-gray-700 mt-2">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
