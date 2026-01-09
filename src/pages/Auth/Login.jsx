import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Store, Truck } from 'lucide-react'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState(null) // 'customer' | 'restaurant' | 'delivery'
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    // Check if user type is selected
    if (!userType) {
      setError('Please select a user type.')
      return
    }
    
    // Trim whitespace from inputs
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()
    
    // Check if fields are empty
    if (!trimmedEmail || !trimmedPassword) {
      setError('Please enter both email and password.')
      return
    }
    
    // Authentication - Only test@gmail.com / 123456 works for all user types
    if (trimmedEmail === 'test@gmail.com' && trimmedPassword === '123456') {
      localStorage.setItem('admin_token', 'mock_token_123')
      localStorage.setItem('user_type', userType)
      
      // Navigate based on user type
      if (userType === 'restaurant') {
        window.location.href = '/restaurant'
      } else if (userType === 'delivery') {
        window.location.href = '/delivery'
      } else {
        // Customer - redirect to customer app or admin dashboard for now
        window.location.href = '/dashboard'
      }
    } else {
      setError('Invalid email or password. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-large">🍽️</div>
          <h1>Taste Exprez</h1>
          <p>Welcome Back</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          {/* User Type Selection */}
          <div className="user-type-selection">
            <label className="form-label">Select User Type</label>
            <div className="user-type-options">
              <button
                type="button"
                className={`user-type-btn ${userType === 'customer' ? 'active' : ''}`}
                onClick={() => setUserType('customer')}
              >
                <User size={24} />
                <span>Customer</span>
              </button>
              <button
                type="button"
                className={`user-type-btn ${userType === 'restaurant' ? 'active' : ''}`}
                onClick={() => setUserType('restaurant')}
              >
                <Store size={24} />
                <span>Restaurant</span>
              </button>
              <button
                type="button"
                className={`user-type-btn ${userType === 'delivery' ? 'active' : ''}`}
                onClick={() => setUserType('delivery')}
              >
                <Truck size={24} />
                <span>Delivery Partner</span>
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
