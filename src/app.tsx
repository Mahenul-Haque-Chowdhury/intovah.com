import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { ScrollToTop } from '@/components/scroll-to-top'
import { PageTransition } from '@/components/animations'
import { ThemeProvider } from '@/theme/theme-provider'
import AboutPage from '@/routes/about'
import ContactPage from '@/routes/contact'
import FaqsPage from '@/routes/faqs'
import HomePage from '@/routes/home'
import SupportPage from '@/routes/support'

import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  /**
   * Vite exposes env variables on the special import.meta.env object.
   * Basename needs to be set for GitHub Pages to function properly.
   *
   * @link https://vitejs.dev/guide/env-and-mode.html
   */
  const basename = import.meta.env.BASE_URL

  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter basename={basename}>
          <AnimatedRoutes />

          <ToastContainer position="top-right" newestOnTop theme="light" />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <ScrollToTop>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
          <Route
            path="contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
          <Route
            path="faqs"
            element={
              <PageTransition>
                <FaqsPage />
              </PageTransition>
            }
          />
          <Route
            path="support"
            element={
              <PageTransition>
                <SupportPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </ScrollToTop>
  )
}
