import { useState } from 'react'
import { Users, UserCheck, Shield, Search, Filter, MoreVertical, Ban, CheckCircle, XCircle, Eye } from 'lucide-react'
import './UserManagement.css'

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('customers')
  const [searchQuery, setSearchQuery] = useState('')

  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+91 98765 43210', orders: 24, totalSpent: 12500, status: 'active', joinedDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+91 98765 43211', orders: 45, totalSpent: 23400, status: 'active', joinedDate: '2023-12-20' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', phone: '+91 98765 43212', orders: 12, totalSpent: 5600, status: 'blocked', joinedDate: '2024-02-01' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '+91 98765 43213', orders: 67, totalSpent: 34500, status: 'active', joinedDate: '2023-11-10' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', phone: '+91 98765 43214', orders: 8, totalSpent: 3200, status: 'suspended', joinedDate: '2024-03-05' },
  ]

  const deliveryPartners = [
    { id: 1, name: 'Raj Kumar', phone: '+91 98765 43220', vehicle: 'Bike', rating: 4.8, totalDeliveries: 245, earnings: 45600, status: 'online', kycStatus: 'verified' },
    { id: 2, name: 'Amit Singh', phone: '+91 98765 43221', vehicle: 'Bike', rating: 4.5, totalDeliveries: 189, earnings: 34200, status: 'offline', kycStatus: 'verified' },
    { id: 3, name: 'Vikash Sharma', phone: '+91 98765 43222', vehicle: 'Scooter', rating: 4.2, totalDeliveries: 156, earnings: 28900, status: 'online', kycStatus: 'pending' },
    { id: 4, name: 'Priya Patel', phone: '+91 98765 43223', vehicle: 'Bike', rating: 4.9, totalDeliveries: 312, earnings: 56700, status: 'online', kycStatus: 'verified' },
    { id: 5, name: 'Rahul Verma', phone: '+91 98765 43224', vehicle: 'Bike', rating: 3.8, totalDeliveries: 98, earnings: 18700, status: 'suspended', kycStatus: 'verified' },
  ]

  const admins = [
    { id: 1, name: 'Super Admin', email: 'admin@tasteexprez.com', role: 'Super Admin', permissions: 'All', lastLogin: '2024-01-08 10:30', status: 'active' },
    { id: 2, name: 'Ops Manager', email: 'ops@tasteexprez.com', role: 'Operations', permissions: 'Orders, Restaurants, Logistics', lastLogin: '2024-01-08 09:15', status: 'active' },
    { id: 3, name: 'Finance Head', email: 'finance@tasteexprez.com', role: 'Finance', permissions: 'Payments, Settlements, Reports', lastLogin: '2024-01-08 08:45', status: 'active' },
    { id: 4, name: 'Support Lead', email: 'support@tasteexprez.com', role: 'Support', permissions: 'Tickets, Users, Reviews', lastLogin: '2024-01-07 18:20', status: 'active' },
  ]

  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredPartners = deliveryPartners.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.phone.includes(searchQuery)
  )

  return (
    <div className="user-management">
      <div className="page-header">
        <h1>User Management</h1>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <Filter size={18} />
            Filters
          </button>
        </div>
      </div>

      <div className="tabs">
        <button className={activeTab === 'customers' ? 'active' : ''} onClick={() => setActiveTab('customers')}>
          <Users size={18} />
          Customers ({customers.length})
        </button>
        <button className={activeTab === 'delivery' ? 'active' : ''} onClick={() => setActiveTab('delivery')}>
          <UserCheck size={18} />
          Delivery Partners ({deliveryPartners.length})
        </button>
        <button className={activeTab === 'admins' ? 'active' : ''} onClick={() => setActiveTab('admins')}>
          <Shield size={18} />
          Admin Roles ({admins.length})
        </button>
      </div>

      <div className="content-area">
        {activeTab === 'customers' && (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Orders</th>
                  <th>Total Spent</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <div className="user-cell">
                        <div className="avatar-small">{customer.name[0]}</div>
                        <span>{customer.name}</span>
                      </div>
                    </td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.orders}</td>
                    <td>₹{customer.totalSpent.toLocaleString()}</td>
                    <td>
                      <span className={`status-badge ${customer.status}`}>
                        {customer.status === 'active' && <CheckCircle size={14} />}
                        {customer.status === 'blocked' && <XCircle size={14} />}
                        {customer.status === 'suspended' && <Ban size={14} />}
                        {customer.status}
                      </span>
                    </td>
                    <td>{customer.joinedDate}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="icon-btn" title="View Details">
                          <Eye size={16} />
                        </button>
                        <button className="icon-btn" title="More Options">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'delivery' && (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Vehicle</th>
                  <th>Rating</th>
                  <th>Deliveries</th>
                  <th>Earnings</th>
                  <th>KYC Status</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPartners.map((partner) => (
                  <tr key={partner.id}>
                    <td>
                      <div className="user-cell">
                        <div className="avatar-small">{partner.name[0]}</div>
                        <span>{partner.name}</span>
                      </div>
                    </td>
                    <td>{partner.phone}</td>
                    <td>{partner.vehicle}</td>
                    <td>
                      <div className="rating-cell">
                        <span className="star">★</span>
                        {partner.rating}
                      </div>
                    </td>
                    <td>{partner.totalDeliveries}</td>
                    <td>₹{partner.earnings.toLocaleString()}</td>
                    <td>
                      <span className={`status-badge ${partner.kycStatus}`}>
                        {partner.kycStatus}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${partner.status}`}>
                        {partner.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="icon-btn">
                          <Eye size={16} />
                        </button>
                        <button className="icon-btn">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'admins' && (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Permissions</th>
                  <th>Last Login</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id}>
                    <td>
                      <div className="user-cell">
                        <div className="avatar-small">{admin.name[0]}</div>
                        <span>{admin.name}</span>
                      </div>
                    </td>
                    <td>{admin.email}</td>
                    <td><span className="role-badge">{admin.role}</span></td>
                    <td className="permissions-cell">{admin.permissions}</td>
                    <td>{admin.lastLogin}</td>
                    <td>
                      <span className="status-badge active">
                        <CheckCircle size={14} />
                        {admin.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="icon-btn">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserManagement
