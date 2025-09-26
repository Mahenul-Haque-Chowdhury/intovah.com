import type { HTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '@/utils/cn'

interface ChartCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

export function ChartCard({ title, description, className, children, ...props }: PropsWithChildren<ChartCardProps>) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-[#0f172a]/60 dark:text-white',
        className,
      )}
      {...props}
    >
      <div className="space-y-2">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        {description ? (
          <p className="text-sm text-slate-600 dark:text-white/70">{description}</p>
        ) : null}
      </div>
      <div className="mt-6 h-64 w-full">{children}</div>
    </div>
  )
}
