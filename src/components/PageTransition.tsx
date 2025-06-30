import React from 'react'

interface PageTransitionProps {
  children: React.ReactNode
  isTransitioning: boolean
  onTransitionComplete: () => void
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return <>{children}</>
}

export default PageTransition 