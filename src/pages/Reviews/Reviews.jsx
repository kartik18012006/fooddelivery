import { useState } from 'react'
import { Star, Eye, EyeOff, Flag, CheckCircle, XCircle, Search, Filter, Clock } from 'lucide-react'
import './Reviews.css'

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const reviews = [
    { id: 1, customer: 'John Doe', restaurant: 'Pizza Place', rating: 5, comment: 'Excellent food and fast delivery! Highly recommended.', date: '2024-01-08', status: 'approved', reported: false },
    { id: 2, customer: 'Jane Smith', restaurant: 'Burger King', rating: 4, comment: 'Good food but delivery was slightly delayed.', date: '2024-01-07', status: 'approved', reported: false },
    { id: 3, customer: 'Bob Wilson', restaurant: 'Chinese Express', rating: 2, comment: 'Food quality was poor. Not worth the money.', date: '2024-01-06', status: 'pending', reported: false },
    { id: 4, customer: 'Alice Brown', restaurant: 'North Indian', rating: 5, comment: 'Amazing biryani! Will order again.', date: '2024-01-05', status: 'approved', reported: false },
    { id: 5, customer: 'Charlie Davis', restaurant: 'Pizza Place', rating: 1, comment: 'Inappropriate content here...', date: '2024-01-04', status: 'hidden', reported: true },
    { id: 6, customer: 'Diana Prince', restaurant: 'Dessert Corner', rating: 4, comment: 'Delicious desserts, great variety!', date: '2024-01-03', status: 'approved', reported: false },
  ]

  const deliveryReviews = [
    { id: 1, customer: 'John Doe', partner: 'Raj Kumar', orderId: 'ORD-1234', rating: 5, comment: 'Very polite and on time!', date: '2024-01-08', status: 'approved' },
    { id: 2, customer: 'Jane Smith', partner: 'Amit Singh', orderId: 'ORD-1235', rating: 3, comment: 'Late delivery', date: '2024-01-07', status: 'approved' },
    { id: 3, customer: 'Bob Wilson', partner: 'Vikash Sharma', orderId: 'ORD-1236', rating: 4, comment: 'Good service', date: '2024-01-06', status: 'approved' },
  ]

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = 
      review.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === 'all' || review.status === filter
    return matchesSearch && matchesFilter
  })

  const stats = {
    totalReviews: reviews.length,
    averageRating: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
    pending: reviews.filter(r => r.status === 'pending').length,
    reported: reviews.filter(r => r.reported).length
  }

  return (
    <div className="reviews-page">
      <div className="page-header">
        <h1>Ratings, Reviews & Content Moderation</h1>
        <div className="header-stats">
          <div className="stat-badge">
            <Star size={16} />
            <span>Avg Rating: {stats.averageRating}</span>
          </div>
          <div className="stat-badge warning">
            <span>Pending: {stats.pending}</span>
          </div>
          <div className="stat-badge danger">
            <span>Reported: {stats.reported}</span>
          </div>
        </div>
      </div>

      <div className="tabs-section">
        <div className="tabs">
          <button className="active">Restaurant Reviews</button>
          <button>Delivery Partner Reviews</button>
        </div>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search reviews..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-chips">
          <button className={`chip ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All ({reviews.length})
          </button>
          <button className={`chip ${filter === 'approved' ? 'active' : ''}`} onClick={() => setFilter('approved')}>
            Approved ({reviews.filter(r => r.status === 'approved').length})
          </button>
          <button className={`chip ${filter === 'pending' ? 'active' : ''}`} onClick={() => setFilter('pending')}>
            Pending ({stats.pending})
          </button>
          <button className={`chip ${filter === 'hidden' ? 'active' : ''}`} onClick={() => setFilter('hidden')}>
            Hidden ({reviews.filter(r => r.status === 'hidden').length})
          </button>
        </div>
      </div>

      <div className="reviews-list">
        {filteredReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <div className="avatar-small">{review.customer[0]}</div>
                <div>
                  <div className="reviewer-name">{review.customer}</div>
                  <div className="review-meta">
                    <span>{review.restaurant}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < review.rating ? '#FFB300' : 'none'}
                    color={i < review.rating ? '#FFB300' : '#E0E0E0'}
                  />
                ))}
                <span className="rating-value">{review.rating}</span>
              </div>
            </div>
            <div className="review-comment">{review.comment}</div>
            <div className="review-footer">
              <span className={`status-badge ${review.status}`}>
                {review.status === 'approved' && <CheckCircle size={14} />}
                {review.status === 'pending' && <Clock size={14} />}
                {review.status === 'hidden' && <EyeOff size={14} />}
                {review.status}
              </span>
              {review.reported && (
                <span className="reported-badge">
                  <Flag size={14} />
                  Reported
                </span>
              )}
              <div className="review-actions">
                {review.status === 'pending' && (
                  <>
                    <button className="action-btn approve">
                      <CheckCircle size={16} />
                      Approve
                    </button>
                    <button className="action-btn hide">
                      <EyeOff size={16} />
                      Hide
                    </button>
                  </>
                )}
                {review.status === 'approved' && (
                  <button className="action-btn hide">
                    <EyeOff size={16} />
                    Hide
                  </button>
                )}
                {review.status === 'hidden' && (
                  <button className="action-btn approve">
                    <Eye size={16} />
                    Show
                  </button>
                )}
                <button className="action-btn danger">
                  <Flag size={16} />
                  Flag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
