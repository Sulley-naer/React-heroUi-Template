import { HeroUIProvider } from '@heroui/system'
import React from 'react'
import { useHref, useNavigate } from 'react-router-dom'

function HeroProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  )
}

export { HeroProvider }
