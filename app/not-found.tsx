export default function NotFound() {
  return (
    <div className="container py-20">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-gray-700">The page you requested does not exist.</p>
      <a href="/" className="inline-block mt-4 no-underline">Go home →</a>
    </div>
  )
}
