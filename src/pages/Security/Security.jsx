import { useState } from 'react'
import { Shield, FileText, AlertTriangle, Search, Download } from 'lucide-react'
import './Security.css'

const Security = () => {
  const [activeTab, setActiveTab] = useState('audit')

  const auditLogs = [
    { id: 1, user: 'Admin User', action: 'Updated restaurant commission', target: 'Pizza Place', timestamp: '2024-01-08 10:30:25', ip: '192.168.1.100' },
    { id: 2, user: 'Ops Manager', action: 'Cancelled order', target: 'ORD-1238', timestamp: '2024-01-08 09:45:12', ip: '192.168.1.101' },
    { id: 3, user: 'Finance Head', action: 'Processed settlement', target: 'Restaurant: Pizza Place', timestamp: '2024-01-08 08:20:05', ip: '192.168.1.102' },
    { id: 4, user: 'Support Lead', action: 'Blocked user', target: 'User: Charlie Davis', timestamp: '2024-01-07 18:15:30', ip: '192.168.1.103' },
    { id: 5, user: 'Admin User', action: 'Created coupon', target: 'FLAT50', timestamp: '2024-01-07 15:30:00', ip: '192.168.1.100' },
  ]

  const fraudAlerts = [
    { id: 1, type: 'Suspicious Order Pattern', user: 'User ID: 12345', description: 'Multiple failed payment attempts', severity: 'High', date: '2024-01-08 11:00', status: 'Pending' },
    { id: 2, type: 'Unusual Activity', user: 'User ID: 67890', description: 'Multiple accounts from same device', severity: 'Medium', date: '2024-01-08 09:30', status: 'Investigated' },
    { id: 3, type: 'Potential Fraud', user: 'Order ID: ORD-1234', description: 'Address mismatch detected', severity: 'High', date: '2024-01-07 16:20', status: 'Resolved' },
  ]

  const dataRequests = [
    { id: 1, user: 'john@example.com', type: 'Data Export', requested: '2024-01-08', status: 'Pending', dueDate: '2024-01-15' },
    { id: 2, user: 'jane@example.com', type: 'Account Deletion', requested: '2024-01-07', status: 'Processing', dueDate: '2024-01-14' },
    { id: 3, user: 'bob@example.com', type: 'Data Export', requested: '2024-01-06', status: 'Completed', dueDate: '2024-01-13' },
  ]

  return (
    <div className="security-page">
      <div className="page-header">
        <h1>Security & Compliance</h1>
        <button className="export-btn">
          <Download size={18} />
          Export Logs
        </button>
      </div>

      <div className="tabs">
        <button className={activeTab === 'audit' ? 'active' : ''} onClick={() => setActiveTab('audit')}>
          <FileText size={18} />
          Audit Logs
        </button>
        <button className={activeTab === 'fraud' ? 'active' : ''} onClick={() => setActiveTab('fraud')}>
          <AlertTriangle size={18} />
          Fraud Detection
        </button>
        <button className={activeTab === 'compliance' ? 'active' : ''} onClick={() => setActiveTab('compliance')}>
          <Shield size={18} />
          GDPR & Compliance
        </button>
      </div>

      {activeTab === 'audit' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
                <th>Target</th>
                <th>IP Address</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.timestamp}</td>
                  <td>{log.user}</td>
                  <td>{log.action}</td>
                  <td>{log.target}</td>
                  <td><span className="ip-address">{log.ip}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'fraud' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Alert Type</th>
                <th>User/Order</th>
                <th>Description</th>
                <th>Severity</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fraudAlerts.map((alert) => (
                <tr key={alert.id}>
                  <td>{alert.type}</td>
                  <td>{alert.user}</td>
                  <td>{alert.description}</td>
                  <td>
                    <span className={`severity-badge ${alert.severity.toLowerCase()}`}>
                      {alert.severity}
                    </span>
                  </td>
                  <td>{alert.date}</td>
                  <td>
                    <span className={`status-badge ${alert.status.toLowerCase()}`}>
                      {alert.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-link">Investigate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'compliance' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>User Email</th>
                <th>Request Type</th>
                <th>Requested On</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.user}</td>
                  <td>{request.type}</td>
                  <td>{request.requested}</td>
                  <td>{request.dueDate}</td>
                  <td>
                    <span className={`status-badge ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-link">Process</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Security
