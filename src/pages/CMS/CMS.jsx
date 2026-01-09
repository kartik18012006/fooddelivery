import { useState } from 'react'
import { FileText, Image, Plus, Edit, Trash2, Globe } from 'lucide-react'
import './CMS.css'

const CMS = () => {
  const [activeTab, setActiveTab] = useState('banners')

  const banners = [
    { id: 1, title: 'MEALS UNDER ₹250', image: 'banner1.jpg', position: 'Homepage Top', status: 'active', startDate: '2024-01-01', endDate: '2024-01-31', link: '/category/under-250' },
    { id: 2, title: 'Weekend Special', image: 'banner2.jpg', position: 'Homepage Middle', status: 'active', startDate: '2024-01-06', endDate: '2024-01-07', link: '/offers/weekend' },
    { id: 3, title: 'New Year Offers', image: 'banner3.jpg', position: 'Homepage Top', status: 'inactive', startDate: '2024-01-01', endDate: '2024-01-05', link: '/offers/newyear' },
  ]

  const collections = [
    { id: 1, name: 'Top Rated Restaurants', type: 'Cuisine Collection', items: 25, status: 'active', city: 'Mumbai' },
    { id: 2, name: 'Quick Bites', type: 'Category Collection', items: 18, status: 'active', city: 'All Cities' },
    { id: 3, name: 'Healthy Options', type: 'Diet Collection', items: 32, status: 'active', city: 'Mumbai' },
    { id: 4, name: 'Premium Dining', type: 'Cuisine Collection', items: 15, status: 'inactive', city: 'Mumbai' },
  ]

  const cityContent = [
    { id: 1, city: 'Mumbai', title: 'Mumbai Food Guide', description: 'Best restaurants in Mumbai', restaurants: 342, status: 'active' },
    { id: 2, city: 'Delhi', title: 'Delhi Food Guide', description: 'Best restaurants in Delhi', restaurants: 289, status: 'active' },
    { id: 3, city: 'Bangalore', title: 'Bangalore Food Guide', description: 'Best restaurants in Bangalore', restaurants: 256, status: 'active' },
  ]

  return (
    <div className="cms-page">
      <div className="page-header">
        <h1>Content Management System</h1>
        <button className="primary-btn">
          <Plus size={18} />
          Add Content
        </button>
      </div>

      <div className="tabs">
        <button className={activeTab === 'banners' ? 'active' : ''} onClick={() => setActiveTab('banners')}>
          <Image size={18} />
          Banners
        </button>
        <button className={activeTab === 'collections' ? 'active' : ''} onClick={() => setActiveTab('collections')}>
          <FileText size={18} />
          Collections
        </button>
        <button className={activeTab === 'cities' ? 'active' : ''} onClick={() => setActiveTab('cities')}>
          <Globe size={18} />
          City Content
        </button>
      </div>

      {activeTab === 'banners' && (
        <div className="content-grid">
          {banners.map((banner) => (
            <div key={banner.id} className="content-card">
              <div className="content-image">
                <Image size={48} />
                <span>Banner Image</span>
              </div>
              <div className="content-details">
                <h3>{banner.title}</h3>
                <div className="content-meta">
                  <span>Position: {banner.position}</span>
                  <span>Link: {banner.link}</span>
                  <span>Valid: {banner.startDate} to {banner.endDate}</span>
                </div>
                <div className="content-footer">
                  <span className={`status-badge ${banner.status}`}>{banner.status}</span>
                  <div className="content-actions">
                    <button className="icon-btn"><Edit size={16} /></button>
                    <button className="icon-btn danger"><Trash2 size={16} /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'collections' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Items</th>
                <th>City</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {collections.map((collection) => (
                <tr key={collection.id}>
                  <td><strong>{collection.name}</strong></td>
                  <td>{collection.type}</td>
                  <td>{collection.items}</td>
                  <td>{collection.city}</td>
                  <td><span className={`status-badge ${collection.status}`}>{collection.status}</span></td>
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

      {activeTab === 'cities' && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Title</th>
                <th>Description</th>
                <th>Restaurants</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cityContent.map((content) => (
                <tr key={content.id}>
                  <td><strong>{content.city}</strong></td>
                  <td>{content.title}</td>
                  <td>{content.description}</td>
                  <td>{content.restaurants}</td>
                  <td><span className={`status-badge ${content.status}`}>{content.status}</span></td>
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

export default CMS
