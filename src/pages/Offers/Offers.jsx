import { useState } from 'react'
import { Tag, Plus, Edit, Trash2, Calendar, Users, TrendingUp } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './Offers.css'

const Offers = () => {
  const coupons = [
    { id: 1, code: 'FLAT50', type: 'Flat', discount: '₹50', maxDiscount: 50, minOrder: 200, usage: 1247, limit: 5000, validFrom: '2024-01-01', validTo: '2024-01-31', status: 'active', restaurant: 'All' },
    { id: 2, code: 'WEEKEND25', type: 'Percentage', discount: '25%', maxDiscount: 100, minOrder: 300, usage: 892, limit: 2000, validFrom: '2024-01-06', validTo: '2024-01-07', status: 'active', restaurant: 'All' },
    { id: 3, code: 'FIRST100', type: 'Flat', discount: '₹100', maxDiscount: 100, minOrder: 400, usage: 523, limit: 1000, validFrom: '2024-01-01', validTo: '2024-03-31', status: 'active', restaurant: 'New Users' },
    { id: 4, code: 'PIZZA30', type: 'Percentage', discount: '30%', maxDiscount: 150, minOrder: 500, usage: 2341, limit: 5000, validFrom: '2024-01-05', validTo: '2024-01-15', status: 'expired', restaurant: "Domino's Pizza" },
  ]

  const campaignData = [
    { date: 'Day 1', usage: 450, revenue: 45000 },
    { date: 'Day 2', usage: 520, revenue: 52000 },
    { date: 'Day 3', usage: 480, revenue: 48000 },
    { date: 'Day 4', usage: 610, revenue: 61000 },
    { date: 'Day 5', usage: 550, revenue: 55000 },
    { date: 'Day 6', usage: 670, revenue: 67000 },
    { date: 'Day 7', usage: 720, revenue: 72000 },
  ]

  return (
    <div className="offers-page">
      <div className="page-header">
        <h1>Offers, Coupons & Promotions</h1>
        <button className="primary-btn">
          <Plus size={18} />
          Create Coupon
        </button>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <Tag size={24} />
          <div>
            <span className="stat-label">Active Coupons</span>
            <span className="stat-value">{coupons.filter(c => c.status === 'active').length}</span>
          </div>
        </div>
        <div className="stat-item">
          <TrendingUp size={24} />
          <div>
            <span className="stat-label">Total Usage</span>
            <span className="stat-value">{coupons.reduce((sum, c) => sum + c.usage, 0)}</span>
          </div>
        </div>
        <div className="stat-item">
          <Users size={24} />
          <div>
            <span className="stat-label">Total Discount</span>
            <span className="stat-value">₹{coupons.reduce((sum, c) => sum + (c.usage * (c.maxDiscount || 0)), 0).toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-card">
          <h3>Coupon Usage Trend (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="usage" stroke="#2E7D32" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Type</th>
              <th>Discount</th>
              <th>Max Discount</th>
              <th>Min Order</th>
              <th>Usage</th>
              <th>Limit</th>
              <th>Valid Period</th>
              <th>Restaurant</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td>
                  <span className="coupon-code">{coupon.code}</span>
                </td>
                <td>{coupon.type}</td>
                <td><span className="discount-badge">{coupon.discount}</span></td>
                <td>₹{coupon.maxDiscount}</td>
                <td>₹{coupon.minOrder}</td>
                <td>
                  <div className="usage-cell">
                    <span>{coupon.usage}</span>
                    <div className="usage-bar">
                      <div 
                        className="usage-fill" 
                        style={{ width: `${(coupon.usage / coupon.limit) * 100}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td>{coupon.limit}</td>
                <td>
                  <div className="date-cell">
                    <Calendar size={14} />
                    <div>
                      <div>{coupon.validFrom}</div>
                      <div className="small-text">to {coupon.validTo}</div>
                    </div>
                  </div>
                </td>
                <td>{coupon.restaurant}</td>
                <td>
                  <span className={`status-badge ${coupon.status}`}>
                    {coupon.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="icon-btn"><Edit size={16} /></button>
                    <button className="icon-btn danger"><Trash2 size={16} /></button>
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

export default Offers
