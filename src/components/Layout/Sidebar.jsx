import { Link, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Store,
  ShoppingBag,
  CreditCard,
  Tag,
  Star,
  MessageCircle,
  Truck,
  BarChart3,
  Settings,
  Shield,
  FileText,
  TrendingUp,
  Menu,
  LogOut
} from 'lucide-react'
import './Sidebar.css'

const Sidebar = ({ isOpen, currentPath }) => {
  const navigate = useNavigate()

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/users', icon: Users, label: 'User Management' },
    { path: '/restaurants', icon: Store, label: 'Restaurants' },
    { path: '/orders', icon: ShoppingBag, label: 'Orders' },
    { path: '/payments', icon: CreditCard, label: 'Payments & Finance' },
    { path: '/pricing', icon: TrendingUp, label: 'Pricing & Commission' },
    { path: '/offers', icon: Tag, label: 'Offers & Coupons' },
    { path: '/reviews', icon: Star, label: 'Reviews & Ratings' },
    { path: '/support', icon: MessageCircle, label: 'Customer Support' },
    { path: '/logistics', icon: Truck, label: 'Logistics & Delivery' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics & Reports' },
    { path: '/cms', icon: FileText, label: 'CMS' },
    { path: '/settings', icon: Settings, label: 'System Settings' },
    { path: '/security', icon: Shield, label: 'Security & Compliance' },
  ]

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <Menu className="logo-icon" />
          {isOpen && <span className="logo-text">Taste Exprez</span>}
        </div>
        {isOpen && <span className="admin-badge">Admin Panel</span>}
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPath === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
              title={!isOpen ? item.label : ''}
            >
              <Icon className="nav-icon" size={20} />
              {isOpen && <span className="nav-label">{item.label}</span>}
            </Link>
          )
        })}
      </nav>
      <div className="sidebar-footer">
        <button
          onClick={() => {
            localStorage.removeItem('admin_token')
            window.location.href = '/login'
          }}
          className="logout-btn"
        >
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar

