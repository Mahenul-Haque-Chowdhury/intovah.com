import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <Article
        title="Contact"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >

        <p>Email: <a href="mailto:connect.intovah@gmail.com" className="text-blue-600">connect.intovah@gmail.com</a></p>
        <p>Phone: <a href="tel:+8801711067166" className="text-blue-600">+8801711067166</a></p>
      </Article>
    </Layout>
  )
}
