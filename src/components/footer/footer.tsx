import { Link } from 'react-router-dom'

import { Menu } from '@/components/menu'
import { Logo } from '@/components/logo'
import { SocialLinks } from '@/components/social-links'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/cn'

function Footer() {
  const year = new Date().getFullYear()

  return (
  <footer className="relative z-10 mt-24 border-t border-slate-200 bg-white text-slate-700 transition-colors duration-300 dark:border-white/10 dark:bg-[#060b1c]/85 dark:text-white/80">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Logo className="h-12 w-auto" />
              <div>
                <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">Intovah</p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-white/50">
                  On the Verge of Innovation
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm text-slate-600 dark:text-white/60">
              We architect cloud-native platforms, data products, and AI-enabled experiences for
              organisations that can’t afford to fall behind.
            </p>
            <Link
              to="/contact"
              className={cn(
                buttonVariants({ variant: 'primary', size: 'md' }),
                'w-fit rounded-2xl px-6',
              )}
            >
              Schedule Appointment
            </Link>
          </div>

          <div className="space-y-4">
            <Badge variant="neutral">
              Navigation
            </Badge>
            <Menu
              className="flex flex-col gap-3"
              itemClassName="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
            />
          </div>

          <div className="space-y-4">
            <Badge variant="neutral">
              Solutions
            </Badge>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-white/60">
              <li>Inventory Management</li>
              <li>E-Commerce Site</li>
              <li>ISP Management</li>
              <li>Hosting</li>
              <li>intoPocket-Mobile App</li>
            </ul>
          </div>

          <div className="space-y-4">
            <Badge variant="neutral">
              Get in touch
            </Badge>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-white/60">
              <li>
                <a href="mailto:connect.intovah@gmail.com" className="hover:text-slate-900 dark:hover:text-white">
                  connect.intovah@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801711067166" className="hover:text-slate-900 dark:hover:text-white">
                  +880 1711-067166
                </a>
              </li>
            </ul>
            <SocialLinks className="flex gap-3" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 dark:border-white/10 dark:text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} Intovah. On the Verge of Innovation.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://intovah.com/privacy"
              className="hover:text-slate-900 dark:hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
            <a
              href="https://intovah.com/terms"
              className="hover:text-slate-900 dark:hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
            <a
              href="https://status.intovah.com"
              className="hover:text-slate-900 dark:hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Security status
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
