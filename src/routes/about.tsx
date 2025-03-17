import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import { Hero, HeroIllustration } from '@/components/hero'

function AboutPage() {
  return (
    <Layout>
      <Article
        title="About"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >

         "intovah: On the Verge of Innovation" <br></br>
          At Intovah, we don’t just follow trends; we create them.
        Let’s redefine what your business can achieve together.

      </Article>
    </Layout>
  )
}

export default AboutPage
