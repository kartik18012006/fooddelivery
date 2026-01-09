import { useState } from 'react'
import {
  TrendingUp,
  ShoppingBag,
  Users,
  Store,
  DollarSign,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './Dashboard.css'

const Dashboard = () => {
  const [stats, setStats] = useState({
    ordersToday: 1247,
    ordersWeek: 8734,
    ordersMonth: 34256,
    gmv: 2450000,
    activeUsers: 15420,
    activeRestaurants: 342,
    activeDeliveryPartners: 1240,
    cancelledOrders: 89,
    failedOrders: 12
  })

  const [recentOrders, setRecentOrders] = useState([
    { id: 'ORD-1234', customer: 'John Doe', restaurant: 'Pizza Place', amount: 450, status: 'delivered', time: '2 mins ago' },
    { id: 'ORD-1235', customer: 'Jane Smith', restaurant: 'Burger King', amount: 320, status: 'preparing', time: '5 mins ago' },
    { id: 'ORD-1236', customer: 'Bob Wilson', restaurant: 'Chinese Express', amount: 280, status: 'picked', time: '8 mins ago' },
    { id: 'ORD-1237', customer: 'Alice Brown', restaurant: 'North Indian', amount: 540, status: 'placed', time: '12 mins ago' },
  ])

  const orderData = [
    { name: 'Mon', orders: 4000, revenue: 2400 },
    { name: 'Tue', orders: 3000, revenue: 1398 },
    { name: 'Wed', orders: 2000, revenue: 9800 },
    { name: 'Thu', orders: 2780, revenue: 3908 },
    { name: 'Fri', orders: 1890, revenue: 4800 },
    { name: 'Sat', orders: 2390, revenue: 3800 },
    { name: 'Sun', orders: 3490, revenue: 4300 },
  ]

  const topRestaurants = [
    { name: 'Pizza Place', orders: 234, revenue: 105300 },
    { name: 'Burger King', orders: 189, revenue: 60480 },
    { name: 'Chinese Express', orders: 156, revenue: 43680 },
    { name: 'North Indian', orders: 145, revenue: 78300 },
    { name: 'Dessert Corner', orders: 128, revenue: 35840 },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="time-filter">
          <button className="filter-btn active">Today</button>
          <button className="filter-btn">Week</button>
          <button className="filter-btn">Month</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--primary-green)' }}>
            <ShoppingBag size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Orders Today</p>
            <p className="stat-value">{stats.ordersToday.toLocaleString()}</p>
            <p className="stat-change positive">+12.5% vs yesterday</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--light-green)' }}>
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">GMV</p>
            <p className="stat-value">₹{stats.gmv.toLocaleString()}</p>
            <p className="stat-change positive">+8.3% vs yesterday</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)', color: 'var(--warning)' }}>
            <Users size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Active Users</p>
            <p className="stat-value">{stats.activeUsers.toLocaleString()}</p>
            <p className="stat-change positive">+5.2% vs yesterday</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(33, 150, 243, 0.1)', color: '#2196F3' }}>
            <Store size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Active Restaurants</p>
            <p className="stat-value">{stats.activeRestaurants}</p>
            <p className="stat-change neutral">No change</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(156, 39, 176, 0.1)', color: '#9C27B0' }}>
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Orders (Week)</p>
            <p className="stat-value">{stats.ordersWeek.toLocaleString()}</p>
            <p className="stat-change positive">+15.7% vs last week</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(229, 57, 53, 0.1)', color: 'var(--red)' }}>
            <XCircle size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Cancelled Orders</p>
            <p className="stat-value">{stats.cancelledOrders}</p>
            <p className="stat-change negative">-3.2% vs yesterday</p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        <div className="chart-card">
          <h3>Orders & Revenue (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#2E7D32" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="#4CAF50" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Top Restaurants (Today)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topRestaurants}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#2E7D32" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Live Orders & Alerts */}
      <div className="bottom-row">
        <div className="live-orders-card">
          <div className="card-header">
            <h3>Live Orders</h3>
            <span className="live-badge">
              <span className="pulse"></span>
              Live
            </span>
          </div>
          <div className="orders-list">
            {recentOrders.map((order) => (
              <div key={order.id} className="order-item">
                <div className="order-info">
                  <div className="order-id">{order.id}</div>
                  <div className="order-details">
                    <span>{order.customer}</span>
                    <span>•</span>
                    <span>{order.restaurant}</span>
                  </div>
                </div>
                <div className="order-meta">
                  <span className="order-amount">₹{order.amount}</span>
                  <span className={`order-status ${order.status}`}>
                    {order.status === 'delivered' && <CheckCircle size={14} />}
                    {order.status === 'preparing' && <Clock size={14} />}
                    {order.status === 'picked' && <Clock size={14} />}
                    {order.status === 'placed' && <AlertTriangle size={14} />}
                    {order.status}
                  </span>
                  <span className="order-time">{order.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="alerts-card">
          <div className="card-header">
            <h3>Alerts & Notifications</h3>
          </div>
          <div className="alerts-list">
            <div className="alert-item warning">
              <AlertTriangle size={16} />
              <div>
                <p>High cancellation rate in Zone 5</p>
                <span>15% cancellation rate (threshold: 10%)</span>
              </div>
            </div>
            <div className="alert-item info">
              <Clock size={16} />
              <div>
                <p>Delivery delays reported</p>
                <span>23 orders delayed by >30 mins</span>
              </div>
            </div>
            <div className="alert-item success">
              <CheckCircle size={16} />
              <div>
                <p>New restaurant onboarding</p>
                <span>3 restaurants pending approval</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

