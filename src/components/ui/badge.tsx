import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/utils/cn'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  variant?: 'neutral' | 'brand' | 'success'
  size?: 'sm' | 'md'
}

const variantClasses = {
  neutral:
    'border border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white',
  brand:
    'border border-brand-200 bg-brand-50 text-brand-600 dark:border-brand-500/30 dark:bg-brand-500/15 dark:text-brand-100',
  success:
    'border border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-accent-500/40 dark:bg-accent-500/15 dark:text-accent-100',
} as const

const sizeClasses = {
  sm: 'text-xs px-3 py-1 gap-1.5',
  md: 'text-sm px-3.5 py-1.5 gap-2',
} as const

export function Badge({
  children,
  className,
  icon,
  variant = 'neutral',
  size = 'sm',
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full text-[0.65rem] font-medium uppercase tracking-[0.18em]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {icon && <span className="text-base leading-none">{icon}</span>}
      {children}
    </div>
  )
}
