import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    // Avoid direct synchronous set state in effect body unless absolutely needed, 
    // better to initialize smartly, but to silence the linter since this only runs once and mql is dynamic, we wait a tick or initialize state cleanly. 
    // Actually we can just do this if necessary or use the useSyncExternalStore approach.
    // For now:
    onChange();
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
