import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Store, ShoppingBag, TrendingUp, DollarSign, Clock, Plus, Edit, Trash2,
  ToggleRight, ToggleLeft, LogOut, Menu as MenuIcon, Package
} from 'lucide-react'
import './RestaurantDashboard.css'

const RestaurantDashboard = () => {
  const navigate = useNavigate()
  const [isOnline, setIsOnline] = useState(true)

  // Mock data
  const stats = {
    todayOrders: 24,
    todayRevenue: 12500,
    pendingOrders: 5,
    activeMenuItems: 45
  }

  const orders = [
    { id: 'ORD-001', customer: 'John Doe', items: 3, amount: 450, status: 'preparing', time: '5 mins ago', address: '123 Main St' },
    { id: 'ORD-002', customer: 'Jane Smith', items: 2, amount: 320, status: 'ready', time: '2 mins ago', address: '456 Park Ave' },
    { id: 'ORD-003', customer: 'Bob Wilson', items: 4, amount: 560, status: 'preparing', time: '8 mins ago', address: '789 Market Rd' },
    { id: 'ORD-004', customer: 'Alice Brown', items: 1, amount: 199, status: 'new', time: '1 min ago', address: '321 Ocean Dr' },
  ]

  const menuItems = [
    { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 199, status: 'available', orders: 45 },
    { id: 2, name: 'Pepperoni Pizza', category: 'Pizza', price: 249, status: 'available', orders: 32 },
    { id: 3, name: 'Garlic Bread', category: 'Sides', price: 99, status: 'unavailable', orders: 28 },
    { id: 4, name: 'Caesar Salad', category: 'Salads', price: 149, status: 'available', orders: 15 },
  ]

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('user_type')
    window.location.href = '/login'
  }

  return (
    <div className="restaurant-dashboard">
      <header className="restaurant-header">
        <div className="header-left">
          <h1>🍽️ Pizza Place</h1>
          <div className="status-toggle">
            <span className={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
              {isOnline ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <button
              className="toggle-btn"
              onClick={() => setIsOnline(!isOnline)}
            >
              {isOnline ? 'Go Offline' : 'Go Online'}
            </button>
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={18} />
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--primary-green)' }}>
              <ShoppingBag size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Today's Orders</p>
              <p className="stat-value">{stats.todayOrders}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--light-green)' }}>
              <DollarSign size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Today's Revenue</p>
              <p className="stat-value">₹{stats.todayRevenue.toLocaleString()}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)', color: 'var(--warning)' }}>
              <Clock size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Pending Orders</p>
              <p className="stat-value">{stats.pendingOrders}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(33, 150, 243, 0.1)', color: '#2196F3' }}>
              <MenuIcon size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Menu Items</p>
              <p className="stat-value">{stats.activeMenuItems}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Orders Section */}
          <div className="orders-section">
            <div className="section-header">
              <h2>Recent Orders</h2>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div>
                      <span className="order-id">{order.id}</span>
                      <span className="order-time">{order.time}</span>
                    </div>
                    <span className={`order-status-badge ${order.status}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <p className="customer-name">{order.customer}</p>
                    <p className="order-info">{order.items} items • ₹{order.amount}</p>
                    <p className="order-address">📍 {order.address}</p>
                  </div>
                  <div className="order-actions">
                    {order.status === 'new' && (
                      <button className="action-btn accept">Accept Order</button>
                    )}
                    {order.status === 'preparing' && (
                      <button className="action-btn ready">Mark Ready</button>
                    )}
                    {order.status === 'ready' && (
                      <span className="ready-label">Waiting for pickup</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Management */}
          <div className="menu-section">
            <div className="section-header">
              <h2>Menu Management</h2>
              <button className="primary-btn">
                <Plus size={18} />
                Add Item
              </button>
            </div>
            <div className="menu-list">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item-card">
                  <div className="menu-item-info">
                    <div className="menu-item-name">{item.name}</div>
                    <div className="menu-item-meta">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span>₹{item.price}</span>
                      <span>•</span>
                      <span>{item.orders} orders</span>
                    </div>
                  </div>
                  <div className="menu-item-actions">
                    <span className={`availability-badge ${item.status}`}>
                      {item.status === 'available' ? 'Available' : 'Unavailable'}
                    </span>
                    <button className="icon-btn" title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className="icon-btn danger" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantDashboard

