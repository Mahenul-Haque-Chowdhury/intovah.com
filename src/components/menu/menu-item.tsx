import { NavLink } from 'react-router-dom'

import { cn } from '@/utils/cn'

type MenuItemProps = {
  className?: string
  name: string
  onClick?: () => void
  to: string
}

function MenuItem({ className, name, onClick, to }: MenuItemProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          cn(
            'group relative inline-flex items-center gap-1 rounded-2xl px-3 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:inset-x-3 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-brand-500 after:transition-opacity after:duration-200 dark:focus-visible:ring-brand-400/40 dark:focus-visible:ring-offset-slate-950',
            className,
            isActive
              ? 'bg-brand-500/10 text-brand-600 shadow-sm after:opacity-100 dark:bg-brand-500/20 dark:text-brand-100'
              : 'text-slate-600 after:opacity-0 hover:text-brand-500 group-hover:after:opacity-60 dark:text-white/70 dark:hover:text-white',
          )
        }
        onClick={onClick}
        to={to}
      >
        {name}
      </NavLink>
    </li>
  )
}

export default MenuItem
