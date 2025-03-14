import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="intovah: On the Verge of Innovation"
        content="At Intovah, we don’t just follow trends; we create them.
        Let’s redefine what your business can achieve together."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
