import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { AppLayout } from '@/components/layout/AppLayout'
import { Home } from '@/pages/Home'
// import { Activities } from '@/pages/Activities'
// import { Community } from '@/pages/Community'
// import { Help } from '@/pages/Help'
// import { Forum } from '@/pages/Forum'
// import { Profile } from '@/pages/Profile'
// import { Settings } from '@/pages/Settings'
import { Login } from '@/pages/Login'

// Create a root route
const rootRoute = createRootRoute({
  component: AppLayout,
})

// Create routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})



const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

// Create the route tree
export const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
])