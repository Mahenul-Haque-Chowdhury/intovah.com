import { useState } from 'react'
import { NewsletterForm } from '@/components/newsletter-form'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import { config } from '@/config/config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ScrollRevealRefElement = HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement

function Hero({
                className,
                content,
                illustration,
                title,
              }: {
  className?: string
  content: string
  illustration?: ReactNode
  title: string
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        }),
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  async function onNewsletterSubmit(email: string) {
    // Show the overlay and set loading state
    setIsLoading(true)

    // Show a loading toast
    const toastId = toast.loading('Sending email...')

    try {
      // Make the POST request
      const response = await fetch(`${config.apiBaseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send email as an object
      })

      // If response is not OK, throw an error
      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      // Update toast to success with a success message and remove the loading toast
      toast.update(toastId, {
        render: 'Email sent successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      })

      // Optionally, you can return the response if needed
      return await response.json()
    } catch (error) {
      // Update toast to error with an error message and remove the loading toast
      toast.update(toastId, {
        render: 'Failed to send email. Please try again.',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      })
      console.error(error)
    } finally {
      // Hide the overlay once the email sending is complete
      setIsLoading(false)
    }
  }

  const addToScrollRevealRef = (el: ScrollRevealRefElement) => {
    scrollRevealRef.current.push(el)
  }

  return (
    <section className={cn('text-center lg:w-full lg:py-20 lg:text-left', className)}>
      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div className="hero-copy pb-16 pt-10 lg:min-w-[40rem] lg:pr-20 lg:pt-16">
            <div className="mx-auto w-full max-w-3xl">
              <h1 className="mb-4 mt-0 text-4xl font-bold md:text-5xl " ref={addToScrollRevealRef}>
                {title}
              </h1>
              <p className="prose prose-xl m-auto text-gray-500" ref={addToScrollRevealRef}>
                {content}
              </p>
            </div>

            <div ref={addToScrollRevealRef}>
              <NewsletterForm
                className="mx-auto mt-8 max-w-md lg:mx-0"
                submitText="Get early access"
                onSubmit={onNewsletterSubmit}
              />
            </div>
          </div>

          {!!illustration && (
            <div className="relative -mx-6 py-10 lg:mx-0 lg:p-0">{illustration}</div>
          )}
        </div>
      </div>

      {/* Full-page overlay with loading spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
