import type { HTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-white/15 dark:bg-white/10 dark:text-white dark:shadow-card dark:hover:shadow-glass',
        className,
      )}
      {...props}
    />
  )
}
