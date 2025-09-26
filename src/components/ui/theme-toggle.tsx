import { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@/theme/use-theme'
import { cn } from '@/utils/cn'

const icons = {
  sun: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4.75V3M12 21v-1.75M7.571 7.571L6.364 6.364M17.636 17.636l-1.207-1.207M4.75 12H3M21 12h-1.75M7.571 16.429L6.364 17.636M17.636 6.364l-1.207 1.207M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  moon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

export interface ThemeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15',
        className,
      )}
      onClick={toggleTheme}
      {...props}
    >
      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-transform duration-300',
          isDark ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
        )}
      >
        {icons.moon}
      </span>
      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-transform duration-300',
          isDark ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100',
        )}
      >
        {icons.sun}
      </span>
    </button>
  )
}
