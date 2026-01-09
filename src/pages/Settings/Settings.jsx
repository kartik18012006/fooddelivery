import { useState } from 'react'
import { Settings as SettingsIcon, Smartphone, Bell, Code, ToggleRight, ToggleLeft } from 'lucide-react'
import './Settings.css'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('app')

  const appVersions = [
    { platform: 'Android', currentVersion: '1.2.0', minVersion: '1.0.0', forceUpdate: false },
    { platform: 'iOS', currentVersion: '1.2.0', minVersion: '1.0.0', forceUpdate: false },
  ]

  const features = [
    { name: 'Online Payments', enabled: true, description: 'Enable/disable online payment gateway' },
    { name: 'Cash on Delivery', enabled: true, description: 'Enable/disable COD payments' },
    { name: 'Surge Pricing', enabled: true, description: 'Dynamic pricing based on demand' },
    { name: 'Order Batching', enabled: false, description: 'Batch multiple orders for delivery' },
    { name: 'Rating System', enabled: true, description: 'Allow users to rate restaurants' },
  ]

  const notifications = [
    { type: 'Order Placed', sms: true, email: true, push: true },
    { type: 'Order Accepted', sms: false, email: true, push: true },
    { type: 'Out for Delivery', sms: true, email: false, push: true },
    { type: 'Order Delivered', sms: true, email: true, push: true },
  ]

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>System Configuration</h1>
      </div>

      <div className="tabs">
        <button className={activeTab === 'app' ? 'active' : ''} onClick={() => setActiveTab('app')}>
          <Smartphone size={18} />
          App Version Control
        </button>
        <button className={activeTab === 'features' ? 'active' : ''} onClick={() => setActiveTab('features')}>
          <Code size={18} />
          Feature Toggles
        </button>
        <button className={activeTab === 'notifications' ? 'active' : ''} onClick={() => setActiveTab('notifications')}>
          <Bell size={18} />
          Notification Templates
        </button>
      </div>

      {activeTab === 'app' && (
        <div className="settings-section">
          <div className="settings-card">
            <h3>App Version Management</h3>
            <div className="version-list">
              {appVersions.map((version) => (
                <div key={version.platform} className="version-item">
                  <div className="version-info">
                    <div>
                      <strong>{version.platform}</strong>
                      <div className="version-details">
                        <span>Current: {version.currentVersion}</span>
                        <span>•</span>
                        <span>Min: {version.minVersion}</span>
                      </div>
                    </div>
                  </div>
                  <div className="version-controls">
                    <label className="toggle-switch">
                      <input type="checkbox" checked={version.forceUpdate} />
                      <span className="slider">Force Update</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="settings-card">
            <h3>Maintenance Mode</h3>
            <div className="maintenance-control">
              <label className="toggle-switch large">
                <input type="checkbox" />
                <span className="slider">Enable Maintenance Mode</span>
              </label>
              <p className="helper-text">App will show maintenance message to all users</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'features' && (
        <div className="settings-section">
          <div className="settings-card">
            <h3>Feature Flags</h3>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-info">
                    <strong>{feature.name}</strong>
                    <p className="feature-desc">{feature.description}</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked={feature.enabled} />
                    <span className="slider">{feature.enabled ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="settings-section">
          <div className="settings-card">
            <h3>Notification Settings</h3>
            <table className="notification-table">
              <thead>
                <tr>
                  <th>Notification Type</th>
                  <th>SMS</th>
                  <th>Email</th>
                  <th>Push</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notif, index) => (
                  <tr key={index}>
                    <td><strong>{notif.type}</strong></td>
                    <td>
                      <label className="checkbox-label">
                        <input type="checkbox" checked={notif.sms} />
                        <span></span>
                      </label>
                    </td>
                    <td>
                      <label className="checkbox-label">
                        <input type="checkbox" checked={notif.email} />
                        <span></span>
                      </label>
                    </td>
                    <td>
                      <label className="checkbox-label">
                        <input type="checkbox" checked={notif.push} />
                        <span></span>
                      </label>
                    </td>
                    <td>
                      <button className="action-link">Edit Template</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Settings
