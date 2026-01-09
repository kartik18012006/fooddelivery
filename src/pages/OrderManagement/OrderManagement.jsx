import { useState } from 'react'
import { Search, Filter, Eye, XCircle, RefreshCw, Truck, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import './OrderManagement.css'

const OrderManagement = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const orders = [
    {
      id: 'ORD-1234',
      customer: 'John Doe',
      restaurant: 'Pizza Place',
      items: 3,
      amount: 450,
      status: 'delivered',
      paymentMethod: 'UPI',
      deliveryPartner: 'Raj Kumar',
      placedAt: '2024-01-08 10:30',
      deliveredAt: '2024-01-08 11:15',
      address: '123 Main St, Mumbai'
    },
    {
      id: 'ORD-1235',
      customer: 'Jane Smith',
      restaurant: 'Burger King',
      items: 2,
      amount: 320,
      status: 'preparing',
      paymentMethod: 'Cash',
      deliveryPartner: 'Amit Singh',
      placedAt: '2024-01-08 11:00',
      deliveredAt: null,
      address: '456 Park Ave, Mumbai'
    },
    {
      id: 'ORD-1236',
      customer: 'Bob Wilson',
      restaurant: 'Chinese Express',
      items: 4,
      amount: 560,
      status: 'picked',
      paymentMethod: 'Card',
      deliveryPartner: 'Vikash Sharma',
      placedAt: '2024-01-08 10:45',
      deliveredAt: null,
      address: '789 Market Rd, Mumbai'
    },
    {
      id: 'ORD-1237',
      customer: 'Alice Brown',
      restaurant: 'North Indian',
      items: 5,
      amount: 780,
      status: 'placed',
      paymentMethod: 'UPI',
      deliveryPartner: null,
      placedAt: '2024-01-08 11:20',
      deliveredAt: null,
      address: '321 Ocean Dr, Mumbai'
    },
    {
      id: 'ORD-1238',
      customer: 'Charlie Davis',
      restaurant: 'Dessert Corner',
      items: 2,
      amount: 240,
      status: 'cancelled',
      paymentMethod: 'UPI',
      deliveryPartner: null,
      placedAt: '2024-01-08 09:30',
      deliveredAt: null,
      address: '654 Hill St, Mumbai'
    },
    {
      id: 'ORD-1239',
      customer: 'Diana Prince',
      restaurant: 'Pizza Place',
      items: 1,
      amount: 199,
      status: 'out_for_delivery',
      paymentMethod: 'Cash',
      deliveryPartner: 'Priya Patel',
      placedAt: '2024-01-08 10:15',
      deliveredAt: null,
      address: '987 Garden Ln, Mumbai'
    },
  ]

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status) => {
    switch (status) {
      case 'placed':
        return <Clock size={14} />
      case 'preparing':
        return <AlertCircle size={14} />
      case 'picked':
        return <Truck size={14} />
      case 'out_for_delivery':
        return <Truck size={14} />
      case 'delivered':
        return <CheckCircle size={14} />
      case 'cancelled':
        return <XCircle size={14} />
      default:
        return null
    }
  }

  return (
    <div className="order-management">
      <div className="page-header">
        <h1>Order Management</h1>
        <div className="header-stats">
          <div className="stat-badge">
            <span>Total Orders: {orders.length}</span>
          </div>
          <div className="stat-badge success">
            <span>Delivered: {orders.filter(o => o.status === 'delivered').length}</span>
          </div>
          <div className="stat-badge warning">
            <span>In Progress: {orders.filter(o => ['placed', 'preparing', 'picked', 'out_for_delivery'].includes(o.status)).length}</span>
          </div>
          <div className="stat-badge danger">
            <span>Cancelled: {orders.filter(o => o.status === 'cancelled').length}</span>
          </div>
        </div>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search by order ID, customer, or restaurant..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="status-filters">
          <button 
            className={`filter-chip ${statusFilter === 'all' ? 'active' : ''}`}
            onClick={() => setStatusFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-chip ${statusFilter === 'placed' ? 'active' : ''}`}
            onClick={() => setStatusFilter('placed')}
          >
            Placed
          </button>
          <button 
            className={`filter-chip ${statusFilter === 'preparing' ? 'active' : ''}`}
            onClick={() => setStatusFilter('preparing')}
          >
            Preparing
          </button>
          <button 
            className={`filter-chip ${statusFilter === 'picked' ? 'active' : ''}`}
            onClick={() => setStatusFilter('picked')}
          >
            Picked
          </button>
          <button 
            className={`filter-chip ${statusFilter === 'out_for_delivery' ? 'active' : ''}`}
            onClick={() => setStatusFilter('out_for_delivery')}
          >
            Out for Delivery
          </button>
          <button 
            className={`filter-chip ${statusFilter === 'delivered' ? 'active' : ''}`}
            onClick={() => setStatusFilter('delivered')}
          >
            Delivered
          </button>
          <button 
            className={`filter-chip ${statusFilter === 'cancelled' ? 'active' : ''}`}
            onClick={() => setStatusFilter('cancelled')}
          >
            Cancelled
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Restaurant</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Delivery Partner</th>
              <th>Placed At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <span className="order-id">{order.id}</span>
                </td>
                <td>{order.customer}</td>
                <td>{order.restaurant}</td>
                <td>{order.items}</td>
                <td>
                  <span className="amount">₹{order.amount}</span>
                </td>
                <td>
                  <span className="payment-badge">{order.paymentMethod}</span>
                </td>
                <td>
                  <span className={`status-badge ${order.status}`}>
                    {getStatusIcon(order.status)}
                    {order.status.replace('_', ' ')}
                  </span>
                </td>
                <td>
                  {order.deliveryPartner || <span className="text-muted">Not assigned</span>}
                </td>
                <td>
                  <div className="time-cell">
                    <div>{order.placedAt.split(' ')[0]}</div>
                    <div className="small-text">{order.placedAt.split(' ')[1]}</div>
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="icon-btn" title="View Details">
                      <Eye size={16} />
                    </button>
                    {order.status === 'placed' && (
                      <button className="icon-btn danger" title="Cancel Order">
                        <XCircle size={16} />
                      </button>
                    )}
                    {['preparing', 'picked'].includes(order.status) && (
                      <button className="icon-btn" title="Assign Delivery Partner">
                        <Truck size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderManagement
