import { useState } from 'react'
import { TrendingUp, Plus, Edit, Trash2, MapPin } from 'lucide-react'
import './Pricing.css'

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('commission')

  const commissionRules = [
    { id: 1, restaurant: 'All Restaurants', commissionType: 'Percentage', value: '15%', minOrder: 0, maxOrder: 1000, status: 'active' },
    { id: 2, restaurant: 'Premium Restaurants', commissionType: 'Percentage', value: '20%', minOrder: 0, maxOrder: 5000, status: 'active' },
    { id: 3, restaurant: 'Pizza Place', commissionType: 'Percentage', value: '18%', minOrder: 0, maxOrder: null, status: 'active' },
    { id: 4, restaurant: 'Fast Food Chains', commissionType: 'Fixed + %', value: '₹50 + 12%', minOrder: 200, maxOrder: null, status: 'active' },
  ]

  const deliveryFees = [
    { id: 1, zone: 'Zone 1 (0-3 km)', baseFee: 25, perKm: 5, minOrder: 100, surgeMultiplier: 1.5 },
    { id: 2, zone: 'Zone 2 (3-6 km)', baseFee: 35, perKm: 7, minOrder: 150, surgeMultiplier: 2.0 },
    { id: 3, zone: 'Zone 3 (6-10 km)', baseFee: 50, perKm: 10, minOrder: 200, surgeMultiplier: 2.5 },
    { id: 4, zone: 'Zone 4 (10+ km)', baseFee: 70, perKm: 12, minOrder: 250, surgeMultiplier: 3.0 },
  ]

  const packagingCharges = [
    { id: 1, restaurant: 'All Restaurants', chargeType: 'Percentage', value: '3%', minCharge: 10, maxCharge: 50, status: 'active' },
    { id: 2, restaurant: 'Premium Restaurants', chargeType: 'Fixed', value: '₹25', minCharge: 25, maxCharge: 25, status: 'active' },
  ]

  const convenienceFees = [
    { id: 1, orderValue: '₹0 - ₹200', fee: '₹10', feeType: 'Fixed', status: 'active' },
    { id: 2, orderValue: '₹200 - ₹500', fee: '₹15', feeType: 'Fixed', status: 'active' },
    { id: 3, orderValue: '₹500+', fee: '2%', feeType: 'Percentage', status: 'active' },
  ]

  return (
    <div className="pricing-page">
      <div className="page-header">
        <h1>Pricing, Commission & Charges</h1>
        <button className="primary-btn">
          <Plus size={18} />
          Add Rule
        </button>
      </div>

      <div className="tabs">
        <button className={activeTab === 'commission' ? 'active' : ''} onClick={() => setActiveTab('commission')}>
          Commission Rules
        </button>
        <button className={activeTab === 'delivery' ? 'active' : ''} onClick={() => setActiveTab('delivery')}>
          Delivery Fees
        </button>
        <button className={activeTab === 'packaging' ? 'active' : ''} onClick={() => setActiveTab('packaging')}>
          Packaging Charges
        </button>
        <button className={activeTab === 'convenience' ? 'active' : ''} onClick={() => setActiveTab('convenience')}>
          Convenience Fees
        </button>
      </div>

      {activeTab === 'commission' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Restaurant</th>
                <th>Commission Type</th>
                <th>Value</th>
                <th>Min Order</th>
                <th>Max Order</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {commissionRules.map((rule) => (
                <tr key={rule.id}>
                  <td>{rule.restaurant}</td>
                  <td>{rule.commissionType}</td>
                  <td><span className="value-badge">{rule.value}</span></td>
                  <td>₹{rule.minOrder}</td>
                  <td>{rule.maxOrder ? `₹${rule.maxOrder}` : 'No limit'}</td>
                  <td><span className="status-badge active">{rule.status}</span></td>
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
      )}

      {activeTab === 'delivery' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Zone</th>
                <th>Base Fee</th>
                <th>Per Km</th>
                <th>Min Order</th>
                <th>Surge Multiplier</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveryFees.map((fee) => (
                <tr key={fee.id}>
                  <td>
                    <div className="zone-cell">
                      <MapPin size={16} />
                      {fee.zone}
                    </div>
                  </td>
                  <td>₹{fee.baseFee}</td>
                  <td>₹{fee.perKm}/km</td>
                  <td>₹{fee.minOrder}</td>
                  <td>{fee.surgeMultiplier}x</td>
                  <td>
                    <div className="action-buttons">
                      <button className="icon-btn"><Edit size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'packaging' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Restaurant</th>
                <th>Charge Type</th>
                <th>Value</th>
                <th>Min Charge</th>
                <th>Max Charge</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {packagingCharges.map((charge) => (
                <tr key={charge.id}>
                  <td>{charge.restaurant}</td>
                  <td>{charge.chargeType}</td>
                  <td><span className="value-badge">{charge.value}</span></td>
                  <td>₹{charge.minCharge}</td>
                  <td>₹{charge.maxCharge}</td>
                  <td><span className="status-badge active">{charge.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="icon-btn"><Edit size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'convenience' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Order Value</th>
                <th>Fee</th>
                <th>Fee Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {convenienceFees.map((fee) => (
                <tr key={fee.id}>
                  <td>{fee.orderValue}</td>
                  <td><span className="value-badge">{fee.fee}</span></td>
                  <td>{fee.feeType}</td>
                  <td><span className="status-badge active">{fee.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="icon-btn"><Edit size={16} /></button>
                    </div>
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

export default Pricing
