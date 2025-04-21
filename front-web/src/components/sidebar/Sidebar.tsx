import { Link } from '@tanstack/react-router'
import { FaHome, FaCalendar, FaUsers, FaHandsHelping, FaComments } from 'react-icons/fa'

interface SidebarItem {
  icon: React.ReactNode
  label: string
  to: string
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <FaHome className="h-5 w-5" />,
    label: 'Home',
    to: '/',
  },
  {
    icon: <FaCalendar className="h-5 w-5" />,
    label: 'Activities',
    to: '/activities',
  },
  {
    icon: <FaUsers className="h-5 w-5" />,
    label: 'Community',
    to: '/community',
  },
  {
    icon: <FaHandsHelping className="h-5 w-5" />,
    label: 'Help',
    to: '/help',
  },
  {
    icon: <FaComments className="h-5 w-5" />,
    label: 'Forum',
    to: '/forum',
  },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-base-100 p-4 shadow-lg">
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-base-200"
            activeProps={{
              className: 'bg-primary text-primary-content hover:bg-primary/90',
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}