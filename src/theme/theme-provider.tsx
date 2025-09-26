import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'

import { ThemeContext } from './theme-context'

const storageKey = 'intovah-theme'

type Theme = 'light' | 'dark'

type ThemeProviderProps = PropsWithChildren<{
  defaultTheme?: Theme
}>

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const readStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const stored = window.localStorage.getItem(storageKey)
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
  } catch (error) {
    console.warn('Unable to access localStorage for theme', error)
  }

  return null
}

const resolveInitialTheme = (fallback: Theme): Theme => {
  if (typeof window === 'undefined') {
    return fallback
  }

  const storedTheme = readStoredTheme()
  const initial = storedTheme ?? getSystemTheme()

  if (typeof document !== 'undefined') {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(initial)
  }

  return initial
}

export function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => resolveInitialTheme(defaultTheme))

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
    }
  }, [theme])

  const setTheme = useCallback((nextTheme: Theme | ((prevTheme: Theme) => Theme)) => {
    setThemeState((prev) => {
      const resolvedTheme = typeof nextTheme === 'function' ? nextTheme(prev) : nextTheme

      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(storageKey, resolvedTheme)
        } catch (error) {
          console.warn('Unable to persist theme selection', error)
        }
      }

      return resolvedTheme
    })
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }, [setTheme])

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (event: MediaQueryListEvent) => {
      const storedTheme = readStoredTheme()
      if (!storedTheme) {
        setThemeState(event.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
