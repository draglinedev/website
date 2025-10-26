export const metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="container mx-auto px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest uppercase text-black">About</p>
            <h1 className="mt-3 text-4xl/tight font-semibold sm:text-5xl">
              Senior-led engineering focused on clarity, craft, and reliability.
            </h1>
            <p className="mt-5 text-lg text-black">
              Dragline Developers is a lean team partnering with founders and product leaders to
              ship durable software designed to scale, measured by real business outcomes, and
              supported for the long run.
            </p>
          </div>

          {/* Mini stats */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Stat kpi="95%" label="On-time Delivery" />
            <Stat kpi="99.9%" label="Uptime Targets" />
            <Stat kpi="∞" label="Partnership Mindset" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">What We Stand For</h2>
        <p className="mt-3 max-w-3xl text-black">
          We keep teams small, communication crisp, and quality non-negotiable. These values guide
          every engagement.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Clarity"
            body="Transparent planning, honest timelines, and documentation that reduces noise. From roadmap to release, you always know the why and the what."
            icon={
              <IconOutline
                d="M4 12h16M4 6h16M4 18h16"
                ariaLabel="menu lines"
              />
            }
          />
          <Card
            title="Craft"
            body="Clean, maintainable code and accessible interfaces. We combine modern tooling with timeless engineering discipline."
            icon={
              <IconOutline
                d="M12 6v12m6-6H6"
                ariaLabel="plus sign"
              />
            }
          />
          <Card
            title="Reliability"
            body="Predictable delivery, proactive maintenance, and long-term support. Stability and performance are built in, not bolted on."
            icon={
              <IconOutline
                d="M4 12l4 4 8-8"
                ariaLabel="check"
              />
            }
          />
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-zinc-800/60">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ApproachItem
              title="Lean & Senior-Led"
              desc="Small teams of experienced engineers, no heavy hand-offs, no bloated org charts."
            />
            <ApproachItem
              title="Full Lifecycle Delivery"
              desc="Product, design, backend, frontend, and infra. One team accountable from concept to run-time."
            />
            <ApproachItem
              title="Scalable & Future-Proof"
              desc="Architected for growth: observability, testing, and DX baked into the stack."
            />
            <ApproachItem
              title="Client as Partner"
              desc="We work with you, not just for you, treating your outcomes as our KPI."
            />
          </div>
        </div>
      </section>

      {/* Philosophy / Promise */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Our Promise</h2>
          <p className="mt-4 text-black">
            We don’t aim to ship the most features—we aim to ship the right ones, built right.
            Our philosophy is simple: build once, build well, and support it for the long term.
            That’s how we create systems that last and relationships that matter.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-white px-5 py-3 text-sm font-medium hover:bg-red-900 hover:text-white transition"
          >
            Start a conversation
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="opacity-80"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}

/* ---------- Small presentational components (no external deps) ---------- */

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-blue-800 p-5">
      <div className="text-3xl font-semibold text-white">{kpi}</div>
      <div className="mt-1 text-sm text-white">{label}</div>
    </div>
  )
}

function Card({
  title,
  body,
  icon,
}: {
  title: string
  body: string
  icon?: React.ReactNode
}) {
  return (
    <div className="group rounded-2xl border border-zinc-800 p-6 transition hover:border-zinc-700">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-zinc-800 p-2 text-black">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="mt-2 text-sm text-black">{body}</p>
        </div>
      </div>
    </div>
  )
}

function ApproachItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h3 className="text-base font-medium">{title}</h3>
      <p className="mt-2 text-sm text-black">{desc}</p>
    </div>
  )
}

function IconOutline({
  d,
  ariaLabel,
}: {
  d: string
  ariaLabel: string
}) {
  return (
    <svg
      aria-label={ariaLabel}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      className="block"
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
