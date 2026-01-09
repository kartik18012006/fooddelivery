import { useState } from 'react'
import { Truck, MapPin, Clock, Users, Plus, Edit } from 'lucide-react'
import './Logistics.css'

const Logistics = () => {
  const [activeTab, setActiveTab] = useState('zones')

  const zones = [
    { id: 1, name: 'Zone 1', area: 'Downtown Mumbai', deliveryPartners: 45, avgDeliveryTime: '28 mins', orders: 234, status: 'active' },
    { id: 2, name: 'Zone 2', area: 'Bandra, Andheri', deliveryPartners: 32, avgDeliveryTime: '35 mins', orders: 189, status: 'active' },
    { id: 3, name: 'Zone 3', area: 'Powai, Kurla', deliveryPartners: 28, avgDeliveryTime: '42 mins', orders: 156, status: 'active' },
    { id: 4, name: 'Zone 4', area: 'Thane, Navi Mumbai', deliveryPartners: 19, avgDeliveryTime: '55 mins', orders: 98, status: 'active' },
  ]

  const deliveryPartners = [
    { id: 1, name: 'Raj Kumar', zone: 'Zone 1', vehicle: 'Bike', status: 'online', currentLocation: 'Mumbai Central', activeOrders: 2, rating: 4.8 },
    { id: 2, name: 'Amit Singh', zone: 'Zone 1', vehicle: 'Bike', status: 'online', currentLocation: 'Churchgate', activeOrders: 1, rating: 4.5 },
    { id: 3, name: 'Vikash Sharma', zone: 'Zone 2', vehicle: 'Scooter', status: 'online', currentLocation: 'Bandra', activeOrders: 3, rating: 4.2 },
    { id: 4, name: 'Priya Patel', zone: 'Zone 1', vehicle: 'Bike', status: 'offline', currentLocation: 'Andheri', activeOrders: 0, rating: 4.9 },
  ]

  const config = {
    maxDeliveryDistance: '10 km',
    defaultETA: '35-40 mins',
    batchSize: 3,
    surgeThreshold: 80,
    autoAssignment: true
  }

  return (
    <div className="logistics-page">
      <div className="page-header">
        <h1>Logistics & Delivery Ops</h1>
        <button className="primary-btn">
          <Plus size={18} />
          Add Zone
        </button>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <MapPin size={24} />
          <div>
            <span className="stat-label">Active Zones</span>
            <span className="stat-value">{zones.length}</span>
          </div>
        </div>
        <div className="stat-item">
          <Truck size={24} />
          <div>
            <span className="stat-label">Online Partners</span>
            <span className="stat-value">{deliveryPartners.filter(p => p.status === 'online').length}</span>
          </div>
        </div>
        <div className="stat-item">
          <Clock size={24} />
          <div>
            <span className="stat-label">Avg Delivery Time</span>
            <span className="stat-value">{config.defaultETA}</span>
          </div>
        </div>
        <div className="stat-item">
          <Users size={24} />
          <div>
            <span className="stat-label">Total Partners</span>
            <span className="stat-value">{deliveryPartners.length}</span>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className={activeTab === 'zones' ? 'active' : ''} onClick={() => setActiveTab('zones')}>
          Zones
        </button>
        <button className={activeTab === 'partners' ? 'active' : ''} onClick={() => setActiveTab('partners')}>
          Delivery Partners Map
        </button>
        <button className={activeTab === 'config' ? 'active' : ''} onClick={() => setActiveTab('config')}>
          Configuration
        </button>
      </div>

      {activeTab === 'zones' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Zone Name</th>
                <th>Area</th>
                <th>Partners</th>
                <th>Avg Delivery Time</th>
                <th>Orders (Today)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((zone) => (
                <tr key={zone.id}>
                  <td><strong>{zone.name}</strong></td>
                  <td>{zone.area}</td>
                  <td>{zone.deliveryPartners}</td>
                  <td>{zone.avgDeliveryTime}</td>
                  <td>{zone.orders}</td>
                  <td><span className="status-badge active">{zone.status}</span></td>
                  <td>
                    <button className="icon-btn"><Edit size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'partners' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Partner</th>
                <th>Zone</th>
                <th>Vehicle</th>
                <th>Current Location</th>
                <th>Active Orders</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveryPartners.map((partner) => (
                <tr key={partner.id}>
                  <td><strong>{partner.name}</strong></td>
                  <td>{partner.zone}</td>
                  <td>{partner.vehicle}</td>
                  <td>
                    <div className="location-cell">
                      <MapPin size={14} />
                      {partner.currentLocation}
                    </div>
                  </td>
                  <td><span className="order-count">{partner.activeOrders}</span></td>
                  <td>★ {partner.rating}</td>
                  <td>
                    <span className={`status-badge ${partner.status}`}>
                      {partner.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-link">View on Map</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'config' && (
        <div className="config-section">
          <div className="config-card">
            <h3>Delivery Configuration</h3>
            <div className="config-items">
              <div className="config-item">
                <label>Max Delivery Distance</label>
                <input type="text" value={config.maxDeliveryDistance} readOnly />
              </div>
              <div className="config-item">
                <label>Default ETA</label>
                <input type="text" value={config.defaultETA} readOnly />
              </div>
              <div className="config-item">
                <label>Order Batch Size</label>
                <input type="number" value={config.batchSize} readOnly />
              </div>
              <div className="config-item">
                <label>Surge Threshold (%)</label>
                <input type="number" value={config.surgeThreshold} readOnly />
              </div>
              <div className="config-item">
                <label>Auto Assignment</label>
                <input type="checkbox" checked={config.autoAssignment} readOnly />
              </div>
            </div>
            <button className="edit-btn">Edit Configuration</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Logistics
