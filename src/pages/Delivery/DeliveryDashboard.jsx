import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Truck, MapPin, Clock, DollarSign, TrendingUp, CheckCircle, XCircle,
  Navigation, LogOut, Package, User
} from 'lucide-react'
import './DeliveryDashboard.css'

const DeliveryDashboard = () => {
  const navigate = useNavigate()
  const [isAvailable, setIsAvailable] = useState(true)

  // Mock data
  const stats = {
    todayDeliveries: 12,
    todayEarnings: 2400,
    activeOrders: 2,
    rating: 4.8
  }

  const availableOrders = [
    {
      id: 'ORD-001',
      restaurant: 'Pizza Place',
      customer: 'John Doe',
      pickupAddress: '123 Restaurant St, Mumbai',
      deliveryAddress: '456 Customer Ave, Mumbai',
      distance: '3.2 km',
      amount: 450,
      tip: 50,
      estimatedTime: '25 mins'
    },
    {
      id: 'ORD-002',
      restaurant: 'Burger King',
      customer: 'Jane Smith',
      pickupAddress: '789 Food Court, Mumbai',
      deliveryAddress: '321 Home Lane, Mumbai',
      distance: '4.5 km',
      amount: 320,
      tip: 30,
      estimatedTime: '35 mins'
    },
  ]

  const activeDeliveries = [
    {
      id: 'ORD-003',
      restaurant: 'Chinese Express',
      customer: 'Bob Wilson',
      pickupAddress: '111 Main St, Mumbai',
      deliveryAddress: '222 Park Rd, Mumbai',
      status: 'picked',
      stage: 'En route to customer'
    },
    {
      id: 'ORD-004',
      restaurant: 'North Indian',
      customer: 'Alice Brown',
      pickupAddress: '333 Market St, Mumbai',
      deliveryAddress: '444 Garden Ave, Mumbai',
      status: 'at_restaurant',
      stage: 'Pickup from restaurant'
    },
  ]

  const recentDeliveries = [
    { id: 'ORD-005', customer: 'Charlie Davis', amount: 280, earnings: 85, date: '2 hours ago', rating: 5 },
    { id: 'ORD-006', customer: 'Diana Prince', amount: 540, earnings: 95, date: '3 hours ago', rating: 4 },
    { id: 'ORD-007', customer: 'Eve Johnson', amount: 199, earnings: 75, date: '4 hours ago', rating: 5 },
  ]

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('user_type')
    window.location.href = '/login'
  }

  return (
    <div className="delivery-dashboard">
      <header className="delivery-header">
        <div className="header-left">
          <div className="profile-info">
            <div className="avatar-large">DP</div>
            <div>
              <h1>Delivery Partner</h1>
              <p className="partner-rating">★ {stats.rating} Rating</p>
            </div>
          </div>
          <div className="status-toggle">
            <span className={`status-indicator ${isAvailable ? 'available' : 'unavailable'}`}>
              {isAvailable ? 'Available' : 'Unavailable'}
            </span>
            <button
              className="toggle-btn"
              onClick={() => setIsAvailable(!isAvailable)}
            >
              {isAvailable ? 'Go Unavailable' : 'Go Available'}
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
              <Package size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Today's Deliveries</p>
              <p className="stat-value">{stats.todayDeliveries}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--light-green)' }}>
              <DollarSign size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Today's Earnings</p>
              <p className="stat-value">₹{stats.todayEarnings.toLocaleString()}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)', color: 'var(--warning)' }}>
              <Clock size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Active Orders</p>
              <p className="stat-value">{stats.activeOrders}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(33, 150, 243, 0.1)', color: '#2196F3' }}>
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Rating</p>
              <p className="stat-value">★ {stats.rating}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Available Orders */}
          <div className="orders-section">
            <div className="section-header">
              <h2>Available Orders</h2>
            </div>
            <div className="orders-list">
              {availableOrders.map((order) => (
                <div key={order.id} className="order-card available">
                  <div className="order-header">
                    <span className="order-id">{order.id}</span>
                    <span className="order-distance">{order.distance} • {order.estimatedTime}</span>
                  </div>
                  <div className="order-restaurant">
                    <Package size={16} />
                    <span>{order.restaurant}</span>
                  </div>
                  <div className="order-addresses">
                    <div className="address-item">
                      <MapPin size={14} />
                      <div>
                        <span className="address-label">Pickup:</span>
                        <span className="address-text">{order.pickupAddress}</span>
                      </div>
                    </div>
                    <div className="address-item">
                      <User size={14} />
                      <div>
                        <span className="address-label">Delivery:</span>
                        <span className="address-text">{order.deliveryAddress}</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-payment">
                    <div>
                      <span>Order: ₹{order.amount}</span>
                      <span>•</span>
                      <span>Tip: ₹{order.tip}</span>
                    </div>
                    <span className="total-earnings">Total: ₹{order.amount + order.tip}</span>
                  </div>
                  <div className="order-actions">
                    <button className="action-btn accept">
                      <CheckCircle size={16} />
                      Accept
                    </button>
                    <button className="action-btn reject">
                      <XCircle size={16} />
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Deliveries */}
          <div className="active-section">
            <div className="section-header">
              <h2>Active Deliveries</h2>
            </div>
            <div className="active-list">
              {activeDeliveries.map((order) => (
                <div key={order.id} className="delivery-card">
                  <div className="delivery-header">
                    <span className="order-id">{order.id}</span>
                    <span className={`status-badge ${order.status}`}>
                      {order.stage}
                    </span>
                  </div>
                  <div className="delivery-info">
                    <p className="restaurant-name">{order.restaurant}</p>
                    <p className="customer-name">{order.customer}</p>
                  </div>
                  <div className="delivery-addresses">
                    <div className="address-item">
                      <MapPin size={14} />
                      <span>{order.pickupAddress}</span>
                    </div>
                    <div className="address-item">
                      <User size={14} />
                      <span>{order.deliveryAddress}</span>
                    </div>
                  </div>
                  <div className="delivery-actions">
                    <button className="action-btn navigate">
                      <Navigation size={16} />
                      Navigate
                    </button>
                    {order.status === 'picked' && (
                      <button className="action-btn delivered">
                        <CheckCircle size={16} />
                        Mark Delivered
                      </button>
                    )}
                    {order.status === 'at_restaurant' && (
                      <button className="action-btn picked">
                        <Package size={16} />
                        Mark Picked
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Deliveries */}
            <div className="recent-section">
              <div className="section-header">
                <h3>Recent Deliveries</h3>
              </div>
              <div className="recent-list">
                {recentDeliveries.map((delivery) => (
                  <div key={delivery.id} className="recent-item">
                    <div>
                      <span className="order-id-small">{delivery.id}</span>
                      <span className="customer-small">{delivery.customer}</span>
                    </div>
                    <div className="recent-meta">
                      <span>₹{delivery.earnings}</span>
                      <span className="rating">★ {delivery.rating}</span>
                      <span className="time">{delivery.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryDashboard

