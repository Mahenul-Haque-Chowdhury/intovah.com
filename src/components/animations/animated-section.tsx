import type { PropsWithChildren } from 'react'
import { motion, useAnimation, useInView, type HTMLMotionProps } from 'framer-motion'
import { useEffect, useRef } from 'react'

const easing: [number, number, number, number] = [0.42, 0, 0.2, 1]

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

interface AnimatedSectionProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  delay?: number
  staggerChildren?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  staggerChildren = 0.12,
  ...props
}: PropsWithChildren<AnimatedSectionProps>) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  useEffect(() => {
    if (isInView) {
      void controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ staggerChildren, delayChildren: delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
