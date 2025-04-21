import { Suspense } from 'react'
import { Outlet } from '@tanstack/react-router'
import { Toaster } from 'react-hot-toast'
import { Navbar } from '@/components/navbar/NavBar'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <Navbar className="sticky top-0 z-50" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="w-64 flex-shrink-0" />
        <main className="flex-1 overflow-auto p-6">
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Toaster position="top-right" />
    </div>
  )
}
