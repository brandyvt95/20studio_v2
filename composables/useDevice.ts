// composables/useDevice.ts
import { useBreakpoints } from '@vueuse/core'

export function useDevice() {
  const breakpoints = useBreakpoints({
    mobile: 0,
    tablet: 601,
    desktop: 1024,
    largeDesktop: 1280
  })

  const isMobile = breakpoints.smaller('tablet')
  const isTablet = breakpoints.between('tablet', 'desktop')
  const isDesktop = breakpoints.between('desktop', 'largeDesktop')
  const isLargeDesktop = breakpoints.greaterOrEqual('largeDesktop')

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  }
}
