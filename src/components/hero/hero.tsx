import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import ScrollReveal from 'scrollreveal';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

// --- Utility Function (from your original setup) ---
// A simple utility for conditional class names.
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

// --- NewsletterForm Component ---
// This is the form component used within the Hero section.
const NewsletterForm = ({
                          className,
                          onSubmit,
                          submitText,
                        }: {
  className?: string;
  onSubmit: (email: string) => Promise<void>;
  submitText: string;
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter a valid email address.');
      return;
    }
    // Call the submission handler passed from the parent
    await onSubmit(email);
    setEmail(''); // Clear the input field on successful submission
  };

  return (
    <form className={cn('w-full', className)} onSubmit={handleSubmit}>
      <div className="relative flex flex-col sm:flex-row items-center justify-center lg:justify-start">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full max-w-xs px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0 sm:rounded-r-none"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:rounded-l-none"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
};


// --- ScrollReveal Reference Type ---
type ScrollRevealRefElement = HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement;

// --- Hero Component (Previous Design with EmailJS) ---
function Hero({
                className,
                content,
                illustration,
                title,
              }: {
  className?: string;
  content: string;
  illustration?: ReactNode;
  title: string;
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // --- EmailJS Configuration ---
  const SERVICE_ID = 'service_2l7xtah';
  const PUBLIC_KEY = '5QFtDESMRhB-Vj-Mf';

  // --- TEMPLATE IDs ---
  const USER_TEMPLATE_ID = 'template_2sbnw3w';
  const ADMIN_TEMPLATE_ID = 'template_1rw857b';

  // --- ScrollReveal Animation Effect ---
  useEffect(() => {
    if (typeof window !== 'undefined' && scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.forEach((ref) =>
        ScrollReveal().reveal(ref, {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        }),
      );
    }

    // Cleanup ScrollReveal instance on component unmount
    return () => ScrollReveal().destroy();
  }, []);

  // --- Email Submission Handler using EmailJS ---
  async function onNewsletterSubmit(email: string) {
    setIsLoading(true);
    const toastId = toast.loading('Sending Email...');

    const templateParams = {
      user_email: email,
    };

    try {
      // 1. Send the confirmation email to the user
      await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Update the UI for the user immediately
      toast.update(toastId, {
        render: 'Email Sent successfully! Please check your inbox.',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });

      // 2. Send the notification email to the admin (you)
      // This runs in the background. If it fails, it won't affect the user's experience.
      try {
        await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY);
        console.log('Admin notification sent successfully.');
      } catch (adminError) {
        console.error('Failed to send admin notification:', adminError);
      }

    } catch (userError) {
      console.error('EmailJS User Error:', userError);
      toast.update(toastId, {
        render: 'Failed to send Email. Please try again later.',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  // --- Ref function for ScrollReveal ---
  const addToScrollRevealRef = (el: ScrollRevealRefElement) => {
    if (el && !scrollRevealRef.current.includes(el)) {
      scrollRevealRef.current.push(el);
    }
  };

  return (
    <>
      {/* It's good practice to have ToastContainer at the root of your app, but including it here for completeness if needed */}
      <ToastContainer position="top-right" theme="light" />
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

            {/* Illustration */}
            {!!illustration && (
              <div className="relative -mx-6 py-10 lg:mx-0 lg:p-0">
                {illustration}
              </div>
            )}
          </div>
        </div>

        {/* Full-page loading overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Hero;
