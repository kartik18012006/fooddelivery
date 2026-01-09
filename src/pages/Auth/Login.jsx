import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    // Trim whitespace from inputs
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()
    
    // Check if fields are empty
    if (!trimmedEmail || !trimmedPassword) {
      setError('Please enter both email and password.')
      return
    }
    
    // Authentication - Only test@gmail.com / 123456 works
    if (trimmedEmail === 'test@gmail.com' && trimmedPassword === '123456') {
      localStorage.setItem('admin_token', 'mock_token_123')
      // Use window.location for full page reload to update auth state
      window.location.href = '/dashboard'
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
          <p>Admin Panel</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
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

