import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import IndexPage from '@/pages/index'

// 懒加载路由
const DocsPage = lazy(() => import('@/pages/docs'))
const PricingPage = lazy(() => import('@/pages/pricing'))
const BlogPage = lazy(() => import('@/pages/blog'))
const AboutPage = lazy(() => import('@/pages/about'))

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<DocsPage />} path="/docs" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<AboutPage />} path="/about" />
      </Routes>
    </Suspense>
  )
}

export default Router
