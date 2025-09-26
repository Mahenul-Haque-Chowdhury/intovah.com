import type { ReactNode } from 'react'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  badgeVariant?: 'neutral' | 'brand' | 'success'
  title: ReactNode
  description?: ReactNode
  alignment?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  badgeVariant = 'neutral',
  title,
  description,
  alignment = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-3xl flex-col gap-4',
        alignment === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? <Badge variant={badgeVariant}>{eyebrow}</Badge> : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-neutral-600 dark:text-white/70 md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
