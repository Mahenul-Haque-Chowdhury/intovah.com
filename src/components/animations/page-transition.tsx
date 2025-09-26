import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

const easing: [number, number, number, number] = [0.45, 0, 0.15, 1]

const transition = {
  duration: 0.55,
  ease: easing,
}

const variants = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -24, transition },
}

export function PageTransition({ children }: PropsWithChildren) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-full"
    >
      {children}
    </motion.div>
  )
}
