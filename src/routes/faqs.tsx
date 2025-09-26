import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Layout } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { buttonVariants } from '@/components/ui/button'

const faqGroups = [
  {
    category: 'Working with Intovah',
    items: [
      {
        question: 'What kinds of engagements do you support?',
        answer:
          'We lead end-to-end product builds, modernise legacy estates, augment existing squads, and run capability accelerators for AI, data, and SRE.',
      },
      {
        question: 'How do engagements typically begin?',
        answer:
          'Every partnership starts with discovery labs and architectural framing. Within ten business days you receive a roadmap, pod composition, and clear success metrics.',
      },
      {
        question: 'Can you embed with our internal teams?',
        answer:
          'Yes. Our pods plug into your rituals and tooling. We co-own a single backlog, align on governance, and make sure knowledge transfer is built into every sprint.',
      },
    ],
  },
  {
    category: 'Delivery & operations',
    items: [
      {
        question: 'What is your release cadence?',
        answer:
          'We ship continuously. Most clients see production releases inside the first sprint with automated tests, observability, and rollback strategies in place.',
      },
      {
        question: 'How do you manage security and compliance?',
        answer:
          'Security is embedded in our SDLC. We handle threat modelling, IaC guardrails, and compliance mappings for SOC 2, ISO 27001, HIPAA, GDPR, and region-specific regulators.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'Choose from shared success pods, SRE retainers, or enablement programmes. We stay close until your teams are fully confident running the platform.',
      },
    ],
  },
]

export default function FaqsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Intovah FAQs</title>
        <meta
          name="description"
          content="Answers to common questions about partnering with Intovah for product engineering, cloud modernisation, and AI initiatives."
        />
      </Helmet>

      <div className="flex flex-col gap-24 pb-24 pt-16 md:gap-28 md:pt-24">
        <IntroSection />
        <FAQSection />
        <ContactCTA />
      </div>
    </Layout>
  )
}

function IntroSection() {
  return (
    <section>
      <Container className="space-y-6">
        <Badge variant="brand">FAQs</Badge>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Everything you need to know about how we build, ship, and support
        </h1>
        <p className="max-w-3xl text-lg text-slate-600 dark:text-white/70">
          We work as an extension of your organisation. If you don’t see your question answered
          below, reach out and we’ll connect you with a delivery lead in your region.
        </p>
      </Container>
    </section>
  )
}

function FAQSection() {
  return (
    <section>
      <Container className="space-y-12">
        {faqGroups.map((group) => (
          <div key={group.category} className="space-y-6">
            <SectionHeading eyebrow={group.category} title={group.category} />
            <div className="grid gap-4 md:grid-cols-2">
              {group.items.map((item) => (
                <FAQItem key={item.question} item={item} />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}

type FAQItemProps = {
  item: {
    question: string
    answer: string
  }
}

function FAQItem({ item }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="border-slate-200 bg-white text-slate-700 shadow-lg dark:border-white/15 dark:bg-white/10 dark:text-white">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">{item.question}</p>
          {isOpen ? (
            <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{item.answer}</p>
          ) : null}
        </div>
        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-600 dark:border-white/20 dark:bg-white/10 dark:text-white/70">
          {isOpen ? '−' : '+'}
        </span>
      </button>
    </Card>
  )
}

function ContactCTA() {
  return (
    <section>
      <Container>
        <Card className="border-slate-200 bg-white text-slate-700 shadow-xl dark:border-white/15 dark:bg-white/10 dark:text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">Still exploring?</p>
              <p className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Share your use case and we&apos;ll send a tailored response same day.
              </p>
            </div>
            <Link
              to="/contact"
              className={buttonVariants({
                variant: 'primary',
                size: 'md',
                className: 'rounded-2xl px-6 shadow-brand',
              })}
            >
              Contact our team
            </Link>
          </div>
        </Card>
      </Container>
    </section>
  )
}
