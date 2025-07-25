import { Link } from '@heroui/link'

import React from 'react'
import KeepAlive, { AliveScope } from 'react-activation'
import LoginModal from '@/components/auth/login.tsx'
import Register from '@/components/auth/Register'
import { Navbar } from '@/components/navbar'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <AliveScope>
          <KeepAlive>
            <LoginModal />
            <Register />
          </KeepAlive>
        </AliveScope>
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer>
    </div>
  )
}
