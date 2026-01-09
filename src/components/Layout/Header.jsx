import { Bell, Search, Menu as MenuIcon } from 'lucide-react'
import './Header.css'

const Header = ({ onToggleSidebar, onLogout }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={onToggleSidebar}>
          <MenuIcon size={24} />
        </button>
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="badge">3</span>
        </button>
        <div className="user-profile">
          <div className="avatar">A</div>
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

