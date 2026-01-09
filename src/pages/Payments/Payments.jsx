import { useState } from 'react'
import { CreditCard, DollarSign, TrendingUp, Download, Search, Filter } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './Payments.css'

const Payments = () => {
  const [activeTab, setActiveTab] = useState('transactions')

  const transactions = [
    { id: 'TXN-001', orderId: 'ORD-1234', customer: 'John Doe', amount: 450, method: 'UPI', status: 'success', date: '2024-01-08 10:30', gateway: 'Razorpay' },
    { id: 'TXN-002', orderId: 'ORD-1235', customer: 'Jane Smith', amount: 320, method: 'Cash', status: 'pending', date: '2024-01-08 11:00', gateway: 'COD' },
    { id: 'TXN-003', orderId: 'ORD-1236', customer: 'Bob Wilson', amount: 560, method: 'Card', status: 'success', date: '2024-01-08 10:45', gateway: 'Stripe' },
    { id: 'TXN-004', orderId: 'ORD-1237', customer: 'Alice Brown', amount: 780, method: 'UPI', status: 'failed', date: '2024-01-08 11:20', gateway: 'Razorpay' },
    { id: 'TXN-005', orderId: 'ORD-1238', customer: 'Charlie Davis', amount: 240, method: 'Wallet', status: 'refunded', date: '2024-01-08 09:30', gateway: 'Internal' },
  ]

  const settlements = [
    { id: 1, restaurant: 'Pizza Place', period: '2024-01-01 to 2024-01-07', orders: 234, grossAmount: 105300, commission: 15795, netAmount: 89505, status: 'paid', paidDate: '2024-01-08' },
    { id: 2, restaurant: 'Burger King', period: '2024-01-01 to 2024-01-07', orders: 189, grossAmount: 60480, commission: 10886, netAmount: 49594, status: 'pending', paidDate: '-' },
    { id: 3, restaurant: 'Chinese Express', period: '2024-01-01 to 2024-01-07', orders: 156, grossAmount: 43680, commission: 7426, netAmount: 36254, status: 'paid', paidDate: '2024-01-08' },
    { id: 4, restaurant: 'North Indian', period: '2024-01-01 to 2024-01-07', orders: 145, grossAmount: 78300, commission: 12528, netAmount: 65772, status: 'processing', paidDate: '-' },
  ]

  const deliveryPayouts = [
    { id: 1, partner: 'Raj Kumar', deliveries: 45, earnings: 6750, bonus: 500, total: 7250, status: 'paid', paidDate: '2024-01-08' },
    { id: 2, partner: 'Amit Singh', deliveries: 38, earnings: 5700, bonus: 300, total: 6000, status: 'pending', paidDate: '-' },
    { id: 3, partner: 'Vikash Sharma', deliveries: 32, earnings: 4800, bonus: 200, total: 5000, status: 'paid', paidDate: '2024-01-08' },
    { id: 4, partner: 'Priya Patel', deliveries: 52, earnings: 7800, bonus: 600, total: 8400, status: 'paid', paidDate: '2024-01-08' },
  ]

  const paymentData = [
    { name: 'Mon', online: 45000, cash: 12000 },
    { name: 'Tue', online: 52000, cash: 15000 },
    { name: 'Wed', online: 48000, cash: 14000 },
    { name: 'Thu', online: 61000, cash: 18000 },
    { name: 'Fri', online: 55000, cash: 16000 },
    { name: 'Sat', online: 67000, cash: 20000 },
    { name: 'Sun', online: 72000, cash: 22000 },
  ]

  const stats = {
    totalRevenue: 2450000,
    onlinePayments: 1845000,
    cashPayments: 605000,
    failedTransactions: 45,
    refunds: 12,
    pendingSettlements: 149366
  }

  return (
    <div className="payments-page">
      <div className="page-header">
        <h1>Payments & Finance</h1>
        <button className="export-btn">
          <Download size={18} />
          Export Report
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--primary-green)' }}>
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Revenue</p>
            <p className="stat-value">₹{stats.totalRevenue.toLocaleString()}</p>
            <p className="stat-change positive">+12.5% vs last week</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--light-green)' }}>
            <CreditCard size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Online Payments</p>
            <p className="stat-value">₹{stats.onlinePayments.toLocaleString()}</p>
            <p className="stat-change positive">75.3% of total</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)', color: 'var(--warning)' }}>
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Cash Payments</p>
            <p className="stat-value">₹{stats.cashPayments.toLocaleString()}</p>
            <p className="stat-change neutral">24.7% of total</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(229, 57, 53, 0.1)', color: 'var(--red)' }}>
            <CreditCard size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Failed Transactions</p>
            <p className="stat-value">{stats.failedTransactions}</p>
            <p className="stat-change negative">Requires attention</p>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className={activeTab === 'transactions' ? 'active' : ''} onClick={() => setActiveTab('transactions')}>
          Transactions
        </button>
        <button className={activeTab === 'settlements' ? 'active' : ''} onClick={() => setActiveTab('settlements')}>
          Restaurant Settlements
        </button>
        <button className={activeTab === 'payouts' ? 'active' : ''} onClick={() => setActiveTab('payouts')}>
          Delivery Payouts
        </button>
      </div>

      {activeTab === 'transactions' && (
        <div className="content-section">
          <div className="chart-card">
            <h3>Payment Methods Breakdown (Last 7 Days)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={paymentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="online" fill="#2E7D32" />
                <Bar dataKey="cash" fill="#FF9800" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="table-container">
            <h3>Recent Transactions</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Gateway</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id}>
                    <td><span className="txn-id">{txn.id}</span></td>
                    <td>{txn.orderId}</td>
                    <td>{txn.customer}</td>
                    <td>₹{txn.amount}</td>
                    <td><span className="method-badge">{txn.method}</span></td>
                    <td>{txn.gateway}</td>
                    <td>
                      <span className={`status-badge ${txn.status}`}>
                        {txn.status}
                      </span>
                    </td>
                    <td>{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'settlements' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Restaurant</th>
                <th>Period</th>
                <th>Orders</th>
                <th>Gross Amount</th>
                <th>Commission</th>
                <th>Net Amount</th>
                <th>Status</th>
                <th>Paid Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {settlements.map((settlement) => (
                <tr key={settlement.id}>
                  <td>{settlement.restaurant}</td>
                  <td>{settlement.period}</td>
                  <td>{settlement.orders}</td>
                  <td>₹{settlement.grossAmount.toLocaleString()}</td>
                  <td>₹{settlement.commission.toLocaleString()}</td>
                  <td><strong>₹{settlement.netAmount.toLocaleString()}</strong></td>
                  <td>
                    <span className={`status-badge ${settlement.status}`}>
                      {settlement.status}
                    </span>
                  </td>
                  <td>{settlement.paidDate}</td>
                  <td>
                    <button className="action-link">Download Invoice</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'payouts' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Delivery Partner</th>
                <th>Deliveries</th>
                <th>Earnings</th>
                <th>Bonus</th>
                <th>Total</th>
                <th>Status</th>
                <th>Paid Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveryPayouts.map((payout) => (
                <tr key={payout.id}>
                  <td>{payout.partner}</td>
                  <td>{payout.deliveries}</td>
                  <td>₹{payout.earnings.toLocaleString()}</td>
                  <td>₹{payout.bonus}</td>
                  <td><strong>₹{payout.total.toLocaleString()}</strong></td>
                  <td>
                    <span className={`status-badge ${payout.status}`}>
                      {payout.status}
                    </span>
                  </td>
                  <td>{payout.paidDate}</td>
                  <td>
                    <button className="action-link">View Details</button>
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

export default Payments
