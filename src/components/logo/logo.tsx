import { cn } from '@/utils/cn'

import brandLogo from './brand-logo.svg'

function Logo({ className }: { className?: string }) {
  return (
    <img
      src={brandLogo}
      alt="Intovah"
      className={cn('object-contain', className)}
      height={32}
      width={32}
    />
  )
}

export default Logo
