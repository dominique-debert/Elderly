import { Link } from '@tanstack/react-router'
import { FaBell, FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="navbar bg-base-100 border-b px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Helpy
        </Link>
      </div>

      <div className="flex-none gap-2">
        {/* Search */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* Notifications */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaBell className="h-5 w-5" />
            <span className="badge badge-sm badge-primary indicator-item">2</span>
          </div>
        </button>

        {/* User Menu */}
        <div className="dropdown dropdown-end">
          <button
            className="btn btn-ghost btn-circle avatar"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <FaUserCircle className="h-6 w-6" />
          </button>
          {isDropdownOpen && (
            <ul
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => setIsDropdownOpen(false)}
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    // Handle logout
                    localStorage.removeItem('token')
                    window.location.href = '/login'
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}