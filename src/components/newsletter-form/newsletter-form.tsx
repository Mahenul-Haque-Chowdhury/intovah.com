import { cn } from '@/utils/cn'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

type NewsletterFormStatus = 'idle' | 'submitting' | 'success' | 'error'

type NewsletterFormProps = {
  className?: string
  errorMessage?: string
  onSubmit: (email: string) => Promise<void>
  pendingText?: string
  submitText?: string
  successMessage?: string
}

function NewsletterForm({
  className,
  errorMessage = 'Something went wrong. Please try again.',
  onSubmit,
  pendingText = 'Sending...',
  submitText = 'Submit',
  successMessage = 'Email submitted successfully!',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<NewsletterFormStatus>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.trim() || status === 'submitting') {
      return
    }

    setStatus('submitting')
    setSubmitError(null)

    try {
      await onSubmit(email.trim())
      setStatus('success')
      setEmail('')
    } catch (error) {
      console.error('Newsletter signup failed', error)
      setStatus('error')
      setSubmitError(errorMessage)
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)

    if (status !== 'idle') {
      setStatus('idle')
      setSubmitError(null)
    }
  }

  const isSubmitting = status === 'submitting'
  const buttonLabel = isSubmitting ? pendingText : submitText

  return (
    <form
      onSubmit={(event) => {
        void handleSubmit(event)
      }}
      className={cn('newsletter-form is-revealing flex flex-col gap-2 sm:flex-row', className)}
      noValidate
    >
      <div className="mr-2 flex-shrink flex-grow">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Your best email…"
          autoComplete="email"
          required
          disabled={isSubmitting}
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 shadow-none transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300 disabled:cursor-not-allowed disabled:bg-gray-100"
        />
        <p aria-live="polite" className="mt-2 text-xs text-gray-500">
          {status === 'success' && successMessage}
          {status === 'error' && submitError}
        </p>
      </div>

      <div className="control">
        <button
          className="inline-flex w-full cursor-pointer justify-center whitespace-nowrap rounded-md bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:from-secondary-500 hover:to-secondary-500 disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
