import type { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
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
        'relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl',
        className,
      )}
    >
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8285428347390731"
          crossOrigin="anonymous"
        ></script>
      </Helmet>


      <Gradient className="absolute bottom-0 left-1/2 top-0 ml-28 hidden w-1/2 lg:block" />
      <Header />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
