import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/utils/cn'

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60'

const variantStyles = {
  primary:
    'bg-brand-500 text-white shadow-brand hover:bg-brand-600 focus-visible:outline-brand-500',
  secondary:
    'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 focus-visible:outline-brand-500 dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
  outline:
    'border border-brand-200 text-brand-600 hover:bg-brand-50 focus-visible:outline-brand-500 dark:border-brand-500/40 dark:text-brand-100 dark:hover:bg-brand-500/10',
  ghost:
    'text-brand-600 hover:bg-brand-50 focus-visible:outline-brand-400 dark:text-brand-100 dark:hover:bg-brand-500/10',
} as const

const sizeStyles = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
} as const

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles
  size?: keyof typeof sizeStyles
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export const buttonVariants = ({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: keyof typeof variantStyles
  size?: keyof typeof sizeStyles
  className?: string
}) => cn(baseStyles, variantStyles[variant], sizeStyles[size], className)
