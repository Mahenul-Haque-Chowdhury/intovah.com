import type { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet-async'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/utils/cn'

function Layout({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen flex-col overflow-x-hidden transition-colors duration-300',
        'bg-white text-slate-900 dark:bg-[#050819] dark:text-white',
        className,
      )}
    >
      <Helmet titleTemplate="%s | Intovah" defaultTitle="Intovah">
        <html lang="en" />
        <meta name="theme-color" content="#101629" />
        <meta name="og:site_name" content="Intovah" />
      </Helmet>

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden dark:block">
        <div className="absolute -top-32 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-brand-300/20 blur-[120px] dark:bg-brand-500/20" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full blur-[120px] bg-emerald-200/20 dark:bg-accent-400/16" />
        <div className="absolute right-[-10rem] top-1/3 h-[32rem] w-[32rem] rounded-full blur-[140px] bg-sky-200/18 dark:bg-brand-300/14" />
      </div>

      <Header />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
