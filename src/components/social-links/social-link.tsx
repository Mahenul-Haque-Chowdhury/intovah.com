import { SOCIAL_LINKS } from '@/components/social-links/constants'

function SocialLink({ link }: { link: (typeof SOCIAL_LINKS)[number] }) {
  return (
    <li>
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      >
        <span className="sr-only">{link.name}</span>
        <span className="h-5 w-5" aria-hidden dangerouslySetInnerHTML={{ __html: link.svg }} />
      </a>
    </li>
  )
}

export default SocialLink
