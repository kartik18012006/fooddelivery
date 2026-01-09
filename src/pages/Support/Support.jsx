import { useState } from 'react'
import { MessageCircle, Search, Filter, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react'
import './Support.css'

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const tickets = [
    { id: 'TKT-001', customer: 'John Doe', email: 'john@example.com', subject: 'Order not delivered', category: 'Delivery Issue', priority: 'High', status: 'open', assignedTo: 'Support Agent 1', createdAt: '2024-01-08 10:30', lastUpdated: '2024-01-08 11:00', messages: 3 },
    { id: 'TKT-002', customer: 'Jane Smith', email: 'jane@example.com', subject: 'Refund not received', category: 'Refund', priority: 'Medium', status: 'in_progress', assignedTo: 'Support Agent 2', createdAt: '2024-01-08 09:15', lastUpdated: '2024-01-08 10:45', messages: 5 },
    { id: 'TKT-003', customer: 'Bob Wilson', email: 'bob@example.com', subject: 'Wrong item delivered', category: 'Order Issue', priority: 'High', status: 'resolved', assignedTo: 'Support Agent 1', createdAt: '2024-01-07 18:30', lastUpdated: '2024-01-08 08:00', messages: 4 },
    { id: 'TKT-004', customer: 'Alice Brown', email: 'alice@example.com', subject: 'Payment failed', category: 'Payment Issue', priority: 'Low', status: 'open', assignedTo: 'Unassigned', createdAt: '2024-01-08 11:15', lastUpdated: '2024-01-08 11:15', messages: 1 },
    { id: 'TKT-005', customer: 'Charlie Davis', email: 'charlie@example.com', subject: 'Food quality complaint', category: 'Quality Issue', priority: 'Medium', status: 'closed', assignedTo: 'Support Agent 3', createdAt: '2024-01-06 14:20', lastUpdated: '2024-01-07 16:00', messages: 6 },
  ]

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = 
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in_progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length,
    closed: tickets.filter(t => t.status === 'closed').length
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open':
        return <AlertCircle size={14} />
      case 'in_progress':
        return <Clock size={14} />
      case 'resolved':
        return <CheckCircle size={14} />
      case 'closed':
        return <XCircle size={14} />
      default:
        return null
    }
  }

  return (
    <div className="support-page">
      <div className="page-header">
        <h1>Customer Support Tools</h1>
        <div className="header-stats">
          <div className="stat-badge">
            <span>Total: {stats.total}</span>
          </div>
          <div className="stat-badge warning">
            <span>Open: {stats.open}</span>
          </div>
          <div className="stat-badge info">
            <span>In Progress: {stats.inProgress}</span>
          </div>
          <div className="stat-badge success">
            <span>Resolved: {stats.resolved}</span>
          </div>
        </div>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="status-filters">
          <button className={`filter-chip ${statusFilter === 'all' ? 'active' : ''}`} onClick={() => setStatusFilter('all')}>
            All
          </button>
          <button className={`filter-chip ${statusFilter === 'open' ? 'active' : ''}`} onClick={() => setStatusFilter('open')}>
            Open ({stats.open})
          </button>
          <button className={`filter-chip ${statusFilter === 'in_progress' ? 'active' : ''}`} onClick={() => setStatusFilter('in_progress')}>
            In Progress ({stats.inProgress})
          </button>
          <button className={`filter-chip ${statusFilter === 'resolved' ? 'active' : ''}`} onClick={() => setStatusFilter('resolved')}>
            Resolved ({stats.resolved})
          </button>
          <button className={`filter-chip ${statusFilter === 'closed' ? 'active' : ''}`} onClick={() => setStatusFilter('closed')}>
            Closed ({stats.closed})
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Customer</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Messages</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td><span className="ticket-id">{ticket.id}</span></td>
                <td>
                  <div>
                    <div>{ticket.customer}</div>
                    <div className="small-text">{ticket.email}</div>
                  </div>
                </td>
                <td>{ticket.subject}</td>
                <td><span className="category-badge">{ticket.category}</span></td>
                <td>
                  <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${ticket.status}`}>
                    {getStatusIcon(ticket.status)}
                    {ticket.status.replace('_', ' ')}
                  </span>
                </td>
                <td>{ticket.assignedTo}</td>
                <td>
                  <span className="message-count">{ticket.messages}</span>
                </td>
                <td>
                  <div className="time-cell">
                    <div>{ticket.createdAt.split(' ')[0]}</div>
                    <div className="small-text">{ticket.createdAt.split(' ')[1]}</div>
                  </div>
                </td>
                <td>
                  <button className="action-link">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Support
