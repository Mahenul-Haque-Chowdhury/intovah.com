import emailjs from '@emailjs/browser'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify'

import { Layout } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { buttonVariants } from '@/components/ui/button'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID
const EMAILJS_ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID

type ContactFormState = {
  name: string
  company: string
  email: string
  phone: string
  project: string
  interest: string
}

const INITIAL_STATE: ContactFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  project: '',
  interest: '',
}

const PROJECT_OPTIONS = [
  'IntoStock',
  'IntoShop',
  'IntoPing',
  'IntoPocket',
  'IntoHost',
  'Consult on something else',
]

export default function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Intovah</title>
        <meta
          name="description"
          content="Connect with Intovah to scope a project, explore partnership opportunities, or reach our 24/7 support desk."
        />
      </Helmet>

      <div className="flex flex-col gap-24 pb-24 pt-16 md:gap-28 md:pt-24">
        <IntroSection />
        <ContactContent />
      </div>
    </Layout>
  )
}

function IntroSection() {
  return (
    <section>
      <Container className="space-y-6">
        <Badge variant="brand">Let’s build together</Badge>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Tell us what you&apos;re building—we&apos;ll assemble the squad to ship it
        </h1>
        <p className="max-w-3xl text-lg text-slate-600 dark:text-white/70">
          Whether you need a cross-functional pod to deliver a product increment, platform experts
          to modernise critical systems, or strategic guidance on AI initiatives, we’ll meet you
          where you are and move fast together.
        </p>
      </Container>
    </section>
  )
}

function ContactContent() {
  return (
    <section>
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Card className="border-slate-200 bg-white text-slate-700 shadow-xl dark:border-white/10 dark:bg-white/10 dark:text-white">
          <SectionHeading
            eyebrow="Project enquiry"
            badgeVariant="brand"
            title="Share a few details and we’ll respond within one business day"
            description="Your information is secure and encrypted. A delivery lead will follow up with a tailored action plan."
            alignment="left"
            className="mb-6"
          />
          <ContactForm />
        </Card>

        <aside className="space-y-6">
          <Card className="border-slate-200 bg-white text-slate-700 shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">Direct lines</p>
            <div className="mt-4 space-y-4 text-sm text-slate-600 dark:text-white/80">
              <div>
                <p className="text-slate-500 dark:text-white/60">Email</p>
                <a
                  className="font-semibold text-brand-600 hover:text-brand-700 dark:text-white dark:hover:text-white"
                  href="mailto:connect.intovah@gmail.com"
                >
                  connect.intovah@gmail.com
                </a>
              </div>
              <div>
                <p className="text-slate-500 dark:text-white/60">Phone</p>
                <a
                  className="font-semibold text-brand-600 hover:text-brand-700 dark:text-white dark:hover:text-white"
                  href="tel:+8801711067166"
                >
                  +880 1711-067166
                </a>
              </div>
            </div>
          </Card>

          <Card className="border-slate-200 bg-white text-slate-700 shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">Support channels</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-white/80">
              <li>Critical incidents: connect.intovah@gmail.com</li>
              <li>Billing &amp; vendor ops: connect.intovah@gmail.com</li>
              <li>Partnerships &amp; media: connect.intovah@gmail.com</li>
            </ul>
            <Link
              to="/support"
              className={buttonVariants({
                variant: 'secondary',
                size: 'md',
                className: 'mt-5 w-full rounded-2xl border-slate-300 text-brand-700 dark:border-white/20 dark:text-white',
              })}
            >
              Visit support centre
            </Link>
          </Card>
        </aside>
      </Container>
    </section>
  )
}

function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (key: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) return

    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_USER_TEMPLATE_ID) {
      toast.error('Email delivery is not configured yet. Please try again soon.')
      return
    }

    setIsSubmitting(true)
    const toastId = toast.loading('Preparing your briefing...')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_USER_TEMPLATE_ID,
        {
          user_name: form.name,
          user_company: form.company,
          user_email: form.email,
          user_phone: form.phone,
          user_project: form.project,
          user_interest: form.interest,
        },
        EMAILJS_PUBLIC_KEY,
      )

      if (EMAILJS_ADMIN_TEMPLATE_ID) {
        await emailjs
          .send(
            EMAILJS_SERVICE_ID,
            EMAILJS_ADMIN_TEMPLATE_ID,
            {
              user_name: form.name,
              user_email: form.email,
              user_company: form.company,
              user_phone: form.phone,
              user_project: form.project,
              user_interest: form.interest,
            },
            EMAILJS_PUBLIC_KEY,
          )
          .catch((error) => console.warn('Failed to notify administrators via EmailJS', error))
      }

      toast.update(toastId, {
        render: 'Thanks! Our delivery lead will reach out within one business day.',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      })
      setForm(INITIAL_STATE)
    } catch (error) {
      toast.update(toastId, {
        render: 'We could not send your message. Please try again shortly.',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={(event) => {
        void handleSubmit(event)
      }}
      className="space-y-5"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          label="Name"
          id="contact-name"
          value={form.name}
          onChange={(event) => updateField('name', event.target.value)}
          required
          autoComplete="name"
        />
        <FormField
          label="Phone number"
          id="contact-phone"
          type="tel"
          value={form.phone}
          onChange={(event) => updateField('phone', event.target.value)}
          required
          placeholder="Include country/area code"
          autoComplete="tel"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          label="Company (optional)"
          id="contact-company"
          value={form.company}
          onChange={(event) => updateField('company', event.target.value)}
          autoComplete="organization"
        />
        <FormField
          label="Work email (optional)"
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(event) => updateField('email', event.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
        />
      </div>

      <SelectField
        label="Project of interest"
        id="contact-project"
        value={form.project}
        onChange={(event) => updateField('project', event.target.value)}
        options={PROJECT_OPTIONS}
        placeholder="Select a project"
        required
      />

      <FormField
        label="Interest details (optional)"
        id="contact-interest"
        value={form.interest}
        onChange={(event) => updateField('interest', event.target.value)}
        as="textarea"
        rows={5}
        placeholder="Any context, timelines, or success metrics we should know about."
      />

      <button
        type="submit"
        className={buttonVariants({
          variant: 'primary',
          size: 'lg',
          className: 'w-full rounded-2xl px-8',
        })}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
      <p className="text-xs text-slate-500 dark:text-white/40">
        By submitting this form you agree to receive communications from Intovah. We respect your
        time—unsubscribe anytime.
      </p>
    </form>
  )
}

type FormFieldProps = {
  id: string
  label: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  required?: boolean
  placeholder?: string
  as?: 'input' | 'textarea'
  rows?: number
  autoComplete?: string
}

function FormField({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
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
          value={value}
          onChange={onChange}
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
          value={value}
          onChange={onChange}
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
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  placeholder?: string
  required?: boolean
}

function SelectField({ id, label, value, onChange, options, placeholder, required = false }: SelectFieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-white/70" htmlFor={id}>
      <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">{label}</span>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
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
