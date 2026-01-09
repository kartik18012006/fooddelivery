import { useState } from 'react'
import { Store, Plus, Edit, Trash2, ToggleLeft, ToggleRight, Search, Filter } from 'lucide-react'
import './RestaurantManagement.css'

const RestaurantManagement = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const restaurants = [
    {
      id: 1,
      name: 'Apna Bhojnalaya',
      category: 'North Indian, Thali',
      rating: 3.8,
      orders: 234,
      commission: '15%',
      status: 'online',
      owner: 'Rajesh Kumar',
      phone: '+91 98765 43230',
      address: 'Near City Center, Mumbai',
      gst: '27ABCDE1234F1Z5',
      fssai: 'FSSAI123456789',
      minOrder: 150,
      deliveryFee: 25,
      prepTime: '30-40 mins'
    },
    {
      id: 2,
      name: 'Mehak Restaurant',
      category: 'North Indian, Veg Meal',
      rating: 4.1,
      orders: 189,
      commission: '18%',
      status: 'online',
      owner: 'Priya Sharma',
      phone: '+91 98765 43231',
      address: 'Downtown, Mumbai',
      gst: '27ABCDE1234F2Z5',
      fssai: 'FSSAI123456790',
      minOrder: 200,
      deliveryFee: 30,
      prepTime: '35-40 mins'
    },
    {
      id: 3,
      name: "Domino's Pizza",
      category: 'Pizza, Fast Food',
      rating: 4.2,
      orders: 567,
      commission: '20%',
      status: 'online',
      owner: 'Franchise Team',
      phone: '+91 1800 208 1234',
      address: 'Multiple Locations',
      gst: '27ABCDE1234F3Z5',
      fssai: 'FSSAI123456791',
      minOrder: 199,
      deliveryFee: 40,
      prepTime: '15-20 mins'
    },
    {
      id: 4,
      name: 'Salam Restaurant',
      category: 'Biryani, Mughlai',
      rating: 3.8,
      orders: 145,
      commission: '16%',
      status: 'offline',
      owner: 'Mohammed Ali',
      phone: '+91 98765 43232',
      address: 'Old City, Mumbai',
      gst: '27ABCDE1234F4Z5',
      fssai: 'FSSAI123456792',
      minOrder: 180,
      deliveryFee: 25,
      prepTime: '35-40 mins'
    },
    {
      id: 5,
      name: 'Hot Shop',
      category: 'Chinese, Momos',
      rating: 4.0,
      orders: 298,
      commission: '17%',
      status: 'online',
      owner: 'Chen Wei',
      phone: '+91 98765 43233',
      address: 'Mall Road, Mumbai',
      gst: '27ABCDE1234F5Z5',
      fssai: 'FSSAI123456793',
      minOrder: 120,
      deliveryFee: 20,
      prepTime: '25-30 mins'
    },
    {
      id: 6,
      name: 'Pizzalicious',
      category: 'Pizza',
      rating: 4.0,
      orders: 167,
      commission: '15%',
      status: 'pending',
      owner: 'Amit Verma',
      phone: '+91 98765 43234',
      address: 'South Park, Mumbai',
      gst: '27ABCDE1234F6Z5',
      fssai: 'FSSAI123456794',
      minOrder: 220,
      deliveryFee: 30,
      prepTime: '45-50 mins'
    },
  ]

  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="restaurant-management">
      <div className="page-header">
        <h1>Restaurant Management</h1>
        <div className="header-actions">
          <button className="primary-btn">
            <Plus size={18} />
            Add Restaurant
          </button>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-label">Total Restaurants</span>
          <span className="stat-value">{restaurants.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Online</span>
          <span className="stat-value success">{restaurants.filter(r => r.status === 'online').length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Pending Approval</span>
          <span className="stat-value warning">{restaurants.filter(r => r.status === 'pending').length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Offline</span>
          <span className="stat-value">{restaurants.filter(r => r.status === 'offline').length}</span>
        </div>
      </div>

      <div className="filters-bar">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="filter-btn">
          <Filter size={18} />
          Filters
        </button>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Orders</th>
              <th>Commission</th>
              <th>Owner</th>
              <th>Min Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRestaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>
                  <div className="restaurant-cell">
                    <div className="restaurant-avatar">{restaurant.name[0]}</div>
                    <div>
                      <div className="restaurant-name">{restaurant.name}</div>
                      <div className="restaurant-address">{restaurant.address}</div>
                    </div>
                  </div>
                </td>
                <td>{restaurant.category}</td>
                <td>
                  <div className="rating-cell">
                    <span className="star">★</span>
                    {restaurant.rating}
                  </div>
                </td>
                <td>{restaurant.orders}</td>
                <td><span className="commission-badge">{restaurant.commission}</span></td>
                <td>
                  <div>
                    <div>{restaurant.owner}</div>
                    <div className="small-text">{restaurant.phone}</div>
                  </div>
                </td>
                <td>₹{restaurant.minOrder}</td>
                <td>
                  <span className={`status-badge ${restaurant.status}`}>
                    {restaurant.status === 'online' && <ToggleRight size={14} />}
                    {restaurant.status === 'offline' && <ToggleLeft size={14} />}
                    {restaurant.status === 'pending' && '⏳'}
                    {restaurant.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="icon-btn" title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className="icon-btn" title="Menu Management">
                      <Store size={16} />
                    </button>
                    <button className="icon-btn danger" title="Delete">
                      <Trash2 size={16} />
                    </button>
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

export default RestaurantManagement
