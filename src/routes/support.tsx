import { useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify'

import { Layout } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { buttonVariants } from '@/components/ui/button'

const supportCategories = [
  {
    title: 'Platform incidents',
    description: 'Immediate response from on-call SREs with direct escalation to product owners.',
    sla: 'First response in 15 minutes',
  },
  {
    title: 'Feature requests',
    description: 'Collaborate with your delivery pod to scope enhancements and sequence releases.',
    sla: 'Roadmap triage within 24 hours',
  },
  {
    title: 'Billing & vendor ops',
    description: 'Resolve invoicing, procurement, and access needs with our operations team.',
    sla: 'Resolution in 2 business days',
  },
]

const PROJECT_OPTIONS = [
  'IntoStock',
  'IntoShop',
  'IntoPing',
  'IntoPocket',
  'IntoHost',
  'Consult on something else',
]

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString() ?? 'there'

    toast.success(`Thanks, ${name}! Our support team will follow up shortly.`)
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <Layout>
      <Helmet>
        <title>Support | Intovah</title>
        <meta
          name="description"
          content="Reach Intovah support for incidents, feature requests, billing, or day-to-day platform questions."
        />
      </Helmet>

      <div className="flex flex-col gap-24 pb-24 pt-16 md:gap-28 md:pt-24">
        <IntroSection />
        <SupportGrid />
        <SupportForm onSubmit={handleSubmit} submitted={submitted} />
      </div>
    </Layout>
  )
}

function IntroSection() {
  return (
    <section>
      <Container className="space-y-6">
        <Badge variant="brand">Support desk</Badge>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          We’re on call globally so your roadmap never stalls
        </h1>
        <p className="max-w-3xl text-lg text-slate-600 dark:text-white/70">
          Our follow-the-sun model gives you access to engineers, designers, and product leads who
          already know your context. Use the form below or reach us through the dedicated Slack
          channel in your workspace.
        </p>
        <p className="max-w-3xl text-base text-slate-500 dark:text-white/60">
          If you&apos;re already using our products, you can contact us here and we&apos;ll respond as soon as
          possible.
        </p>
      </Container>
    </section>
  )
}

function SupportGrid() {
  return (
    <section>
      <Container className="grid gap-4 lg:grid-cols-3">
        {supportCategories.map((category) => (
          <Card
            key={category.title}
            className="border-slate-200 bg-white text-slate-700 shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white"
          >
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-white/70">{category.description}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                {category.sla}
              </p>
            </div>
          </Card>
        ))}
      </Container>
    </section>
  )
}

function SupportForm({
  onSubmit,
  submitted,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  submitted: boolean
}) {
  return (
    <section>
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Card className="border-slate-200 bg-white text-slate-700 shadow-xl dark:border-white/15 dark:bg-white/10 dark:text-white">
          <SectionHeading
            eyebrow="Submit a request"
            badgeVariant="brand"
            title="Tell us what you need—we’ll route it instantly"
            description="Urgent incidents page our on-call SREs. Feature and support questions are triaged with your delivery pod."
            alignment="left"
            className="mb-6"
          />

          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                id="name"
                label="Name"
                placeholder="Jane Doe"
                required
                autoComplete="name"
              />
              <FormField
                id="phone"
                label="Phone number"
                type="tel"
                placeholder="Include country/area code"
                required
                autoComplete="tel"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                id="email"
                label="Work email (optional)"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <FormField id="subject" label="Subject" placeholder="Brief summary" />
            </div>
            <SelectField
              id="project"
              label="Product or service"
              options={PROJECT_OPTIONS}
              placeholder="Select an option"
              required
            />
            <FormField
              id="details"
              label="Describe your request"
              as="textarea"
              rows={5}
              placeholder="Share details, logs, or links so we can respond with context."
              required
            />
            <button
              type="submit"
              className={buttonVariants({
                variant: 'primary',
                size: 'md',
                className: 'w-full rounded-2xl px-6',
              })}
            >
              Submit request
            </button>
            {submitted ? (
              <p className="text-xs text-slate-500 dark:text-white/40">
                Thanks! You’ll hear from us shortly. Urgent issues? DM @intovah-support in your
                shared Slack channel.
              </p>
            ) : null}
          </form>
        </Card>

        <aside className="space-y-6">
          <Card className="border-slate-200 bg-white text-slate-700 shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">Live status</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <p className="text-sm text-slate-600 dark:text-white/80">All systems operational</p>
            </div>
            <p className="mt-4 text-xs text-slate-500 dark:text-white/50">Last updated 4 minutes ago</p>
          </Card>

          <Card className="border-slate-200 bg-white text-slate-700 shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">Other resources</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-white/80">
              <li>Runbook library → Notion</li>
              <li>Incident response guide → Confluence</li>
              <li>Product roadmap → Live dashboard</li>
            </ul>
          </Card>
        </aside>
      </Container>
    </section>
  )
}

type FormFieldProps = {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  as?: 'input' | 'textarea'
  rows?: number
  autoComplete?: string
}

function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  as = 'input',
  rows = 4,
  autoComplete,
}: FormFieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-white/70" htmlFor={id}>
      <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">{label}</span>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          rows={rows}
          autoComplete={autoComplete}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/40 dark:border-white/15 dark:bg-black/20 dark:text-white/80"
        />
      ) : (
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          type={type}
          autoComplete={autoComplete}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/40 dark:border-white/15 dark:bg-black/20 dark:text-white/80"
        />
      )}
    </label>
  )
}

type SelectFieldProps = {
  id: string
  label: string
  options: string[]
  placeholder?: string
  required?: boolean
}

function SelectField({ id, label, options, placeholder, required = false }: SelectFieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-white/70" htmlFor={id}>
      <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">{label}</span>
      <select
        id={id}
        name={id}
        required={required}
        defaultValue=""
        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/40 dark:border-white/15 dark:bg-black/20 dark:text-white/80"
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-white text-slate-700 dark:bg-[#070b1c] dark:text-white"
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
