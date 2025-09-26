import { Helmet } from 'react-helmet-async'

import { Layout } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'

const leadership = [
  {
    name: 'Sana Thakur',
    title: 'Chief Executive Officer',
    bio: 'Former head of platform engineering at multiple unicorns. Leads transformation programmes that align product, engineering, and commercial teams.',
  },
  {
    name: 'Elias Mora',
    title: 'Chief Technology Officer',
    bio: 'Architected high-scale systems in fintech and climate tech. Sets technical vision and ensures every build is resilient and observable.',
  },
  {
    name: 'Hannah Lee',
    title: 'Head of Delivery',
    bio: 'Drives pod operations across three continents with a focus on inclusive processes, velocity, and measurable outcomes.',
  },
]

const values = [
  {
    title: 'Systems thinking over silver bullets',
    copy: 'We design holistically across people, process, and technology so every solution can evolve as fast as the problem space.',
  },
  {
    title: 'Transparent partnerships',
    copy: 'Shared dashboards, co-created roadmaps, and radical candour keep every stakeholder aligned and empowered.',
  },
  {
    title: 'Bias for learning',
    copy: 'From discovery labs to post-release rituals, we constantly test hypotheses and fold insights back into the roadmap.',
  },
  {
    title: 'Security as a default',
    copy: 'We embed threat modelling, compliance, and resilience patterns from the first sprint so nothing slows you down later.',
  },
]

const stats = [
  { label: 'Distributed experts', value: '120+' },
  { label: 'Enterprise programmes delivered', value: '64' },
  { label: 'Time zones covered', value: '8' },
  { label: 'Average partnership length', value: '3.4 yrs' },
]

function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About Intovah</title>
        <meta
          name="description"
          content="Meet the global team engineering future-ready platforms, data products, and AI capabilities at Intovah."
        />
      </Helmet>

      <div className="flex flex-col gap-24 pb-24 pt-16 md:gap-28 md:pt-24">
        <IntroSection />
        <StatsSection />
        <LeadershipSection />
        <ValuesSection />
      </div>
    </Layout>
  )
}

function IntroSection() {
  return (
    <section>
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <Badge variant="brand">Our story</Badge>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            We are the technology partner for teams who refuse to compromise on ambition
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/70">
            Intovah began as a distributed collective of engineers, designers, and strategists who
            believed enterprise technology could move at product speed. Today, we operate pods
            across four continents to help organisations modernise, experiment, and deliver lasting
            impact.
          </p>
          <p className="text-slate-600 dark:text-white/70">
            Our engagements span regulated industries, venture-backed scale-ups, and global NGOs.
            Whatever the context, we build transparent partnerships, co-create clear measures of
            success, and leave every team better equipped than we found it.
          </p>
        </div>
        <Card className="border-slate-200 bg-white text-slate-700 shadow-xl dark:border-white/10 dark:bg-white/10 dark:text-white">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">Operating principles</p>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                Every roadmap is tied to explicit business outcomes and measured relentlessly.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-400" />
                Pods pair subject-matter experts with engineers so compliance and security are never
                afterthoughts.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-300 dark:bg-white/60" />
                We invest in enablement, documentation, and capability transfer from day one.
              </li>
            </ul>
          </div>
        </Card>
      </Container>
    </section>
  )
}

function StatsSection() {
  return (
    <section>
  <Container className="rounded-4xl border border-slate-200 bg-white p-10 shadow-xl dark:border-white/10 dark:bg-white/5">
        <div className="grid gap-8 text-slate-600 sm:grid-cols-2 lg:grid-cols-4 dark:text-white/70">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/40">{stat.label}</p>
              <p className="font-display text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function LeadershipSection() {
  return (
    <section>
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Leadership"
          badgeVariant="brand"
          title="Global operators with deep industry roots"
          description="Our leadership team brings experience from finance, healthcare, logistics, and high-growth product companies."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((leader) => (
            <Card
              key={leader.name}
              className="border-slate-200 bg-white text-slate-700 shadow-xl dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              <div className="space-y-4">
                <div>
                  <p className="font-display text-xl font-semibold text-slate-900 dark:text-white">{leader.name}</p>
                  <p className="text-sm text-slate-500 dark:text-white/60">{leader.title}</p>
                </div>
                <p className="text-sm text-slate-600 dark:text-white/70">{leader.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ValuesSection() {
  return (
    <section>
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Values"
          badgeVariant="brand"
          title="How we show up for our partners and each other"
          description="Our values guide who we hire, how we build, and the long-term relationships we cultivate."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <Card
              key={value.title}
              className="border-slate-200 bg-white text-slate-700 shadow-lg dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{value.copy}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutPage
