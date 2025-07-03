import { useSpring, useSpringValue } from '@react-spring/web'
import { useEffect } from 'react'

export const useParallax = (offset: number = 0.5) => {
  const y = useSpringValue(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      y.set(scrolled * offset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [y, offset])

  return useSpring({ y })
}