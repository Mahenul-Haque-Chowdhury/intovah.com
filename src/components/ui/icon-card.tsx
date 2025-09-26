import type { LucideIcon } from 'lucide-react'
import type { HTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '@/utils/cn'

interface IconCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  description?: string
}

export function IconCard({ icon: Icon, title, description, className, children, ...props }: PropsWithChildren<IconCardProps>) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 text-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/10 dark:text-white',
        className,
      )}
      {...props}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/20 dark:text-brand-100 dark:group-hover:bg-brand-500">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-5 space-y-3">
        <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        {description ? (
          <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-white/70">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  )
}
