import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import './Layout.css'

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    window.location.href = '/login'
  }

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} currentPath={location.pathname} />
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} onLogout={handleLogout} />
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout

